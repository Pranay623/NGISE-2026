import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  X,
  AlertCircle,
  Loader2,
  ArrowLeft,
  CheckCircle2,
  Eye,
  Edit3,
  ZoomIn,
  Copy,
  Check,
  QrCode,
  Building2,
  Download,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { submitPayment, checkUtrAvailability } from "../services/paymentService";
import CleanQRImage from "../public/clean-upi-qr.png";
import BankDocImage from "../public/bank-details-doc.jpg";

const UPI_PAY_URL =
  "upi://pay?ver=01&mode=02&orgId=00079&tid=&tr=2985199A&tn=&pa=0795295A0223843.bqr@kotak&pn=Ajay%20Kumar%20Garg%20Engineering%20College&mc=8299&am=&mid=0795295A0223843&mtid=2985199A&qrMedium=04";

const BANK_DETAILS = [
  { label: "Name of the Beneficiary", value: "Ajay Kumar Garg Engineering College", copyable: true },
  { label: "Name of the Bank", value: "Kotak Mahindra Bank Ltd.", copyable: false },
  { label: "Bank Account No.", value: "508010250461", copyable: true, highlight: true },
  { label: "RTGS / NEFT / IFSC Code", value: "KKBK0005295", copyable: true, highlight: true },
  { label: "Type of Bank Account", value: "Saving Bank Accounts", copyable: false },
  { label: "Branch Code", value: "5295", copyable: false },
  { label: "Branch Address", value: "30 & 31 Navyug Market, P.B.No. 75, Ghaziabad-201001", copyable: false },
  { label: "Contact No.", value: "0120-2790969", copyable: true },
  { label: "PAN", value: "AAATI3688N", copyable: true },
];

const UPI_DETAILS = {
  upiId: "0795295A0223843.bqr@kotak",
  merchantName: "Ajay Kumar Garg Engineering College",
  bank: "Kotak Mahindra Bank",
  tid: "2985199A",
};

interface FormErrors {
  [key: string]: string;
}

const SubmitProofPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const locState = (location.state as any) || {};

  const [formData, setFormData] = useState({
    paperId: locState.paperId || "",
    paperTitle: locState.paperTitle || "",
    country: locState.country || "",
    senderName: locState.senderName || "",
    email: locState.email || "",
    mobileNumber: locState.mobileNumber || "",
    whatsappNumber: locState.whatsappNumber || "",
    amount: locState.amount || "",
    transactionId: "",
    senderAccountName: locState.senderName || "",
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
  const [showQrLightbox, setShowQrLightbox] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;
    try {
      if (turnstileRef.current && (window as any).turnstile) {
        (window as any).turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            setTurnstileToken(token);
          },
        });
      }
    } catch (e) {
      console.warn("Turnstile initialization failed:", e);
    }
  }, [siteKey]);

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
      newErrors.senderName = "Corresponding author name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Corresponding author email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Please use a valid email address.";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Corresponding author phone number is required.";
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Mobile number must be exactly 10 digits.";
    }
    
    if (!formData.amount || isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      newErrors.amount = "Enter a valid payment amount.";
    }

    if (!formData.senderAccountName.trim()) {
      newErrors.senderAccountName = "Sender's bank account holder name is required.";
    }

    if (!formData.transactionDateTime) {
      newErrors.transactionDateTime = "Payment date and time is required.";
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
      newErrors.screenshot = "Please upload a payment proof.";
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
    // Turnstile verification commented out as of now
    /*
    if (siteKey && !turnstileToken) {
      setSubmitError("Please complete the security verification first.");
      return;
    }
    */
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
        turnstileToken: turnstileToken || "dev-bypass",
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

      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/registrations")}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Registration Fee
          </motion.button>

          {/* 2-Column Page Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ───────── Left Column: Official Payment Methods & QR (5 cols) ───────── */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              {/* Card 1: Scan & Pay via UPI QR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <h2 className="font-bold text-gray-900 text-lg">Scan & Pay via UPI</h2>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                    Instant
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Scan this QR code with Google Pay, PhonePe, Paytm, BHIM, or any UPI banking app.
                </p>

                {/* Pure Clean QR Code Container */}
                <div className="mt-4 flex flex-col items-center">
                  <div
                    className="relative group bg-white p-3 rounded-2xl border-2 border-dashed border-blue-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                    onClick={() => setShowQrLightbox(true)}
                  >
                    <img
                      src={CleanQRImage}
                      alt="UPI Payment QR Code - Ajay Kumar Garg Engineering College"
                      className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 font-medium text-xs backdrop-blur-[1px]">
                      <ZoomIn className="w-6 h-6" />
                      <span>Click to Enlarge</span>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-sm font-bold text-gray-900">Ajay Kumar Garg Engineering College</p>
                    <p className="text-xs text-gray-500">Kotak Mahindra Bank • Merchant TID: 2985199A</p>
                  </div>
                </div>

                {/* UPI ID Copy Widget */}
                <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">UPI ID</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono break-all select-all block">
                      {UPI_DETAILS.upiId}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(UPI_DETAILS.upiId, "upi-id")}
                    className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all"
                    title="Copy UPI ID"
                  >
                    {copiedField === "upi-id" ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mobile Direct Pay Button */}
                <div className="mt-3 block sm:hidden">
                  <a
                    href={UPI_PAY_URL}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    Open in UPI App (GPay / PhonePe / Paytm)
                  </a>
                </div>

                {/* Quick actions */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowQrLightbox(true)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    Enlarge QR
                  </button>
                  <a
                    href={CleanQRImage}
                    download="NGISE-2026-UPI-QR.png"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-200 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download QR
                  </a>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
                  <span>Supported Apps:</span>
                  <div className="flex items-center gap-1 font-semibold text-gray-600">
                    <span className="px-1.5 py-0.5 bg-slate-100 rounded">GPay</span>
                    <span className="px-1.5 py-0.5 bg-slate-100 rounded">PhonePe</span>
                    <span className="px-1.5 py-0.5 bg-slate-100 rounded">Paytm</span>
                    <span className="px-1.5 py-0.5 bg-slate-100 rounded">BHIM</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Direct Bank Transfer Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <h2 className="font-bold text-gray-900 text-lg">Bank Transfer (NEFT/RTGS/IMPS)</h2>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-2 mb-3">
                  Transfer directly to the college account via Net Banking or Mobile Banking.
                </p>

                <div className="overflow-hidden border border-slate-200 rounded-xl">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <tbody className="divide-y divide-slate-100">
                      {BANK_DETAILS.map((item, index) => (
                        <tr
                          key={index}
                          className={item.highlight ? "bg-blue-50/70" : index % 2 === 0 ? "bg-slate-50/50" : "bg-white"}
                        >
                          <td className="py-2.5 px-3 text-gray-600 font-medium whitespace-nowrap align-middle w-2/5">
                            {item.label}
                          </td>
                          <td className="py-2.5 px-3 text-gray-900 font-semibold align-middle">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className={item.highlight ? "font-mono text-blue-900 font-bold tracking-wide" : ""}>
                                {item.value}
                              </span>
                              {item.copyable && (
                                <button
                                  type="button"
                                  onClick={() => handleCopy(item.value, item.label)}
                                  className="shrink-0 p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-100/60 rounded transition-colors"
                                  title={`Copy ${item.label}`}
                                >
                                  {copiedField === item.label ? (
                                    <Check className="w-3.5 h-3.5 text-green-600" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
                  <span>PAN No: <strong className="text-gray-800 font-mono">AAATI3688N</strong></span>
                  <a
                    href={BankDocImage}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Official Bank Document
                  </a>
                </div>
              </motion.div>
            </div>

            {/* ───────── Right Column: Payment Proof Submission Form (7 cols) ───────── */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <div className="px-6 py-5 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <h2 className="text-xl font-bold">Submit Transaction Proof</h2>
                  </div>
                  <p className="text-blue-100 text-sm mt-1">
                    Fill in the transaction details exactly as shown on your payment receipt.
                  </p>
                </div>

                <form onSubmit={handleReview} className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Paper ID */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium text-sm">Paper ID</label>
                      <input
                        type="text"
                        value={formData.paperId}
                        onChange={(e) => onChange("paperId", e.target.value)}
                        placeholder="e.g. NGISE-2026-101"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Paper Title */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium text-sm">Paper Title</label>
                      <input
                        type="text"
                        value={formData.paperTitle}
                        onChange={(e) => onChange("paperTitle", e.target.value)}
                        placeholder="Enter full paper title"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium text-sm">Country</label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => onChange("country", e.target.value)}
                        placeholder="Country of affiliation"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Corresponding Author Name (Sender Name) */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium text-sm">Corresponding Author Name</label>
                      <input
                        type="text"
                        value={formData.senderName}
                        onChange={(e) => onChange("senderName", e.target.value)}
                        placeholder="Enter corresponding author's full name"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      {errors.senderName && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.senderName}
                        </p>
                      )}
                    </div>

                    {/* Corresponding Author Email */}
                    <div className="space-y-2 group">
                      <label className="block text-gray-700 font-medium text-sm">Corresponding Author Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        placeholder="author@institution.edu"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                      <p className="text-xs rounded-md px-3 py-1.5 items-start gap-1.5 mt-1 hidden group-hover:flex" style={{ color: '#b45309', backgroundColor: '#fffbeb', border: '1px solid #fde68a' }}>
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>Email must match your registered author email.</span>
                      </p>
                    </div>

                    {/* Corresponding Author Phone Number */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium text-sm">Corresponding Author Phone Number</label>
                      <input
                        type="text"
                        value={formData.mobileNumber}
                        onChange={(e) => onChange("mobileNumber", e.target.value)}
                        placeholder="Enter 10-digit mobile number"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      {errors.mobileNumber && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.mobileNumber}
                        </p>
                      )}
                    </div>

                    {/* Corresponding Author WhatsApp Number */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium text-sm">Corresponding Author WhatsApp Number</label>
                      <input
                        type="text"
                        value={formData.whatsappNumber}
                        onChange={(e) => onChange("whatsappNumber", e.target.value)}
                        placeholder="Enter WhatsApp number (with country code)"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Payment Amount */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium text-sm">Payment Amount (₹)</label>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={formData.amount}
                        onChange={(e) => onChange("amount", e.target.value)}
                        placeholder="Enter amount paid"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      {errors.amount && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.amount}
                        </p>
                      )}
                    </div>

                    {/* Sender's Account Holder Name */}
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium text-sm">Sender's Bank Account Holder Name</label>
                      <input
                        type="text"
                        value={formData.senderAccountName}
                        onChange={(e) => onChange("senderAccountName", e.target.value)}
                        placeholder="Name of person making the transfer"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      {errors.senderAccountName && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.senderAccountName}
                        </p>
                      )}
                    </div>

                    {/* Payment Date & Time */}
                    <div className="space-y-2 group">
                      <label className="block text-gray-700 font-medium text-sm">Payment Date & Time</label>
                      <input
                        type="datetime-local"
                        value={formData.transactionDateTime}
                        onChange={(e) => onChange("transactionDateTime", e.target.value)}
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      {errors.transactionDateTime && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.transactionDateTime}
                        </p>
                      )}
                    </div>

                    {/* Transaction ID */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-gray-700 font-medium text-sm">Transaction ID / UTR Number</label>
                      <input
                        type="text"
                        value={formData.transactionId}
                        onChange={(e) => onChange("transactionId", e.target.value)}
                        placeholder="e.g. UPI123456789012 or NEFT transfer reference"
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-mono"
                      />
                      {errors.transactionId && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.transactionId}
                        </p>
                      )}
                    </div>

                    {/* Payment Proof (Screenshot / Receipt) */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-gray-700 font-medium text-sm">Payment Proof (Screenshot / Receipt)</label>
                      <p className="text-xs text-gray-500 mb-2">Upload payment screenshot or PDF receipt (Max 5MB)</p>

                      {!screenshotFile ? (
                        <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-colors">
                          <Upload className="w-7 h-7 text-gray-400 mb-2" />
                          <span className="text-gray-600 text-sm font-medium">Click to upload or drag & drop</span>
                          <span className="text-xs text-gray-400 mt-0.5">JPG, PNG, or PDF</span>
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
                                className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                              />
                            ) : (
                              <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-lg border border-blue-100">
                                <FileText className="w-7 h-7 text-blue-600" />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{screenshotFile.name}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {(screenshotFile.size / 1024).toFixed(1)} KB
                              </p>
                              <div className="flex items-center gap-1 mt-2 text-green-600">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span className="text-xs font-medium">Ready to upload</span>
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
                        <p className="text-xs text-red-600 flex items-center gap-1">
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
                    {/* Turnstile verification commented out as of now
                    {siteKey && (
                      <div className="flex justify-center my-4">
                        <div ref={turnstileRef}></div>
                      </div>
                    )}
                    */}

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-3.5 bg-blue-600 text-white rounded-full text-base font-semibold shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye className="w-5 h-5" />
                      Review & Submit Proof
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
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
                ...(formData.paperId ? [{ label: "Paper ID", value: formData.paperId }] : []),
                ...(formData.paperTitle ? [{ label: "Paper Title", value: formData.paperTitle }] : []),
                ...(formData.country ? [{ label: "Country", value: formData.country }] : []),
                { label: "Corresponding Author Name", value: formData.senderName },
                { label: "Corresponding Author Email", value: formData.email },
                { label: "Corresponding Author Phone Number", value: formData.mobileNumber },
                ...(formData.whatsappNumber ? [{ label: "Corresponding Author WhatsApp Number", value: formData.whatsappNumber }] : []),
                { label: "Payment Amount (₹)", value: `₹${Number(formData.amount).toLocaleString("en-IN")}` },
                { label: "Sender's Bank Account Holder Name", value: formData.senderAccountName },
                { label: "Payment Date & Time", value: formatDateTime(formData.transactionDateTime) },
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

      {/* ───── Fullscreen QR Code Lightbox ───── */}
      {showQrLightbox && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowQrLightbox(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-w-sm sm:max-w-md w-full bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center z-10"
          >
            <button
              type="button"
              onClick={() => setShowQrLightbox(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-gray-900">Scan & Pay via UPI</h3>
            <p className="text-xs text-gray-500 text-center mt-1">
              Ajay Kumar Garg Engineering College • Kotak Mahindra Bank
            </p>

            <div className="my-4 p-3 bg-white rounded-xl border border-gray-200 shadow-inner max-w-xs flex items-center justify-center">
              <img
                src={CleanQRImage}
                alt="UPI Payment QR Code"
                className="w-64 h-64 object-contain rounded-lg mx-auto"
              />
            </div>

            <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">UPI ID</span>
                <span className="text-sm font-bold text-slate-900 font-mono break-all select-all block">
                  {UPI_DETAILS.upiId}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(UPI_DETAILS.upiId, "modal-upi-id")}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {copiedField === "modal-upi-id" ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3 w-full">
              <a
                href={CleanQRImage}
                download="NGISE-2026-Payment-QR.png"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
              >
                <Download className="w-4 h-4" />
                Download QR
              </a>
              <button
                type="button"
                onClick={() => setShowQrLightbox(false)}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
              >
                Close
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
