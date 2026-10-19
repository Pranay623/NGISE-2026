export interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  rateToUSD: number; // 1 USD = rateToUSD in this currency
}

// Popular quick-selection currencies
export const POPULAR_CURRENCIES = [
  "INR",
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AUD",
  "SGD",
  "AED",
];

// Comprehensive list of world currencies covering all global participants
export const ALL_CURRENCIES: CurrencyInfo[] = [
  // Primary Conference Currencies
  { code: "INR", name: "Indian Rupee", symbol: "₹", rateToUSD: 84.0 },
  { code: "USD", name: "US Dollar", symbol: "$", rateToUSD: 1.0 },
  { code: "EUR", name: "Euro", symbol: "€", rateToUSD: 0.92 },

  // Major International Currencies
  { code: "GBP", name: "British Pound", symbol: "£", rateToUSD: 0.78 },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$", rateToUSD: 1.36 },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", rateToUSD: 1.52 },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", rateToUSD: 1.32 },
  { code: "AED", name: "UAE Dirham", symbol: "AED", rateToUSD: 3.67 },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", rateToUSD: 152.0 },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF", rateToUSD: 0.88 },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", rateToUSD: 7.24 },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", rateToUSD: 1.66 },

  // SEZ & South Asian Regional Currencies
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳", rateToUSD: 120.0 },
  { code: "LKR", name: "Sri Lankan Rupee", symbol: "Rs", rateToUSD: 300.0 },
  { code: "NPR", name: "Nepalese Rupee", symbol: "Rs", rateToUSD: 134.0 },
  { code: "PKR", name: "Pakistani Rupee", symbol: "Rs", rateToUSD: 278.0 },
  { code: "BTN", name: "Bhutanese Ngultrum", symbol: "Nu.", rateToUSD: 84.0 },
  { code: "MVR", name: "Maldivian Rufiyaa", symbol: "Rf", rateToUSD: 15.4 },

  // Middle East & Gulf Currencies
  { code: "SAR", name: "Saudi Riyal", symbol: "SAR", rateToUSD: 3.75 },
  { code: "QAR", name: "Qatari Riyal", symbol: "QAR", rateToUSD: 3.64 },
  { code: "KWD", name: "Kuwaiti Dinar", symbol: "KWD", rateToUSD: 0.31 },
  { code: "BHD", name: "Bahraini Dinar", symbol: "BHD", rateToUSD: 0.38 },
  { code: "OMR", name: "Omani Rial", symbol: "OMR", rateToUSD: 0.38 },
  { code: "JOD", name: "Jordanian Dinar", symbol: "JOD", rateToUSD: 0.71 },

  // Asia-Pacific Currencies
  { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", rateToUSD: 4.40 },
  { code: "THB", name: "Thai Baht", symbol: "฿", rateToUSD: 34.5 },
  { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", rateToUSD: 15800.0 },
  { code: "PHP", name: "Philippine Peso", symbol: "₱", rateToUSD: 58.0 },
  { code: "VND", name: "Vietnamese Dong", symbol: "₫", rateToUSD: 25000.0 },
  { code: "KRW", name: "South Korean Won", symbol: "₩", rateToUSD: 1380.0 },
  { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$", rateToUSD: 7.78 },
  { code: "TWD", name: "New Taiwan Dollar", symbol: "NT$", rateToUSD: 32.2 },

  // European Currencies (Non-Euro)
  { code: "SEK", name: "Swedish Krona", symbol: "kr", rateToUSD: 10.6 },
  { code: "NOK", name: "Norwegian Krone", symbol: "kr", rateToUSD: 10.9 },
  { code: "DKK", name: "Danish Krone", symbol: "kr", rateToUSD: 6.9 },
  { code: "PLN", name: "Polish Zloty", symbol: "zł", rateToUSD: 4.0 },
  { code: "CZK", name: "Czech Koruna", symbol: "Kč", rateToUSD: 23.5 },
  { code: "HUF", name: "Hungarian Forint", symbol: "Ft", rateToUSD: 375.0 },
  { code: "RON", name: "Romanian Leu", symbol: "lei", rateToUSD: 4.6 },
  { code: "TRY", name: "Turkish Lira", symbol: "₺", rateToUSD: 34.5 },
  { code: "RUB", name: "Russian Ruble", symbol: "₽", rateToUSD: 96.0 },

  // Americas Currencies
  { code: "BRL", name: "Brazilian Real", symbol: "R$", rateToUSD: 5.7 },
  { code: "MXN", name: "Mexican Peso", symbol: "Mex$", rateToUSD: 19.8 },
  { code: "ARS", name: "Argentine Peso", symbol: "$", rateToUSD: 985.0 },
  { code: "CLP", name: "Chilean Peso", symbol: "CLP$", rateToUSD: 940.0 },
  { code: "COP", name: "Colombian Peso", symbol: "COL$", rateToUSD: 4200.0 },
  { code: "PEN", name: "Peruvian Sol", symbol: "S/.", rateToUSD: 3.75 },

  // Africa Currencies
  { code: "ZAR", name: "South African Rand", symbol: "R", rateToUSD: 17.6 },
  { code: "EGP", name: "Egyptian Pound", symbol: "E£", rateToUSD: 48.5 },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", rateToUSD: 1650.0 },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh", rateToUSD: 129.0 },
  { code: "GHS", name: "Ghanaian Cedi", symbol: "GH₵", rateToUSD: 16.0 },
  { code: "MAD", name: "Moroccan Dirham", symbol: "MAD", rateToUSD: 9.8 },
  { code: "TZS", name: "Tanzanian Shilling", symbol: "TSh", rateToUSD: 2650.0 },
  { code: "UGX", name: "Ugandan Shilling", symbol: "USh", rateToUSD: 3670.0 },
  { code: "ETB", name: "Ethiopian Birr", symbol: "Br", rateToUSD: 120.0 },
  { code: "MUR", name: "Mauritian Rupee", symbol: "₨", rateToUSD: 46.0 },
];

const CURRENCY_MAP = new Map<string, CurrencyInfo>(
  ALL_CURRENCIES.map((c) => [c.code.toUpperCase(), c])
);

/**
 * Returns the currency symbol for any currency code.
 */
export function getCurrencySymbol(code: string): string {
  if (!code) return "₹";
  const upper = code.toUpperCase();
  const found = CURRENCY_MAP.get(upper);
  if (found) return found.symbol;

  try {
    const parts = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: upper,
    }).formatToParts(0);
    const currPart = parts.find((p) => p.type === "currency");
    return currPart ? currPart.value : upper;
  } catch {
    return upper;
  }
}

/**
 * Returns full currency details or fallback.
 */
export function getCurrencyDetails(code: string): CurrencyInfo {
  const upper = (code || "INR").toUpperCase();
  const found = CURRENCY_MAP.get(upper);
  if (found) return found;

  return {
    code: upper,
    name: upper,
    symbol: getCurrencySymbol(upper),
    rateToUSD: 1.0,
  };
}

/**
 * Converts a base USD amount to the given currency.
 * Rounds to sensible whole number or 2 decimal places.
 */
export function convertFee(baseUSD: number, targetCurrency: string): number {
  const upper = (targetCurrency || "USD").toUpperCase();

  // Special canonical rates from conference tier table
  if (upper === "USD") return baseUSD;

  if (baseUSD === 400) {
    if (upper === "EUR") return 350;
    if (upper === "INR") return 33000;
  } else if (baseUSD === 600) {
    if (upper === "EUR") return 500;
    if (upper === "INR") return 50000;
  } else if (baseUSD === 130) {
    // Reduced Early Bird
    if (upper === "INR") return 12000;
    if (upper === "EUR") return 110;
  } else if (baseUSD === 150) {
    // Reduced Regular
    if (upper === "INR") return 13000;
    if (upper === "EUR") return 120;
  }

  const info = getCurrencyDetails(upper);
  const raw = baseUSD * info.rateToUSD;

  // Round neatly based on magnitude
  if (raw >= 1000) {
    return Math.round(raw / 50) * 50; // Round to nearest 50
  } else if (raw >= 100) {
    return Math.round(raw / 5) * 5; // Round to nearest 5
  } else {
    return Math.round(raw);
  }
}

/**
 * Maps common country names to their default national currency.
 */
export function getCountryDefaultCurrency(country: string): string {
  if (!country) return "USD";
  const c = country.trim().toLowerCase();

  if (c === "india") return "INR";
  if (c === "bangladesh") return "BDT";
  if (c === "sri lanka") return "LKR";
  if (c === "nepal") return "NPR";
  if (c === "pakistan") return "PKR";
  if (c === "united states" || c === "usa") return "USD";
  if (c === "united kingdom" || c === "uk" || c === "britain" || c === "england") return "GBP";
  if (c === "canada") return "CAD";
  if (c === "australia") return "AUD";
  if (c === "germany" || c === "france" || c === "italy" || c === "spain" || c === "netherlands" || c === "belgium" || c === "austria" || c === "ireland" || c === "portugal" || c === "finland" || c === "greece") return "EUR";
  if (c === "singapore") return "SGD";
  if (c === "united arab emirates" || c === "uae" || c === "dubai") return "AED";
  if (c === "saudi arabia") return "SAR";
  if (c === "japan") return "JPY";
  if (c === "china") return "CNY";
  if (c === "switzerland") return "CHF";
  if (c === "new zealand") return "NZD";
  if (c === "malaysia") return "MYR";
  if (c === "thailand") return "THB";
  if (c === "indonesia") return "IDR";
  if (c === "philippines") return "PHP";
  if (c === "vietnam") return "VND";
  if (c === "south korea" || c === "korea") return "KRW";
  if (c === "brazil") return "BRL";
  if (c === "south africa") return "ZAR";
  if (c === "egypt") return "EGP";
  if (c === "nigeria") return "NGN";
  if (c === "qatar") return "QAR";
  if (c === "kuwait") return "KWD";
  if (c === "sweden") return "SEK";
  if (c === "norway") return "NOK";
  if (c === "denmark") return "DKK";
  if (c === "poland") return "PLN";
  if (c === "turkey") return "TRY";
  if (c === "russia") return "RUB";

  return "USD";
}

/**
 * Formats amount with proper symbol and locale.
 */
export function formatCurrencyAmount(
  amount: number | string | null | undefined,
  currencyCode?: string
): string {
  if (amount === null || amount === undefined || amount === "") return "0";
  const num = Number(amount);
  if (isNaN(num)) return String(amount);

  const code = (currencyCode || "INR").toUpperCase();
  const symbol = getCurrencySymbol(code);

  const locale =
    code === "INR"
      ? "en-IN"
      : code === "EUR"
      ? "de-DE"
      : code === "GBP"
      ? "en-GB"
      : code === "JPY" || code === "KRW"
      ? "ja-JP"
      : "en-US";

  return `${symbol}${num.toLocaleString(locale)}`;
}
