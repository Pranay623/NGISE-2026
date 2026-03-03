import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export default function TechnicalOrgannizers() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader
                title="Program Committee"
                description="Our distinguished program committee members from around the globe"
            />
            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* Organizing Committee Section */}
                <motion.div
                    // variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-10"
                >

                    {/* Technical Program Committee Chair */}
                    {/* <div className="max-w-4xl mx-auto mb-10">
                        <h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Technical Program Committee Chair</h4>
                        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100 text-center">
                            <p className="font-semibold text-gray-900 text-lg">Dr. Markus Bertl</p>
                            <p className="text-gray-500 text-sm">WU Vienna University of Economics & Business, Austria</p>
                        </div>
                    </div> */}
                    {/* Technical Program Committee Co-Chair */}
                    <div className="max-w-4xl mx-auto mb-10">
                        <h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Program Committee Chair</h4>
                        <div className="p-6 bg-white shadow-sm rounded-xl border border-gray-100 text-center">
                            <p className="font-semibold text-gray-900 text-lg">Dr. Anupama Sharma</p>
                            <p className="text-gray-500 text-sm">Ajay Kumar Garg Engineering College, Ghaziabad, India</p>
                        </div>
                    </div>

                    {/* Technical Program Committee */}
                    <h4 className="text-xl font-bold text-gray-700 mb-6 text-center">Program Committee</h4>
                    <div className="max-w-4xl mx-auto py-8 bg-white shadow-sm rounded-xl border border-gray-100">
                        <ul className="grid grid-cols-1 gap-y-2 px-8">
                            {[
                                "Dr. Rozha Kamal Ahmed, Sulaimani Polytechnic University, Iraq",
                                "Dr. Colin Atkinson, Software Engineering Group, University of Mannheim, Germany",
                                "Dr. Edward Bernroider, WU Wien, Vienna Uiversity of Economics, Austria",
                                "Dr. Sidra Azmat Butt, Tallinn University of Technology, Estonia",
                                "Dr. Tania Cerquitelli, Politecnico di Torino, Italy",
                                "Dr. Gillian Dobbie, Computer Science, University of Auckland, New Zealand",
                                "Dr. Dirk Draheim, Tallinn University of Technology, Estonia",
                                "Dr. Vipin Deval, KIET Group, Ghaziabad, India",
                                "Dr. Vimal Dwivedi, University of Ulster, UK",
                                "Dr. Lisa Ehrlinger, Hasso Plattner Institute, Germany",
                                "Dr. Iztok Fister, University of Maribor, Slovenia",
                                "Dr. Verena Geist, SCCH (Software Competence Center Hagenberg), Hagenberg, Austria",
                                "Dr. Minakshi Kaushik, Karlsruhe Institute of Technology, Germany",
                                "Dr. Innar Liiv, Tallinn University of Technology, Estonia",
                                "Dr. Silvia Lips, Tallinn University of Technology, Estonia",
                                "Dr. Olaf Maennel, University of Adeleide, Australia",
                                "Dr. Takehiko Nagumo, Kyoto University, Japan",
                                "Dr. Anastasija Nikiforova, University of Tartu, Estonia",
                                "Dr. Ingrid Pappel, Tallinn University of Technology, Estonia",
                                "Dr. Vishwajeet Pattanaik, Indian Institute of Science, Bengalore, India",
                                "Dr. Sijo Arakkal Peious, Tallinn University of Technology, Estonia",
                                "Dr. Arun Kumar Sangaiah, National Yunlin University of Science and Technology, Taiwan",
                                "Dr. Rahul Sharma, Karlsruhe Institute of Technology, Germany",
                                "Dr. Attique Shah, City University of Birminghem, UK",
                                "Dr. Divesh Srivastava, AT&T Labs Research, USA",
                                "Dr. Shweta Suran, Max-Planck Institute, Berlin, Germany",
                                "Dr. Kuldar Taveter, University of Tartu, Estonia",
                                "Dr. A Min Tjoa, Technical University Vienna, Austria",
                                "Dr. Thomas Ziebermayer, University of Applied Sciences Upper Austria, Hagenberg, Austria",
                                // "Prof. Kuldar Taveter, Estonia",
                                // "Prof. Rakshya Bhattarai, Finland",
                                // "Dr. Inoubli, France",
                                // "Dr. Verena Geist, Austria",
                                // "Dr. Nzamba Bignoumba, Gabon",
                                // "Dr. Lisa Ehrlinger, Germany",
                                // "Prof. Michael Felderer, Germany",
                                // "Prof. Gerd Wagner, Germany",
                                // "Prof. Norbert Gronau, Germany",
                                // "Prof. Dieter Kranzlmüller, Germany",
                                // "Prof. Gerhard Weiss, Netherlands",
                                // "Dr. Shweta Suran, Germany",
                                // "Dr. Rajeev Wankar, India",
                                // "Dr. Vishwajeet Pattanaik, India",
                                // "Dr. Vipin Deval, India",
                                // "Mr. Vipin Deval, India",
                                // "Prof. Avigdor Gal, Israel",
                                // "Prof. Takehiko Nagumo, Japan",
                                // "Prof. Dimitris Zeginis, Greece",
                                // "Prof. Efthimios Tambouris, Greece",
                                // "Prof. Gerald Weber, New Zealand",
                                // "Prof. Annika Hinze, New Zealand",
                                // "Prof. Marcin Sikorski, Poland",
                                // "Prof. Tina Jukić, Slovenia",
                                // "Prof. Carmen Rotuna, Romania",
                                // "Prof. Konstantinos Tarabanis, Greece",
                                // "Prof. Prayag Tiwari, Sweden",
                                // "Prof. Oscar Pastor, Spain",
                                // "Prof. Gerhard Schwabe, Switzerland",
                                // "Prof. Dursun Zafer Şeker, Turkey",
                                // "Prof. Ladjel Bellatreche, France",
                                // "Prof. Meelis Kull, Estonia",
                                // "Prof. Hans Vangheluwe, Belgium",
                                // "Dr. Elli Valla, Estonia",
                                // "Dr. Anastasija Nikiforova, Estonia",
                                // "Dr. Innar Liiv, Estonia",
                                // "Prof. Iztok Fister, Slovenia",
                                // "Prof. Nitesh Bharosa, Netherlands",
                                // "Marijn Janssen, Netherlands",
                                // "Prof. Sonia Ayachi Ghannouchi, Tunisia",
                                // "Emna Ammar El Hadj Amor, Tunisia",
                                // "Prof. Christof Lutteroth, United Kingdom",
                                // "Prof. Anna De Liddo, United Kingdom",
                                // "Prof. Keegan McBride, United Kingdom",
                                // "Prof. Alan Sexton, United Kingdom",
                                // "Prof. Vimal Dwivedi, United Kingdom",
                                // "Prof. Attique Shah, United Kingdom",
                                // "Prof. Adel Aneiba, United Kingdom",
                                // "Prof. Simon Price, United Kingdom",
                                // "Prof. Ilkay Altintas, USA",
                                // "Prof. Il-Yeol Song, USA",
                                // "Prof. Divesh Srivastava, USA",
                                // "Prof. Nicholas Bucciarelli, USA",
                                // "Dr. Tushar Jaware, India",
                                // "Dr. Manohar Naik S., India",
                                // "Meetu Malhotra, USA",
                                // "Dr. Sumit Kumar, India",
                                // "Dr. Vimal Gaur, India",
                                // "Ms. Vimal Gaur, India",
                                // "Dr. Chaitali Bhowmik, India",
                                // "Dr. Soumi Dutta, India",
                                // "Dr.Prachi Goel, India",
                                // "Dr.Tanvi Rustagi, India",
                                // "Dr. Chaitali Koley, India",
                                // "Dr. Deepika Bhatia, India",
                                // "Dr. Esha Saxena, India",
                                // "Ms. Esha Saxena, India",
                                // "Dr. Monika Bansal, India",
                                // "Dr.Sanjay Nalbalwar, India",
                                // "Dr. Biswa Sahoo, India",
                                // "Dr. Yatu Rani, India",
                                // "Dr. Mini Agarwal, India",
                                // "Ms. Mini Agarwal, India",
                                // "Dr.Vaishali, India",
                                // "Vaishali, India",
                                // "Dr. Sivabalan Settu, India",
                                // "Dr. Mohammed Wasid, India",
                                // "Dr. Prerna Ajmani, India",
                                // "Ms. Prerna Ajmani, India",
                                // "Dr. Ashish Kumar, India",
                                // "Dr. Sitender, India",
                                // "Dr. Gunjan Beniwal, India",
                                // "Ms. Gunjan Beniwal, India",
                                // "Dr. Gunjan Verma, India",
                                // "Dr. Nivedita Palia, India",
                                // "Dr. Sandhya Tarwani, India",
                                // "Dr. Nishi Jain, India",
                                // "Ms. Nishi Jain, India",
                                // "Dr. Adeel Hashmi, India",
                                // "Dr. Pooja Kherwa, India",
                                // "Dr. Moolchand Sharma, India",
                                // "Dr. Sandeep Kumar, India",
                                // "Dr. Shakti Kundu, India",
                                // "Dr. Vikash Yadav, India",
                                // "Dr. Mazin Abed Mohammed, Iraq",
                                // "Dr. Sujatha Kesavan, India",
                                // "Dr.Sujatha R., India",
                                // "Dr. Srilatha Chebrolu, India",
                                // "Dr. Neha Sharma, India",
                                // "Ms. Neha Sharma, India",
                                // "Dr. Aws Yonis, Iraq",
                                // "Dr. Parul Chaudhary, India",
                                // "Dr. Mohd Izhar, India",
                                // "Dr. Vani Kapoor, India",
                                // "Dr. Milind Shah, India",
                                // "Dr.Nikhil Marriwala, India",
                                // "Nikhil Marriwala, India",
                                // "Dr. Rajeev Kumar, India",
                                // "Dr.Apurva Jain, India",
                                // "Apurva Jain, India",
                                // "Dr. Divya Jatain, India",
                                // "Ms. Divya Jatain, India",
                                // "Dr. Bhawna Suri, India",
                                // "Dr. Shikha Jain, India",
                                // "Ms. Shikha Jain, India",
                                // "Dr.Usha Dhankar, India",
                                // "Usha Dhankar, India",
                                // "Dr. Ajay Dureja, India",
                                // "Dr. Amrit Chhetri, India",
                                // "Mr. Amrit Chhetri, India",
                                // "Dr. Naresh Kumar, India",
                                // "Dr. Riya Sapra, India",
                                // "Dr. Amrita Rai, India",
                                // "Dr. Atul Garg, India",
                                // "Dr. Deepika Kumar, India",
                                // "Dr. Soumi Ghosh, India",
                                // "Dr. Munishwar Rai, India",
                                // "Dr. Sandeep Mathur, India",
                                // "Dr. Vidushi, India",
                                // "Ms. Vidushi, India",
                                // "Dr. Abhinav Juneja, India",
                                // "Dr. J. Deny, India",
                                // "Dr. Meghna Sharma, India",
                                // "Dr. Narendra Rathore, India",
                                // "Dr. Prashant Kumar, India",
                                // "Dr. Pushpendra Singh, India",
                                // "Dr.Sarita Gulia, India",
                                // "Sarita Gulia, India",
                                // "Dr. Anitha Kumari, India",
                                // "Dr. Rajiv Chopra, India",
                                // "Dr. Martin Sagayam Kulandairaj, India",
                                // "Dr. A. Pramod Kumar, India",
                                // "Dr. Pratibha Dumane, India",
                                // "Ms. Pratibha Dumane, India",
                                // "Dr. Shashikant Patil, India",
                                // "Dr. Srinivasa Ramanujam Kannan, India",
                                // "Dr. Sunil Karamchandani, India",
                                // "Dr. Puneet Singh Lamba, India",
                                // "Dr. Vishal Satpute, India",
                                // "Prof. Afaq Ahmad, Oman",
                                // "Dr. Min-Shiang Hwang, Taiwan",
                                // "Dr. Noor Elaiza Abdul Khalid, Malaysia",
                                // "Prof. Qin Xin, Denmark",
                                // "Prof. Rajni Jindal, India",
                                // "Prof. D. K. Tayal, India",
                                // "Prof. Kapil Sharma, India",
                                // "Dr. Amita Jain, India",
                                // "Dr. Prashant Giridhar Shambharkar, India",
                                // "Dr. Vijay Bhardwaj, India",
                                // "Dr. Vinita Jain, India",
                                // "Dr. Manju Khari, India",
                                // "Dr. Manju Papreja, India",
                                // "Dr. Nisheeth Joshi, India",
                                // "Dr. S. B. Goyal, Malaysia",
                                // "Dr. Amol C. Adamuthe, India",
                                // "Dr. Binod Kumar, India",
                                // "Dr. Preeti Verma, India",
                                // "Ms. Preeti Verma, India",
                                // "Prof. Subarna Shakya, Nepal",
                                // "Dr. B. K. Verma, India",
                                // "Dr. T. V. Rajnini Kanth, India",
                                // "Dr. Nikita Jain, India",
                                // "Dr. Kanak Meena, India"
                                // "Ms. Nikita Jain, India",
                                // "Ms. Kanak Meena, India"
                            ].map((member, idx) => (
                                <li key={idx} className="py-1 text-center">
                                    <span className="text-gray-700 font-medium text-sm sm:text-base">{member}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
