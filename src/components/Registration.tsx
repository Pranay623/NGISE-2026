import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import { registerUser } from "../services/paymentService";

const Registration = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nationality: "indian",
    country: "",
    categoryType: "",
    paperId: "",
    paperTitle: "",
    title: "Mr",
    firstName: "",
    lastName: "",
    gender: "male",
    mobile: "",
    email: "",
    institution: "",
    city: "",
    state: "",
    registrationAmount: "",
  });
  const [submitMsg, setSubmitMsg] = useState("");

  const [countries, setCountries] = useState<string[]>([]);
  const [countryQuery, setCountryQuery] = useState("");
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [countriesLoaded, setCountriesLoaded] = useState(false);

  // Fetch country list from public API (restcountries). Falls back to a small list if network fails.
  const fetchCountries = async () => {
    setLoadingCountries(true);
    try {
      const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      const list = data
        .map((c: any) => c?.name?.common)
        .filter(Boolean)
        .sort((a: string, b: string) => a.localeCompare(b));
      setCountries(list);
    } catch (err) {
      // minimal fallback
      setCountries(["India", "United States", "United Kingdom", "Germany", "France", "Japan", "Canada", "Australia"]);
    } finally {
      setLoadingCountries(false);
      setCountriesLoaded(true);
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

  const filteredCountries = countryQuery
    ? countries.filter((c) => c.toLowerCase().includes(countryQuery.toLowerCase()))
    : countries;

  const handleCountrySearch = () => {
    setSubmitMsg("");
    if (!countriesLoaded) {
      fetchCountries();
      setSubmitMsg("Loading countries...");
      return;
    }
    if (!countryQuery) {
      setSubmitMsg("Type a country name to search.");
      return;
    }
    const match = countries.find((c) => c.toLowerCase().includes(countryQuery.toLowerCase()));
    if (match) {
      onChange("country", match);
      setSubmitMsg(`Selected ${match}`);
    } else {
      setSubmitMsg("No matching country found.");
    }
  };

  const resetForm = () => {
    setFormData({
      nationality: "indian",
      country: "",
      categoryType: "",
      paperId: "",
      paperTitle: "",
      title: "Mr",
      firstName: "",
      lastName: "",
      gender: "male",
      mobile: "",
      email: "",
      institution: "",
      city: "",
      state: "",
      registrationAmount: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMsg("");

    const required: Array<keyof typeof formData> = [
      "categoryType",
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
        title: formData.title || undefined,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.mobile,
        email: formData.email,
        organization: formData.institution,
        address: formData.state,
        country: formData.country,
        city: formData.city,
        registrationCategory: formData.categoryType,
        registrationFee: Number(formData.registrationAmount) || 0
      });

      setSubmitMsg("Registration submitted successfully. You can now make the payment.");
      setTimeout(() => {
        setShowForm(false);
        resetForm();
      }, 2000);
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
                    <th className="py-3 px-6">Early Bird  (before Sep.14)</th>
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
                    <td className="py-4 px-6">Reduced (via NGISE/AKGEC Scholarship)</td>
                    <td className="py-4 px-6">USD 130 / EUR 110</td>
                    <td className="py-4 px-6">USD 150 / EUR 120</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Extra Page (up to two pages)</td>
                    <td className="py-4 px-6">USD 60 / EUR 50 per page</td>
                    <td className="py-4 px-6">USD 90 / EUR 75 per page</td>
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
                          Reduced fees cover admittance to all sessions, certificate of participation (only for on-site participants), lunch, and coffee breaks. The reduced fee is sponsored by the <strong>NGISE/AKGEC Young Scholar's Scholarship</strong>.The intention of the reduced fee is to enable young scholars to attend the conference. It is granted upon application to a limited number of applicants, according to availability of funds. As application for a reduced fee, it is sufficient to send your CV (including ORCID and Google Scholar link) to ngise@akgec.ac.in (subject: <strong>Reduced Fee</strong>). Researchers at all career stages can apply. Applicants will be selected according to scientific age and achievements.
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
                Submit Payment Proof
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
                      <input type="text" value={formData.paperId} onChange={(e) => onChange("paperId", e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Title</label>
                      <select value={formData.title} onChange={(e) => onChange("title", e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Dr">Dr.</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">First Name</label>
                      <input type="text" value={formData.firstName} onChange={(e) => onChange("firstName", e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Last Name</label>
                      <input type="text" value={formData.lastName} onChange={(e) => onChange("lastName", e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Phone Number</label>
                      <input type="tel" maxLength={10} value={formData.mobile} onChange={(e) => onChange("mobile", e.target.value.replace(/\D/g, ""))} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">Email Address</label>
                      <input type="email" value={formData.email} onChange={(e) => onChange("email", e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
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
                      <label className="block text-gray-700 font-medium">Country</label>
                      <div className="relative">
                        <input
                          list="country-options"
                          value={formData.country}
                          onChange={(e) => {
                            onChange("country", e.target.value);
                            setCountryQuery(e.target.value);
                          }}
                          placeholder="Search and select a country"
                          className="w-full pr-12 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={handleCountrySearch}
                          className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                          aria-label="Search country"
                        >
                          <Search className="w-4 h-4" />
                        </button>
                      </div>
                      <datalist id="country-options">
                        {filteredCountries.map((country) => (
                          <option key={country} value={country} />
                        ))}
                      </datalist>
                      {loadingCountries && <p className="text-xs text-gray-500">Loading countries...</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-gray-700 font-medium">City</label>
                      <input type="text" value={formData.city} onChange={(e) => onChange("city", e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-gray-700 font-medium">Registration Category</label>
                      <select
                        value={formData.categoryType}
                        onChange={(e) => onChange("categoryType", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">--Select Category--</option>
                        <option value="Academician/Industry Participant/Others">Academician/Industry Participant/Others</option>
                        <option value="Research Scholar/ UG/PG Student">Research Scholar/ UG/PG Student</option>
                        <option value="Attendee">Attendee</option>
                        <option value="Non Presenting Author">Non Presenting Author</option>
                      </select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-gray-700 font-medium">Registration Fee</label>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.registrationAmount}
                        onChange={(e) => onChange("registrationAmount", e.target.value)}
                        placeholder="Enter amount"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
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

