import React from "react";
import { motion } from "framer-motion";
import type { PaymentRecord } from "../services/paymentService";
import { Check, X, Clock, Loader2 } from "lucide-react";

interface PaymentStepperProps {
  status: PaymentRecord["status"];
  submittedAt: string;
  verifiedAt: string | null;
  remarks: string | null;
}

const STEPS = [
  { key: "submitted", label: "Submitted" },
  { key: "review", label: "Under Review" },
  { key: "final", label: "Verified / Rejected" },
];

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }) + ", " + d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getStepState(
  stepIndex: number,
  status: PaymentRecord["status"]
): "complete" | "active" | "upcoming" | "rejected" {
  if (status === "pending") {
    if (stepIndex === 0) return "complete";
    if (stepIndex === 1) return "active";
    return "upcoming";
  }
  if (status === "approved") {
    return "complete";
  }
  // rejected
  if (stepIndex <= 1) return "complete";
  return "rejected";
}

function getStepIcon(state: "complete" | "active" | "upcoming" | "rejected") {
  switch (state) {
    case "complete":
      return <Check className="w-5 h-5" />;
    case "active":
      return <Loader2 className="w-5 h-5 animate-spin" />;
    case "rejected":
      return <X className="w-5 h-5" />;
    default:
      return <Clock className="w-5 h-5" />;
  }
}

function getStepColors(state: "complete" | "active" | "upcoming" | "rejected") {
  switch (state) {
    case "complete":
      return {
        circle: "bg-green-500 text-white shadow-md shadow-green-200",
        label: "text-green-700 font-semibold",
        line: "bg-green-400",
      };
    case "active":
      return {
        circle: "bg-blue-500 text-white shadow-md shadow-blue-200",
        label: "text-blue-700 font-semibold",
        line: "bg-gray-200",
      };
    case "rejected":
      return {
        circle: "bg-red-500 text-white shadow-md shadow-red-200",
        label: "text-red-700 font-semibold",
        line: "bg-green-400",
      };
    default:
      return {
        circle: "bg-gray-200 text-gray-400",
        label: "text-gray-400",
        line: "bg-gray-200",
      };
  }
}

const PaymentStepper: React.FC<PaymentStepperProps> = ({
  status,
  submittedAt,
  verifiedAt,
  remarks,
}) => {
  const getFinalLabel = () => {
    if (status === "approved") return "Approved";
    if (status === "rejected") return "Rejected";
    return "Pending";
  };

  const getSubtitle = (stepIndex: number) => {
    if (stepIndex === 0 && submittedAt) return formatDate(submittedAt);
    if (stepIndex === 1) {
      if (status === "pending") return "In progress...";
      return "Completed";
    }
    if (stepIndex === 2) {
      if (status === "approved" && verifiedAt) return formatDate(verifiedAt);
      if (status === "rejected") return remarks || "Payment rejected";
      return "—";
    }
    return "";
  };

  return (
    <div>
      {/* Desktop: Horizontal */}
      <div className="hidden md:flex items-start justify-between relative">
        {STEPS.map((step, i) => {
          const state = getStepState(i, status);
          const colors = getStepColors(state);
          const displayLabel = i === 2 ? getFinalLabel() : step.label;

          return (
            <React.Fragment key={step.key}>
              {i > 0 && (
                <div className="flex-1 flex items-center pt-5">
                  <div className={`h-1 w-full rounded-full ${colors.line}`} />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
                style={{ minWidth: 120 }}
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center ${colors.circle}`}>
                  {getStepIcon(state)}
                </div>
                <p className={`mt-3 text-sm ${colors.label}`}>{displayLabel}</p>
                <p className="text-xs text-gray-500 mt-1 max-w-[140px]">{getSubtitle(i)}</p>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile: Vertical */}
      <div className="flex flex-col md:hidden gap-0">
        {STEPS.map((step, i) => {
          const state = getStepState(i, status);
          const colors = getStepColors(state);
          const displayLabel = i === 2 ? getFinalLabel() : step.label;

          return (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${colors.circle}`}>
                  {getStepIcon(state)}
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-0.5 h-12 ${colors.line}`} />
                )}
              </div>
              <div className="pb-8">
                <p className={`text-sm ${colors.label}`}>{displayLabel}</p>
                <p className="text-xs text-gray-500 mt-0.5">{getSubtitle(i)}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Rejection reason callout */}
      {status === "rejected" && remarks && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4"
        >
          <p className="text-sm font-medium text-red-800">Reason for Rejection</p>
          <p className="text-sm text-red-700 mt-1">{remarks}</p>
        </motion.div>
      )}
    </div>
  );
};

export default PaymentStepper;
