const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export interface PaymentData {
  senderName: string;
  email: string;
  mobileNumber: string;
  amount: number;
  transactionId: string;
  screenshotUrl: string;
  senderAccountName: string;
  transactionDateTime: string;
}

export interface PaymentRecord {
  id: string;
  senderName: string;
  email: string;
  mobileNumber: string;
  amount: number;
  transactionId: string;
  screenshotUrl: string;
  senderAccountName: string;
  transactionDateTime: string;
  status: "pending" | "approved" | "rejected";
  progress: number;
  submittedAt: string;
  verifiedAt: string | null;
  verifiedBy: string | null;
  receiptNumber: string | null;
  receiptUrl: string | null;
  remarks: string | null;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: string[] | null;
}

export async function checkUtrAvailability(utr: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/payments/check-utr?utr=${encodeURIComponent(utr)}`);
  if (!res.ok) throw new Error("UTR availability check failed");
  const result: ApiResponse<{ exists: boolean }> = await res.json();
  return result.data.exists;
}

export interface RegistrationData {
  paperId?: string;
  title?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  organization: string;
  address: string;
  country: string;
  city: string;
  registrationCategory: string;
  registrationFee: number;
}

export async function registerUser(data: RegistrationData): Promise<any> {
  const res = await fetch(`${API_BASE}/payments/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData: ApiResponse<null> = await res.json().catch(() => ({}));
    const message = errorData.errors?.join(", ") || errorData.message || "Failed to register";
    throw new Error(message);
  }
  const result: ApiResponse<any> = await res.json();
  return result.data;
}

export async function submitPayment(data: PaymentData): Promise<PaymentRecord> {
  const res = await fetch(`${API_BASE}/payments/submit`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData: ApiResponse<null> = await res.json().catch(() => ({}));
    const message = errorData.errors?.join(", ") || errorData.message || "Failed to submit payment";
    throw new Error(message);
  }
  const result: ApiResponse<PaymentRecord> = await res.json();
  return result.data;
}

export async function getPaymentStatus(id: string): Promise<PaymentRecord> {
  const res = await fetch(`${API_BASE}/payments/${id}`);
  if (!res.ok) throw new Error("Payment not found");
  const result: ApiResponse<PaymentRecord> = await res.json();
  return result.data;
}

export async function lookupPayment(
  email: string,
  transactionId: string
): Promise<PaymentRecord | null> {
  const res = await fetch(
    `${API_BASE}/payments/lookup?email=${encodeURIComponent(email)}&transactionId=${encodeURIComponent(transactionId)}`
  );
  if (!res.ok) throw new Error("Lookup failed");
  const result: ApiResponse<PaymentRecord | null> = await res.json();
  return result.data;
}

export async function downloadReceipt(id: string): Promise<string | null> {
  const payment = await getPaymentStatus(id);
  return payment.receiptUrl;
}
