import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, FileText, X, AlertCircle, Loader2, ArrowLeft, CheckCircle2, Eye, Edit3, ZoomIn } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { submitPayment, checkUtrAvailability } from "../services/paymentService";

const BANK_DETAILS = [
  { label: "Name of Beneficiary", value: "Ajay Kumar Garg Engineering College" },
  { label: "Name of the Bank", value: "Kotak Mahindra Bank Ltd." },
  { label: "Address of the Bank", value: "30 & 31 Navyug Market, P.B. No. 75, Ghaziabad-201001 (U.P.) - INDIA" },
  { label: "Branch Code", value: "5295" },
  { label: "Bank Account No.", value: "508010250461" },
  { label: "Type of Bank Account", value: "Savings Bank Accounts" },
  { label: "RTGS/NEFT/IFSC Code", value: "KKBK0005295" },
  { label: "Contact No.", value: "0129" },
];

interface FormErrors {
  [key: string]: string;
}

const SubmitProofPage: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    senderName: "",
    email: "",
    mobileNumber: "",
    amount: "",
    transactionId: "",
    senderAccountName: "",
    transactionDateTime: "",
  });

  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showBankDetails, setShowBankDetails] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);

  const onChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowed = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
    if (!allowed.includes(file.type)) {
      setErrors((prev) => ({ ...prev, screenshot: "Only JPG, PNG, or PDF files are allowed." }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, screenshot: "File size must be under 5MB." }));
      return;
    }

    setScreenshotFile(file);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.screenshot;
      return next;
    });

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => setScreenshotPreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setScreenshotPreview("");
    }
  };

  const removeFile = () => {
    setScreenshotFile(null);
    setScreenshotPreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.senderName.trim()) {
      newErrors.senderName = "Sender name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Please use a valid email address.";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Mobile number must be exactly 10 digits.";
    }
    
    if (!formData.amount || isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      newErrors.amount = "Enter a valid amount.";
    }

    if (!formData.senderAccountName.trim()) {
      newErrors.senderAccountName = "Sender's bank account holder name is required.";
    }

    if (!formData.transactionDateTime) {
      newErrors.transactionDateTime = "Transaction date and time is required.";
    }

    if (!formData.transactionId.trim()) {
      newErrors.transactionId = "Transaction ID / UTR is required.";
    } else {
      const utr = formData.transactionId.trim();
      if (utr.length < 6) {
        newErrors.transactionId = "Transaction ID seems too short.";
      }
    }

    if (!screenshotFile) {
      newErrors.screenshot = "Please upload a payment screenshot.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 1: Validate and show review
  const handleReview = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    setShowReview(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 2: Actually submit after user confirms
  const handleConfirmSubmit = async () => {
    setSubmitError("");
    setIsSubmitting(true);

    try {
      // 1. Check duplicate UTR/Transaction ID on backend before submitting
      const utrExists = await checkUtrAvailability(formData.transactionId.trim());
      if (utrExists) {
        setErrors((prev) => ({ 
          ...prev, 
          transactionId: "This Transaction ID/UTR has already been submitted. Sharing screenshots is not allowed." 
        }));
        setShowReview(false);
        setIsSubmitting(false);
        return;
      }

      // Convert screenshot to base64 for Cloudinary direct upload
      let screenshotUrl = "";
      if (screenshotFile) {
        screenshotUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (ev) => resolve(ev.target?.result as string);
          reader.readAsDataURL(screenshotFile);
        });
      }

      const result = await submitPayment({
        senderName: formData.senderName.trim(),
        email: formData.email.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        amount: Number(formData.amount),
        transactionId: formData.transactionId.trim(),
        screenshotUrl,
        senderAccountName: formData.senderAccountName.trim(),
        transactionDateTime: formData.transactionDateTime,
      });

      navigate(`/registrations/payment-status/${result.id}`, { replace: true });
    } catch (err: any) {
      setSubmitError(err.message || "Submission failed. Please check your connection and try again.");
      setShowReview(false);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDateTime = (dt: string) => {
    if (!dt) return "";
    const d = new Date(dt);
    return d.toLocaleString("en-IN", {
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit", hour12: true,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Submit Payment Proof"
        description="Upload your payment proof for verification"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/registrations")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Registration
          </motion.button>

          {/* Bank Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10"
          >
            <button
              type="button"
              onClick={() => setShowBankDetails(!showBankDetails)}
              className="w-full flex items-center justify-between px-6 py-4 bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Bank Details for Payment (IMPS / UPI / RTGS / NEFT)</span>
              <motion.span
                animate={{ rotate: showBankDetails ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl leading-none"
              >
                ▾
              </motion.span>
            </button>

            {showBankDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-gray-200">
                      {BANK_DETAILS.map((item, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="py-3 px-6 text-gray-700 font-medium whitespace-nowrap" style={{ width: "35%" }}>
                            {item.label}
                          </td>
                          <td className="py-3 px-6 text-gray-900">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-3 bg-blue-50 border-t border-blue-100">
                  <p className="text-sm text-blue-800 font-medium">
                    Please pay using the above details and then fill in the form below with your transaction proof.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Submission Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 bg-blue-600 text-white">
              <h2 className="text-xl font-semibold">Payment Proof Details</h2>
              <p className="text-blue-100 text-sm mt-1">All fields are required</p>
            </div>

            <form onSubmit={handleReview} className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Sender Name */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Sender Name</label>
                  <input
                    type="text"
                    value={formData.senderName}
                    onChange={(e) => onChange("senderName", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.senderName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.senderName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Mobile Number</label>
                  <input
                    type="text"
                    value={formData.mobileNumber}
                    onChange={(e) => onChange("mobileNumber", e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.mobileNumber && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Amount Paid (₹)</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={formData.amount}
                    onChange={(e) => onChange("amount", e.target.value)}
                    placeholder="Enter amount paid"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.amount && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.amount}
                    </p>
                  )}
                </div>

                {/* Sender Account Name */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Sender's Account Holder Name</label>
                  <input
                    type="text"
                    value={formData.senderAccountName}
                    onChange={(e) => onChange("senderAccountName", e.target.value)}
                    placeholder="Name of person making the transfer"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.senderAccountName && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.senderAccountName}
                    </p>
                  )}
                </div>

                {/* Transaction Date & Time */}
                <div className="space-y-2 group">
                  <label className="block text-gray-700 font-medium">Transaction Date & Time</label>
                  <input
                    type="datetime-local"
                    value={formData.transactionDateTime}
                    onChange={(e) => onChange("transactionDateTime", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.transactionDateTime && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.transactionDateTime}
                    </p>
                  )}
                  <p className="text-xs rounded-md px-3 py-2 items-start gap-1.5 mt-1 hidden group-hover:flex" style={{ color: '#b45309', backgroundColor: '#fffbeb', border: '1px solid #fde68a' }}>
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>The date &amp; time you enter must exactly match the transaction date &amp; time shown on your payment proof screenshot. Mismatched details may lead to rejection.</span>
                  </p>
                </div>

                {/* Transaction ID */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Transaction ID / UTR Number</label>
                  <input
                    type="text"
                    value={formData.transactionId}
                    onChange={(e) => onChange("transactionId", e.target.value)}
                    placeholder="e.g. UPI123456789012"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.transactionId && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.transactionId}
                    </p>
                  )}
                </div>

                {/* Screenshot Upload */}
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-gray-700 font-medium">Payment Screenshot</label>
                  <p className="text-sm text-gray-500 mb-2">JPG, PNG, or PDF — Max 5MB</p>

                  {!screenshotFile ? (
                    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-gray-500 text-sm">Click to upload or drag & drop</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                      <div className="flex items-start gap-4">
                        {screenshotPreview ? (
                          <img
                            src={screenshotPreview}
                            alt="Screenshot preview"
                            className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                          />
                        ) : (
                          <div className="w-24 h-24 flex items-center justify-center bg-blue-50 rounded-lg border border-blue-100">
                            <FileText className="w-8 h-8 text-blue-600" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{screenshotFile.name}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {(screenshotFile.size / 1024).toFixed(1)} KB
                          </p>
                          <div className="flex items-center gap-1 mt-2 text-green-600">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span className="text-xs">Ready to upload</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {errors.screenshot && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.screenshot}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center gap-4 pt-8">
                {submitError && (
                  <div className="w-full bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                    <button
                      type="button"
                      onClick={() => setSubmitError("")}
                      className="ml-auto text-red-400 hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  Review & Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ───── Review / Confirmation Overlay ───── */}
      {showReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => !isSubmitting && setShowReview(false)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-blue-600 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
              <div>
                <h3 className="text-xl font-bold">Review Your Details</h3>
                <p className="text-blue-100 text-sm mt-0.5">Please verify all information before submitting</p>
              </div>
              {!isSubmitting && (
                <button
                  type="button"
                  onClick={() => setShowReview(false)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Details */}
            <div className="p-6 space-y-1">
              {[
                { label: "Sender Name", value: formData.senderName },
                { label: "Email Address", value: formData.email },
                { label: "Mobile Number", value: formData.mobileNumber },
                { label: "Amount Paid (₹)", value: `₹${Number(formData.amount).toLocaleString("en-IN")}` },
                { label: "Account Holder Name", value: formData.senderAccountName },
                { label: "Transaction Date & Time", value: formatDateTime(formData.transactionDateTime) },
                { label: "Transaction ID / UTR", value: formData.transactionId },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3 rounded-lg ${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <span className="text-gray-500 text-sm font-medium sm:w-48 shrink-0">{item.label}</span>
                  <span className="text-gray-900 font-semibold break-all">{item.value}</span>
                </div>
              ))}

              {/* Screenshot preview */}
              {screenshotFile && (
                <div className="px-4 py-3 rounded-lg bg-gray-50">
                  <span className="text-gray-500 text-sm font-medium block mb-2">Payment Screenshot</span>
                  <div className="flex items-center gap-3">
                    {screenshotPreview ? (
                      <div
                        className="relative group/img cursor-pointer"
                        onClick={() => setShowImagePreview(true)}
                      >
                        <img
                          src={screenshotPreview}
                          alt="Payment screenshot"
                          className="w-20 h-20 object-cover rounded-lg border border-gray-200 transition-all group-hover/img:brightness-75 group-hover/img:border-blue-400"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <ZoomIn className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-lg border border-blue-100">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-900">{screenshotFile.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {(screenshotFile.size / 1024).toFixed(1)} KB
                      </p>
                      {screenshotPreview && (
                        <button
                          type="button"
                          onClick={() => setShowImagePreview(true)}
                          className="text-xs text-blue-600 hover:text-blue-800 font-medium mt-1 flex items-center gap-1 transition-colors"
                        >
                          <ZoomIn className="w-3 h-3" />
                          Click to view full image
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit error inside modal */}
            {submitError && (
              <div className="mx-6 mb-2 bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Action buttons */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-end gap-3 rounded-b-2xl">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setShowReview(false)}
                className="w-full sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Edit3 className="w-4 h-4" />
                Go Back & Edit
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleConfirmSubmit}
                className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white rounded-full font-semibold shadow-md hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Confirm & Submit
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* ───── Fullscreen Image Preview Lightbox ───── */}
      {showImagePreview && screenshotPreview && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Dark backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80"
            onClick={() => setShowImagePreview(false)}
          />

          {/* Image container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowImagePreview(false)}
              className="absolute -top-2 -right-2 z-10 bg-white text-gray-700 rounded-full p-2 shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Full image */}
            <img
              src={screenshotPreview}
              alt="Payment screenshot full view"
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl border-2 border-white/20"
            />

            {/* File info bar */}
            <div className="mt-3 bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{screenshotFile?.name}</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">{screenshotFile ? (screenshotFile.size / 1024).toFixed(1) + " KB" : ""}</span>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SubmitProofPage;
