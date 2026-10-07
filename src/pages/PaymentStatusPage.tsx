import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowLeft, Download, RotateCcw, AlertCircle, Loader2, User, Mail, Phone, CreditCard, Calendar, Hash, CheckCircle, Clock, Bell, HelpCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import PaymentStepper from "../components/PaymentStepper";
import { getPaymentStatus, lookupPayment, downloadReceipt, type PaymentRecord } from "../services/paymentService";

const PaymentStatusPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [payment, setPayment] = useState<PaymentRecord | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Lookup form state (when no ID in URL)
  const [lookupEmail, setLookupEmail] = useState("");
  const [lookupUtr, setLookupUtr] = useState("");
  const [lookupError, setLookupError] = useState("");
  const [lookupLoading, setLookupLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchStatus(id);
    }
  }, [id]);

  const fetchStatus = async (paymentId: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await getPaymentStatus(paymentId);
      setPayment(data);
    } catch {
      setError("Could not find this payment. Please check the details and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError("");

    if (!lookupEmail.trim() || !lookupUtr.trim()) {
      setLookupError("Both Email Address and Transaction ID are required.");
      return;
    }

    setLookupLoading(true);
    try {
      const data = await lookupPayment(lookupEmail.trim(), lookupUtr.trim());
      if (data) {
        setPayment(data);
      } else {
        setLookupError("No payment found with these details. Please check and try again.");
      }
    } catch {
      setLookupError("Lookup failed. Please check your connection and try again.");
    } finally {
      setLookupLoading(false);
    }
  };

  // const handleDownloadReceipt = async () => {
  //   if (payment?.id) {
  //     try {
  //       const url = await downloadReceipt(payment.id);
  //       if (url) {
  //         window.open(url, "_blank");
  //       } else {
  //         alert("Receipt file is not generated yet.");
  //       }
  //     } catch (err) {
  //       console.error("Failed to download receipt", err);
  //       alert("Could not load receipt. Please try again.");
  //     }
  //   }
  // };

  // const handleResubmit = () => {
  //   if (payment) {
  //     navigate("/registrations/submit-proof", {
  //       state: {
  //         prefill: {
  //           senderName: payment.senderName,
  //           email: payment.email,
  //           mobileNumber: payment.mobileNumber,
  //         },
  //       },
  //     });
  //   }
  // };

  // const formatDate = (iso: string) => {
  //   const d = new Date(iso);
  //   return d.toLocaleDateString("en-IN", {
  //     day: "numeric",
  //     month: "short",
  //     year: "numeric",
  //   }) + ", " + d.toLocaleTimeString("en-IN", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  // };

  // Show lookup form when no ID provided and no payment loaded
  if (!id && !payment) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <PageHeader
          title="Check Payment Status"
          description="Track the status of your fee payment submission"
        />

        <section className="py-20">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="px-6 py-4 bg-blue-600 text-white">
                <h2 className="text-xl font-semibold">Look Up Your Payment</h2>
                <p className="text-blue-100 text-sm mt-1">Enter your Email Address and Transaction ID (UTR)</p>
              </div>

              <form onSubmit={handleLookup} className="p-6 md:p-8 space-y-5">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Email Address</label>
                  <input
                    type="email"
                    value={lookupEmail}
                    onChange={(e) => setLookupEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Transaction ID / UTR Number</label>
                  <input
                    type="text"
                    value={lookupUtr}
                    onChange={(e) => setLookupUtr(e.target.value)}
                    placeholder="e.g. UPI123456789012"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {lookupError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{lookupError}</span>
                  </div>
                )}

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={lookupLoading}
                    className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {lookupLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Check Status
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <PageHeader title="Payment Status" />
        <div className="flex items-center justify-center py-32">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <PageHeader title="Payment Status" />
        <section className="py-20">
          <div className="max-w-xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <p className="text-gray-700 mb-6">{error}</p>
              <Link
                to="/registrations/payment-status"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors inline-block"
              >
                Try Again
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  if (!payment) return null;

  // Payment found — show status
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Payment Status"
        description="Track your payment verification progress"
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Stepper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Verification Progress</h2>
            <PaymentStepper
              status={payment.status}
              submittedAt={payment.submittedAt}
              verifiedAt={payment.verifiedAt}
              remarks={payment.remarks}
            />
          </motion.div>

          {/* Dynamic Status Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
          >
            {/* ── Pending / Under Review State ── */}
            {payment.status === "pending" && (
              <>
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)" }}>
                  <div className="p-2 bg-white/15 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Review Status</h3>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Thank you for submitting your payment proof. Your submission is currently under review by the NGISE 2026 Registration Team.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    The progress tracker above will automatically update once the verification process is completed.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    An official email notification confirming the verification result (Approved or Rejected) will be sent to your registered email address.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    If you have any questions regarding your payment verification, please feel free to contact the NGISE 2026 Registration Team at{" "}
                    <a href="mailto:ngise@akgec.ac.in" className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 transition-colors">
                      ngise@akgec.ac.in
                    </a>.
                  </p>
                </div>
              </>
            )}

            {/* ── Approved State ── */}
            {payment.status === "approved" && (
              <>
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #065f46 0%, #059669 100%)" }}>
                  <div className="p-2 bg-white/15 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Payment Verified</h3>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Your payment has been successfully verified by the NGISE 2026 Registration Team.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    A confirmation email containing your payment receipt has been sent to your registered email address. Please retain the receipt for your records and future reference.
                  </p>
                </div>
              </>
            )}

            {/* ── Rejected State ── */}
            {payment.status === "rejected" && (
              <>
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, #991b1b 0%, #dc2626 100%)" }}>
                  <div className="p-2 bg-white/15 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Verification Failed</h3>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-gray-700 leading-relaxed text-base">
                    Unfortunately, your payment proof could not be verified by the NGISE 2026 Registration Team.
                  </p>
                  
                  {payment.remarks && (
                    <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
                      <span className="text-xs font-semibold text-red-800 uppercase tracking-wider block mb-1">Reason:</span>
                      <span className="text-sm text-red-700 leading-relaxed block">{payment.remarks}</span>
                    </div>
                  )}

                  <p className="text-gray-700 leading-relaxed text-base">
                    Please review the above reason and submit a new payment proof with the correct information. Once resubmitted, your payment will be reviewed again.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    For any queries or assistance, please contact us at{" "}
                    <a href="mailto:ngise@akgec.ac.in" className="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 transition-colors">
                      ngise@akgec.ac.in
                    </a>.
                  </p>
                </div>
              </>
            )}
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
          >
            <div className="px-6 py-4 bg-blue-600 text-white">
              <h2 className="text-lg font-semibold">Payment Summary</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Sender Name</p>
                    <p className="text-sm font-medium text-gray-900">{payment.senderName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email Address</p>
                    <p className="text-sm font-medium text-gray-900">{payment.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Mobile Number</p>
                    <p className="text-sm font-medium text-gray-900">{payment.mobileNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <CreditCard className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Amount Paid</p>
                    <p className="text-sm font-medium text-gray-900">₹{payment.amount.toLocaleString("en-IN")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Sender Account Holder Name</p>
                    <p className="text-sm font-medium text-gray-900">{payment.senderAccountName || "N/A"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Transaction Date & Time</p>
                    <p className="text-sm font-medium text-gray-900">
                      {payment.transactionDateTime ? formatDate(payment.transactionDateTime) : "N/A"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <Hash className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Transaction ID / UTR</p>
                    <p className="text-sm font-medium text-gray-900 break-all">{payment.transactionId}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Submitted On</p>
                    <p className="text-sm font-medium text-gray-900">{formatDate(payment.submittedAt)}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}

          {/* Action Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >


            {payment.status === "rejected" && (
              <button
                onClick={handleResubmit}
                className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Resubmit Payment Proof
              </button>
            )}

            <Link
              to="/registrations/payment-status"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              onClick={() => setPayment(null)}
            >
              Look up another payment
            </Link>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default PaymentStatusPage;
