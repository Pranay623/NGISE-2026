import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "./PageHeader";
import { registerUser } from "../services/paymentService";

const Registration = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const SEZ_COUNTRIES = ["India", "Bangladesh", "Sri Lanka", "Nepal"];
  const isSezCountry = (c: string) =>
    SEZ_COUNTRIES.some((sc) => sc.toLowerCase() === (c || "").trim().toLowerCase());

  const DEFAULT_COUNTRIES = [
    "India", "Bangladesh", "Sri Lanka", "Nepal", "United States", "United Kingdom",
    "Australia", "Canada", "Germany", "France", "Japan", "China", "Singapore",
    "Malaysia", "United Arab Emirates", "Saudi Arabia", "South Korea", "Italy",
    "Spain", "Netherlands", "Switzerland", "Sweden", "Brazil", "South Africa",
    "New Zealand", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Argentina", "Armenia", "Austria", "Azerbaijan", "Bahrain", "Belarus",
    "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
    "Cameroon", "Chile", "Colombia", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Denmark", "Ecuador", "Egypt", "Estonia", "Ethiopia",
    "Finland", "Georgia", "Ghana", "Greece", "Hong Kong", "Hungary", "Iceland",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Jordan", "Kazakhstan",
    "Kenya", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lithuania",
    "Luxembourg", "Maldives", "Mauritius", "Mexico", "Monaco", "Mongolia",
    "Morocco", "Myanmar", "Nigeria", "Norway", "Oman", "Pakistan", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Serbia",
    "Slovakia", "Slovenia", "Taiwan", "Thailand", "Turkey", "Uganda", "Ukraine",
    "Uzbekistan", "Vietnam", "Zimbabwe"
  ];

  const calculateFee = (category: string, type: string, currency: string): number => {
    if (category === "Standard") {
      if (type === "Early Bird") {
        return currency === "EUR" ? 350 : 400; // USD default
      } else {
        return currency === "EUR" ? 500 : 600; // USD default
      }
    } else {
      // Reduced (SEZ)
      if (type === "Early Bird") {
        if (currency === "INR") return 12000;
        if (currency === "EUR") return 110;
        return 130; // USD
      } else {
        if (currency === "INR") return 13000;
        if (currency === "EUR") return 120;
        return 150; // USD
      }
    }
  };

  const [formData, setFormData] = useState({
    country: "India",
    registrationCategory: "Reduced",
    registrationType: "Early Bird",
    currency: "INR",
    paperId: "",
    paperTitle: "",
    title: "Mr",
    firstName: "",
    lastName: "",
    mobile: "",
    whatsappNumber: "",
    email: "",
    institution: "",
    city: "",
    state: "",
    registrationAmount: "12000",
  });
  const [submitMsg, setSubmitMsg] = useState("");

  const [countries, setCountries] = useState<string[]>(DEFAULT_COUNTRIES);
  const [loadingCountries, setLoadingCountries] = useState(false);

  // Fetch country list from public API (restcountries). Falls back to full default list if network fails.
  const fetchCountries = async () => {
    setLoadingCountries(true);
    try {
      const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      const list = data
        .map((c: any) => c?.name?.common)
        .filter(Boolean);
      const combined = Array.from(new Set([...DEFAULT_COUNTRIES, ...list])).sort((a, b) => a.localeCompare(b));
      setCountries(combined);
    } catch (err) {
      setCountries(DEFAULT_COUNTRIES);
    } finally {
      setLoadingCountries(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const onChange = (
    key: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCountryChange = (selectedCountry: string) => {
    const sez = isSezCountry(selectedCountry);
    const newCategory = sez ? "Reduced" : "Standard";
    let newCurrency = formData.currency;
    if (sez) {
      newCurrency = selectedCountry.toLowerCase().trim() === "india" ? "INR" : (formData.currency === "INR" ? "USD" : formData.currency);
    } else {
      newCurrency = formData.currency === "INR" ? "USD" : formData.currency;
    }
    const newFee = calculateFee(newCategory, formData.registrationType, newCurrency);

    setFormData((prev) => ({
      ...prev,
      country: selectedCountry,
      registrationCategory: newCategory,
      currency: newCurrency,
      registrationAmount: String(newFee),
    }));
  };

  const handleCategoryChange = (newCategory: string) => {
    let newCurrency = formData.currency;
    if (newCategory === "Standard" && newCurrency === "INR") {
      newCurrency = "USD";
    }
    const newFee = calculateFee(newCategory, formData.registrationType, newCurrency);
    setFormData((prev) => ({
      ...prev,
      registrationCategory: newCategory,
      currency: newCurrency,
      registrationAmount: String(newFee),
    }));
  };

  const handleTypeChange = (newType: string) => {
    const newFee = calculateFee(formData.registrationCategory, newType, formData.currency);
    setFormData((prev) => ({
      ...prev,
      registrationType: newType,
      registrationAmount: String(newFee),
    }));
  };

  const handleCurrencyChange = (newCurrency: string) => {
    const newFee = calculateFee(formData.registrationCategory, formData.registrationType, newCurrency);
    setFormData((prev) => ({
      ...prev,
      currency: newCurrency,
      registrationAmount: String(newFee),
    }));
  };

  const resetForm = () => {
    setFormData({
      country: "India",
      registrationCategory: "Reduced",
      registrationType: "Early Bird",
      currency: "INR",
      paperId: "",
      paperTitle: "",
      title: "Mr",
      firstName: "",
      lastName: "",
      mobile: "",
      whatsappNumber: "",
      email: "",
      institution: "",
      city: "",
      state: "",
      registrationAmount: "12000",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMsg("");

    const required: Array<keyof typeof formData> = [
      "registrationCategory",
      "registrationType",
      "firstName",
      "lastName",
      "mobile",
      "email",
      "institution",
      "city",
      "state",
      "country",
    ];

    const missing = required.filter((key) => !formData[key]);
    if (missing.length > 0) {
      setSubmitMsg("Please fill all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setSubmitMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setSubmitMsg("Registering...");
      await registerUser({
        paperId: formData.paperId || undefined,
        paperTitle: formData.paperTitle || undefined,
        whatsappNumber: formData.whatsappNumber || undefined,
        title: formData.title || undefined,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.mobile,
        email: formData.email,
        organization: formData.institution,
        address: formData.state,
        country: formData.country,
        city: formData.city,
        registrationCategory: formData.registrationCategory,
        registrationType: formData.registrationType,
        registrationFee: Number(formData.registrationAmount) || 0,
        currency: formData.currency,
      });

      setSubmitMsg("Registration submitted successfully. Redirecting to submit payment proof...");
      setTimeout(() => {
        setShowForm(false);
        const navState = {
          paperId: formData.paperId,
          paperTitle: formData.paperTitle,
          country: formData.country,
          registrationCategory: formData.registrationCategory,
          registrationType: formData.registrationType,
          currency: formData.currency,
          senderName: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          mobileNumber: formData.mobile,
          whatsappNumber: formData.whatsappNumber || formData.mobile,
          amount: formData.registrationAmount,
        };
        resetForm();
        navigate("/registrations/submit-proof", { state: navState });
      }, 1500);
    } catch (error: any) {
      setSubmitMsg(error.message || "Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Registration Fee"
        description="Choose your category and register for NGISE 2026"
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Indian Authors Table */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
          >
            <div className="bg-blue-600 text-white px-6 py-3 text-xl font-semibold">
              Full Paper (Indian Authors)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="py-3 px-6">Category</th>
                    <th className="py-3 px-6">Early Bird  (before Sep.14) (INR)</th>
                    <th className="py-3 px-6">Regular (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6">Regular (Faculty/Industry Professional)</td>
                    <td className="py-4 px-6">8000</td>
                    <td className="py-4 px-6">9000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Student/Research Scholar</td>
                    <td className="py-4 px-6">7000</td>
                    <td className="py-4 px-6">8000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Delegates</td>
                    <td className="py-4 px-6">6000</td>
                    <td className="py-4 px-6">7000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 px-6 py-3 bg-gray-50">
              Extra Page (over 12) Additional charges <strong>INR 1000 per page</strong>
            </p>
          </motion.div> */}

          {/* Foreign Authors Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-blue-600 text-white px-6 py-3 text-xl font-semibold">
              Full Paper
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="py-3 px-6">Category</th>
                    <th className="py-3 px-6">Early Bird  (before Oct.20)</th>
                    <th className="py-3 px-6">Regular</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6">Standard</td>
                    <td className="py-4 px-6">USD 400 / EUR 350</td>
                    <td className="py-4 px-6">USD 600 / EUR 500</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Reduced (reduced for Special Economic Zone(SEZ) India, Bangladesh, Srilanka, Nepal)</td>
                    <td className="py-4 px-6">INR 12000/ USD 130 / EUR 110</td>
                    <td className="py-4 px-6">INR 13000/ USD 150 / EUR 120</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Extra Page (up to two pages)</td>
                    <td className="py-4 px-6">INR 500/ USD 60 / EUR 50 per page</td>
                    <td className="py-4 px-6">INR 500/ USD 90 / EUR 75 per page</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Additional Dinner Ticket</td>
                    <td className="py-4 px-6">USD 60 / EUR 50</td>
                    <td className="py-4 px-6">USD 90 / EUR 75</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*<p className="text-sm text-gray-600 px-6 py-3 bg-gray-50">
              Extra Page (over 12) Additional charges <strong>USD 50 or EUR 43 per page</strong>
            </p>*/}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 max-w-5xl mx-auto"
          >
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    Terms and Conditions
                  </h3>
                  <ul className="grid gap-3 text-gray-700">
                    {[
                      "For each accepted paper, at least one author needs to register to the NGISE conference.",
                      "NGISE is a hybrid conference, whereas on-site attendance is highly encouraged and considered the preferred mode of participation by the NGISE organizers. Papers that are not be presented on-site, must be sent as a pre-recorded presentation (mp4 and youtube link) before 20 October to ngise@akgec.ac.in. Papers that are not presented on-site and fail to submit a pre-recorded meeting to the NGISE organizaers will not be forwarded to final publication. Only on-site participants will receive a certificate of participation. Only on-site participants will receive the conference kit.",
                      "Standard registration fees cover admittance to all sessions, certificate of participation (only for on-site participants), lunch, coffee breaks, and conferece dinner.",
                      (
                        <>
                          Reduced fees cover admittance to all sessions, certificate of participation (only for on-site participants), lunch, and coffee breaks.
                        </>
                      ),
                      "The additional dinner ticket can be bought for anyone not attending the conference (spouses, collaegues, NGISE friends etc). The additional dinner can be bought by participants attending with a reduced fee (the conference dinner is not included in the reduced fee).",
                      "Registration fee is non-refundable, non-transferable and includes 18% GST."
                    ].map((note, index) => (
                      <li key={index} className="flex items-start gap-3 bg-white/50 p-3 rounded-lg border border-blue-100/50">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <span className="text-base leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Register CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center w-72 h-14 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
            >
              Register Now
            </button>

            <div className="mt-4">
              <Link
                to="/registrations/submit-proof"
                className="inline-flex items-center justify-center w-72 h-14 border-2 border-blue-600 text-blue-600 rounded-full text-lg font-semibold shadow-sm hover:bg-blue-600 hover:text-white transition-colors"
              >
                Pay Fee &amp; Submit Proof
              </Link>
            </div>

            <div className="mt-4">
              <Link
                to="/registrations/payment-status"
                className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4 transition-colors"
              >
                Check Payment Status
              </Link>
            </div>
          </motion.div>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setShowForm(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 24 }}
                  transition={{ duration: 0.2 }}
                  className="w-full max-w-5xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl border border-blue-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">Registration Form</h3>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="p-2 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="Close registration modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-72px)]">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Paper ID</label>
                      <input
                        type="text"
                        value={formData.paperId}
                        onChange={(e) => onChange("paperId", e.target.value)}
                        placeholder="e.g. NGISE-2026-101"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Paper Title</label>
                      <input
                        type="text"
                        value={formData.paperTitle}
                        onChange={(e) => onChange("paperTitle", e.target.value)}
                        placeholder="Enter accepted paper title"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Title / Salutation</label>
                      <select
                        value={formData.title}
                        onChange={(e) => onChange("title", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Dr">Dr.</option>
                        <option value="Prof">Prof.</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Corresponding Author First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => onChange("firstName", e.target.value)}
                        placeholder="First name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Corresponding Author Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => onChange("lastName", e.target.value)}
                        placeholder="Last name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Corresponding Author Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        placeholder="author@institution.edu"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Corresponding Author Phone Number</label>
                      <input
                        type="tel"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={(e) => onChange("mobile", e.target.value.replace(/\D/g, ""))}
                        placeholder="10-digit mobile number"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Corresponding Author WhatsApp Number</label>
                      <input
                        type="tel"
                        maxLength={15}
                        value={formData.whatsappNumber}
                        onChange={(e) => onChange("whatsappNumber", e.target.value.replace(/\D/g, ""))}
                        placeholder="WhatsApp number (with country code)"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-gray-700 font-medium">Organization</label>
                      <input type="text" value={formData.institution} onChange={(e) => onChange("institution", e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-gray-700 font-medium">Address</label>
                      <input type="text" value={formData.state} onChange={(e) => onChange("state", e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-gray-700 font-medium">Country</label>
                        {isSezCountry(formData.country) && (
                          <span className="text-xs bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-full">
                            SEZ Eligible
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          list="country-options"
                          value={formData.country}
                          onChange={(e) => handleCountryChange(e.target.value)}
                          placeholder="Select or type country"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <datalist id="country-options">
                        {countries.map((country) => (
                          <option key={country} value={country} />
                        ))}
                      </datalist>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="text-[11px] text-gray-500 self-center">Popular:</span>
                        {["India", "Bangladesh", "Sri Lanka", "Nepal", "United States", "United Kingdom"].map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => handleCountryChange(c)}
                            className={`text-[11px] px-2 py-0.5 rounded border transition-colors ${
                              formData.country.toLowerCase() === c.toLowerCase()
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => onChange("city", e.target.value)}
                        placeholder="Enter your city"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Registration Category (Standard vs Reduced) */}
                    <div className="space-y-2 md:col-span-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-gray-700 font-medium">Registration Category</label>
                        <span className="text-xs text-gray-500">
                          {formData.registrationCategory === "Reduced" ? "Special Economic Zone rate" : "Standard International rate"}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleCategoryChange("Standard")}
                          className={`p-3 text-left rounded-lg border-2 transition-all flex flex-col justify-between ${
                            formData.registrationCategory === "Standard"
                              ? "border-blue-600 bg-blue-50/60 ring-1 ring-blue-500"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="font-semibold text-gray-900">Standard</span>
                            <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              formData.registrationCategory === "Standard" ? "border-blue-600 bg-blue-600" : "border-gray-300"
                            }`}>
                              {formData.registrationCategory === "Standard" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            For authors from all other countries / International
                          </p>
                          <span className="text-xs font-medium text-blue-700 mt-2">
                            Early: USD 400 / EUR 350 • Regular: USD 600 / EUR 500
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleCategoryChange("Reduced")}
                          className={`p-3 text-left rounded-lg border-2 transition-all flex flex-col justify-between ${
                            formData.registrationCategory === "Reduced"
                              ? "border-blue-600 bg-blue-50/60 ring-1 ring-blue-500"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-900">Reduced (SEZ)</span>
                              <span className="text-[10px] bg-green-100 text-green-800 font-semibold px-1.5 py-0.5 rounded">
                                India, BD, LK, NP
                              </span>
                            </div>
                            <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              formData.registrationCategory === "Reduced" ? "border-blue-600 bg-blue-600" : "border-gray-300"
                            }`}>
                              {formData.registrationCategory === "Reduced" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Special Economic Zone: India, Bangladesh, Sri Lanka, Nepal
                          </p>
                          <span className="text-xs font-medium text-green-700 mt-2">
                            Early: INR 12,000 / USD 130 • Regular: INR 13,000 / USD 150
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Registration Type (Early Bird vs Regular) */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-gray-700 font-medium">Type of Registration</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleTypeChange("Early Bird")}
                          className={`p-3 text-left rounded-lg border-2 transition-all flex items-center justify-between ${
                            formData.registrationType === "Early Bird"
                              ? "border-blue-600 bg-blue-50/60 ring-1 ring-blue-500"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-900">Early Bird</span>
                              <span className="text-[11px] bg-amber-100 text-amber-800 font-medium px-2 py-0.5 rounded-full">
                                Before Oct. 10
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">Discounted early submission rate</p>
                          </div>
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 ${
                            formData.registrationType === "Early Bird" ? "border-blue-600 bg-blue-600" : "border-gray-300"
                          }`}>
                            {formData.registrationType === "Early Bird" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleTypeChange("Regular")}
                          className={`p-3 text-left rounded-lg border-2 transition-all flex items-center justify-between ${
                            formData.registrationType === "Regular"
                              ? "border-blue-600 bg-blue-50/60 ring-1 ring-blue-500"
                              : "border-gray-200 hover:border-gray-300 bg-white"
                          }`}
                        >
                          <div>
                            <span className="font-semibold text-gray-900">Regular</span>
                            <p className="text-xs text-gray-500 mt-0.5">Standard conference registration rate</p>
                          </div>
                          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 ${
                            formData.registrationType === "Regular" ? "border-blue-600 bg-blue-600" : "border-gray-300"
                          }`}>
                            {formData.registrationType === "Regular" && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Currency & Calculated Payment Amount */}
                    <div className="space-y-2 md:col-span-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-gray-700 font-medium">Payment Amount (Registration Fee)</label>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-gray-500">Currency:</span>
                          {(formData.registrationCategory === "Reduced" ? ["INR", "USD", "EUR"] : ["USD", "EUR"]).map((curr) => (
                            <button
                              key={curr}
                              type="button"
                              onClick={() => handleCurrencyChange(curr)}
                              className={`text-xs px-2.5 py-1 rounded font-semibold transition-colors ${
                                formData.currency === curr
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                              }`}
                            >
                              {curr}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 font-semibold text-sm">
                            {formData.currency === "INR" ? "₹" : formData.currency === "EUR" ? "€" : "$"}
                          </span>
                        </div>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={formData.registrationAmount}
                          onChange={(e) => onChange("registrationAmount", e.target.value)}
                          placeholder="Calculated amount"
                          className="w-full pl-8 pr-3 p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold text-gray-900 bg-gray-50/50"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-blue-50/80 border border-blue-200/80 rounded-lg p-3 gap-2">
                        <div className="text-xs text-blue-900">
                          <span className="font-bold">Calculated Fee: </span>
                          <span className="font-semibold">
                            {formData.currency} {Number(formData.registrationAmount || 0).toLocaleString()}
                          </span>
                          {" "}• Category: <strong>{formData.registrationCategory}</strong> ({formData.registrationType})
                        </div>
                        <div className="text-[11px] text-blue-700">
                          Includes 18% GST • Non-refundable
                        </div>
                      </div>

                      <p className="text-xs text-blue-700 bg-blue-50 border border-blue-200/60 rounded-md p-2.5 mt-1">
                        💳 You can pay your registration fee via <strong>Kotak UPI QR Code</strong> or <strong>Direct Bank Transfer (IMPS / NEFT / RTGS)</strong>. After submitting this form, you will be directed to submit your <strong>Payment Proof (receipt/screenshot)</strong> and <strong>Payment Date</strong>.
                      </p>
                    </div>
                  <div className="md:col-span-2 flex flex-col items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors"
                    >
                      Submit Registration
                    </button>
                    {submitMsg && (
                      <p className={`text-sm ${submitMsg.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                        {submitMsg}
                      </p>
                    )}
                  </div>
                    </form>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Registration;

