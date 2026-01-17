import React from "react";
import { motion } from "framer-motion";



const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TechnicalOrgannizers() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Page Heading (same style as Speakers) */}
            <motion.div
                className="text-center mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Technical Program Committee
                </motion.h2>

                {/* Animated Divider */}
                <motion.div
                    className="w-24 h-1 bg-blue-600 mx-auto mb-8"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />

                {/* <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Organizing and technical committees bringing together experts from
          leading institutions worldwide
        </motion.p> */}
            </motion.div>

            {/* Organizing Committee Section */}
            <motion.div
                // variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-10"
            >

                {/* General Chair */}
                {/* Technical Program Committee */}
                {/* <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Technical Program Committee</h4> */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[
                        ["Prof. Kuldar Taveter", "Software Engineering Group, University of Tartu, Estonia"],
                        ["Prof. Ingrid Pappel", "Information Society Technologies, Tallinn University of Technology (TalTech), Estonia"],
                        ["Prof. Rakshya Bhattarai", "Computer Science Researcher, Finland"],
                        ["Dr. Inoubli", "CRIL Research Center, University of Artois, France"],
                        ["Dr. Verena Geist", "Researcher, Austria"],
                        ["Dr. Nzamba Bignoumba", "Researcher, Gabon"],
                        ["Dr. Lisa Ehrlinger", "Data Profiling Group, Hasso Plattner Institute (HPI), Germany"],
                        ["Prof. Michael Felderer", "Institute for Software Technology, DLR (German Aerospace Center), Germany"],
                        ["Prof. Gerd Wagner", "Web Engineering & Modeling, Brandenburg University of Technology (BTU), Germany"],
                        ["Prof. Norbert Gronau", "Chair of Information Systems, University of Potsdam, Germany"],
                        ["Prof. Dieter Kranzlmüller", "Chair of Computer Science / LRZ Director, LMU Munich, Germany"],
                        ["Prof. Gerhard Weiss", "Multiagent Systems Group, University of Freiburg, Germany"],
                        ["Dr. Shweta Suran", "Researcher, Max Planck Institute (MPIB), Germany"],
                        ["Dr. Rajeev Wankar", "School of Computer & Information Sciences, University of Hyderabad, India"],
                        ["Dr. Vishwajeet Pattanaik", "Researcher, NIT Rourkela, India"],
                        ["Mr. Vipin Deval", "Faculty, KIET Group of Institutions, India"],
                        ["Prof. Avigdor Gal", "Data Science & Information Systems, Technion – Israel Institute of Technology, Israel"],
                        ["Prof. Tania Cerquitelli", "Department of Control and Computer Engineering, Politecnico di Torino, Italy"],
                        ["Prof. Takehiko Nagumo", "Graduate School of Management, Kyoto University, Japan"],
                        ["Prof. Dimitris Zeginis", "Data & Knowledge Engineering, University of Macedonia, North Macedonia"],
                        ["Prof. Tambouris Efthimios", "Information Systems, University of Macedonia, North Macedonia"],
                        ["Prof. Gerald Weber", "Computer Science, University of Auckland, New Zealand"],
                        ["Prof. Annika Hinze", "Department of Computer Science, University of Waikato, New Zealand"],
                        ["Prof. Marcin Sikorski", "Faculty of Management and Economics, Gdansk University of Technology, Poland"],
                        ["Prof. Tina Jukić", "Faculty of Public Administration, University of Ljubljana, Slovenia"],
                        ["Prof. Carmen Rotuna", "Researcher, Romania"],
                        ["Prof. Konstantinos Tarabanis", "University of Macedonia (Your list: Romania)"],
                        ["Prof. Prayag Tiwari", "Computer Science, Sweden"],
                        ["Prof. Oscar Pastor", "Center for Software Production Methods, Universitat Politècnica de València, Spain"],
                        ["Prof. Gerhard Schwabe", "Information Management Research Group, University of Zurich, Switzerland"],
                        ["Prof. Dursun Zafer Şeker", "Faculty of Informatics, Istanbul Technical University (ITU), Turkey"],
                        ["Prof. Ladjel Bellatreche", "LIAS Laboratory, University of Poitiers/ENSMA, France"],
                        ["Prof Meelis Kull", "Machine Learning Group, University of Tartu, Estonia"],
                        ["Prof. Hans Vangheluwe", "Modeling & Simulation, University of Antwerp, Belgium/Netherlands"],
                        ["Prof. Gerhard Weiss", "Artificial Intelligence, Maastricht University, Netherlands"],
                        ["Dr. Elli Valla", "Tallinn University of Technology, Tallinn, Estonia"],
                        ["Dr. Anastasija Nikiforova", "University of Tartu, Estonia"],
                        ["Dr. Innar Liiv", "Tallinn University of Technology, Tallinn, Estonia"],
                        ["Prof. Iztok Fister", "Computer Science, University of Maribor, Slovenia"],
                        ["Prof. Nitesh Bharosa", "Faculty of Technology, Policy and Management, TU Delft, Netherlands"],
                        ["Marijn Janssen", "ICT & Governance, TU Delft, Netherlands"],
                        ["Prof. Sonia Ayachi Ghannouchi", "Researcher, Tunisia"],
                        ["Emna Ammar El Hadj Amor", "Researcher, Tunisia"],
                        ["Prof. Christof Lutteroth", "Department of Computer Science, University of Bath, UK"],
                        ["Prof. Anna de Liddo", "Knowledge Media Institute, The Open University, UK"],
                        ["Prof. Keegan McBride", "Digital Governance, University of Oxford, UK"],
                        ["Prof. Alan Sexton", "School of Computer Science, University of Birmingham, UK"],
                        ["Prof. Vimal Dwivedi", "Researcher, UK"],
                        ["Prof. Attique Shah", "School of Computing, Birmingham City University, UK"],
                        ["Prof. Adel Aneiba", "School of Computing, Birmingham City University, UK"],
                        ["Prof. Simon Price", "School of Computer Science, University of Bristol, UK"],
                        ["Mr. Salvatore Sinno", "Researcher, Newcastle University, UK"],
                        ["Prof. Ilkay Altintas", "San Diego Supercomputer Center, University of California San Diego (UCSD), USA"],
                        ["Prof. Il-Yeol Song", "College of Computing & Informatics, Drexel University, USA"],
                        ["Prof. Divesh Srivastava", "AT&T Labs Research, USA"],
                        ["Prof. Teo Forcht-Dagi", "Academic Leadership, Queen’s University Belfast (Cross: USA/UK)"],
                        ["Prof. Nicholas Bucciarelli", "Cornell University, USA"],
                        ["Dr Tushar, Jaware", "Dean ( Research & Development ) and Associate Professor, Electronics and Communication Engineering, R C Patel Institute of Technology, Shirpur, India"],
                        ["Dr. Manohar Naik S", "Assistant Professor, Department of Computer Science, Central University of Kerala, India"],
                        ["Meetu Malhotra", "Doctorate Student / Research Assistant, Harrisburg University of Science and Technology, Harrisburg, United States, Harrisburg University of Science and Technology, USA"],
                        ["Dr. SUMIT KUMAR", "Associate Professor & HoD, Department of Information Technology (IT), Rajan Mamta Degree College, Aurangabad, Bihar, India"],
                        ["Ms. Vimal Gaur", "Associate Professor, Department of CSE, Maharaja Surajmal Institute of Technology, Delhi, India"],
                        ["Dr. Chaitali Bhowmik", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Dr. Soumi Dutta", "Associate Professor, Sister Nivedita University, West Bengal, India"],
                        ["Prachi Goel", "Assistant Professor, Department of CSE, Dr Akhilesh Das Gupta Institute of Professional Studies, Delhi, India"],
                        ["Tanvi Rustagi", "Assistant Professor, Department of Computer Science, World College of Technology and Management, Gurugram, India"],
                        ["Dr. Chaitali Koley", "Assistant Professor, Electronics and Communication Engineering, NIT Mizoram, India"],
                        ["Dr. Deepika Bhatia", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Ms. Esha Saxena", "Assistant Professor, Jamia Hamdard University, New Delhi"],
                        ["Dr. Monika Bansal", "Associate Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies - Technical Campus, New Delhi, India"],
                        ["Sanjay Nalbalwar", "Professor & Head, Department of Electronics & Telecomm. Engg., Dr. Babasaheb Ambedkrar Technological Uinversity, Lonere, India"],
                        ["Dr. Biswa Sahoo", "Associate Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Dr. Yatu Rani", "Assistant Professor, Bhagwan Mahavir institute of engineering and technology, Sonepat, India"],
                        ["Ms. Mini Agarwal", "Assistant Professor, Department of Computer Science & Engineering, Maharaja Agrasen Institute Of Technology, Rohini, New Delhi"],
                        ["Vaishali", "Assistant Professor, Manav Rachna International Institute Of Research And Studies, Faridabad, New Delhi, India"],
                        ["Dr. Sivabalan Settu", "Assistant Professor, Vignan Foundations for Science, Technology and Research, Vignan University Guntur, AP, India"],
                        ["Dr. Mohammed Wasid", "Assistant Professor, School of Computer Science Engineering and Technology, Bennett University, UP, India"],
                        ["Ms. Prerna Ajmani", "Assistant Professor, Department of Information Technology, Vivekananda Institute of Professional Studies-TC, Pitampura, New Delhi, India"],
                        ["Dr. Ashish Kumar", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Dr Sitender", "Assistant Professor, Department of IT, Maharaja Surajmal Institute of Technology, Delhi, India"],
                        ["Ms. Gunjan Beniwal", "Assistant Professor, Maharaja Surajmal Institute of Technology, Delhi, India"],
                        ["Dr. Gunjan Verma", "Assistant Professor, School of Computer Applications, , Manav Rachna International Institute of Research and Studies (MRIIRS), Faridabad, India"],
                        ["Dr. Nivedita Palia", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Dr. Sandhya Tarwani", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Ms. Nishi Jain", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Dr. Adeel Hashmi", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Dr. Pooja Kherwa", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Maharaja Surajmal Institute of Technology, Delhi, India"],
                        ["Dr. Moolchand Sharma", "Assistant Professor, Department of Computer Science & Engineering, Maharaja Agrasen Institute of Technology, Delhi, India"],
                        ["Dr. Sandeep Kumar", "Member Senior Scientist, Wireless Communication, Central Research Laboratory, Bharat Electronics Limited"],
                        ["Dr. Shakti Kundu", "Associate Professor, Department of Computer Science, School of Engineering and Technology, BML Munjal University, Haryana, India"],
                        ["Dr. Vikash Yadav", "Lecturer Computer, Computer Science & Engineering, Government Polytechnic Bighapur Unnao, Board of Technical Education, Uttar Pradesh, India"],
                        ["Dr. Mazin Abed Mohammed", "Associate Professor in Information Systems Department, College of Computer Science and Information Technology, University of Anbar"],
                        ["Dr. Sujatha Kesavan", "Dean, Dr.MGR Educational & Research Institute, Tamilnadu, India"],
                        ["Sujatha R", "Associate Professor, Department of Software and Systems Engineering, Vellore Institute of Technology, Vellore, India"],
                        ["Dr. Srilatha Chebrolu", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, National Institute of Technology, Andhra Pradesh, India"],
                        ["Ms. Neha Sharma", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Bharati Vidyapeeth's College of Engineering, Delhi, India"],
                        ["Dr. Aws Yonis", "Assistant Professor, Wireless Communication Eng, Ninevah University, Mosul, Iraq"],
                        ["Dr. Parul Chaudhary", "Assistant Professor, Department of CSE, Maharaja Surajmal Institute of Technology, Delhi, India"],
                        ["Dr. MOHD IZHAR", "Department of CSE, Dr. Akhilesh Das Gupta Institute of Professional Studies, Delhi, India"],
                        ["Dr. Vani Kapoor", "Assistant Professor, Department of Information Technology, Vivekananda Institute of Professional Studies - Technical Campus, New Delhi, India"],
                        ["Dr. Milind Shah", "Professor-EXTC, Dean (Academics)-FCRIT, Department of Electronics & Telecommunications Engineering, Agnel Charities' Fr. C. Rodrigues Institute of Technology, Maharashtra, India"],
                        ["Nikhil Marriwala", "Assistant Professor, Department of Electronics and Communication Engineering, University Institute of Engineering and Technology, Kurukshetra University, Kurukshetra, India"],
                        ["Dr. Rajeev Kumar", "Assistant Professor, Member IEEE, Department of CSE, NIT Hamirpur, India"],
                        ["Apurva Jain", "Dr. Akhilesh Das Gupta Institute of Professional Studies, Delhi, India"],
                        ["MS. Divya Jatain", "Assistant Professor, Department of CSE, Maharaja Surajmal Institute of Technology, Delhi, India"],
                        ["Dr. Bhawna Suri", "Associate Professor, Department of CSE, BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY, Delhi, India"],
                        ["Ms. Shikha Jain", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Usha Dhankar", "Assistant Professor, Department of Electronics and Communication Engineering, HMR Institute of Technology and Management, New Delhi, India"],
                        ["Dr. Ajay Dureja", "Assistant professor, Department of CSE, Bharati Vidyapeeth's College of Engineering, New Delhi, India"],
                        ["Mr. Amrit Chhetri", "Digital Forensic Researcher, My Cyber Hubs"],
                        ["Dr. Naresh Kumar", "Associate Professor, Department of CSE, Maharaja Surajmal Institute of Technology, Delhi, India"],
                        ["Dr. Riya Sapra", "Associate Professor, Department of CSE, Amity University, Haryana"],
                        ["Dr. Amrita Rai", "Professor, Department of Electronics and Communication Engineering, LLOYD Institute of Engineering & Technology, Greater Noida, UP, India"],
                        ["Dr. Atul Garg", "Professor and Associate Director-IQAC, Institute of Engineering and Technology, Chitkara University, Punjab, India"],
                        ["Dr. Deepika Kumar", "Associate Professor and HOD, Department of CSE, Bharati Vidyapeeth College of Engineering, New Delhi, India"],
                        ["Dr.Soumi Ghosh", "Assistant Professor, Department of Information Technology, Maharaja Agrasen Institute of Technology (MAIT), Delhi"],
                        ["Marcin Paprzycki", "Associate Professor, Systems Research Institute, Polish Academy of Sciences, Poland"],
                        ["Dr. Munishwar Rai", "Associate Professor, Department of CSE, MMICT&BM-MCA"],
                        ["Dr. Sandeep Mathur", "Professor and Head, AMITY UNIVERSITY, Noida, UP, India"],
                        ["Ms. Vidushi", "Assistant Professor, Department of Computer Science, School of Engineering and Technology, Vivekananda Institute of Professional Studies-Technical Campus, Delhi, India"],
                        ["Dr. Abhinav Juneja", "HOD & Professor, Department of Computer Science & Information Technology, KIET Group of Institutions, Delhi NCR, India"],
                        ["Dr. J Deny", "Associate Professor, Department of ECE, Kalasalingam Academy of Research and Education, India"],
                        ["Dr. Meghna Sharma", "Associate Professor, Department of CSE, The NorthCap University, Gurugram, India"],
                        ["Dr. Narendra Rathore", "Professor, Acropolis Institute of Technology and Research, MP, India"],
                        ["Dr. Prashant Kumar", "Assistant Professor, Department of Electronics and Communication Engineering, National Institute of Technology, Jamshedpur, India"],
                        ["Dr. Pushpendra Singh", "Associate Professor, Department of Electrical Engineering, JK Lakshmipat University Jaipur, India"],
                        ["Sarita Gulia", "Assistant Professor, AMITY UNIVERSITY GURGAON, India"],
                        ["Dr. Anitha Kumari", "Associate Professor, Department of Information Technology, PSG College of Technology, Coimbatore, Tamil Nadu India"],
                        ["Dr. Rajiv Chopra", "Associate Professor, Department of CSE, Guru Tegh Bahadur Institute of Technology, GGSIPU, Delhi, India"],
                        ["Dr. Martin Sagayam Kulandairaj", "Assistant Professor, Department of Electronics and Communication Engineering, Karunya Institute of Technology and Sciences, Coimbatore, Tamil Nadu, India"],
                        ["Dr. A. PramodKumar", "CMR Engineering College, Hyderabad, India"],
                        ["Ms. Pratibha Dumane", "Assistant Professor, Department of Electronics & Telecommunications Engineering, Don Bosco Institute of Technology, India"],
                        ["Dr. Shashikant Patil", "Professor, Atlas SkillTech University, Mumbai, India"],
                        ["Dr. Srinivasa Ramanujam Kannan", "Associate Professor, School of Mechanical Sciences, Indian Institute of Technology Bhubaneswar, India"],
                        ["Dr. Sunil Karamchandani", "Associate Professor, Senior Member (IEEE), Electronics & Telecommunication Engineering, (DJSCE), University of Mumbai, India"],
                        ["Dr. Puneet singh Lamba", "Assistant Professor, Department of CSE, Delhi University, Delhi, India"],
                        ["Dr. Vishal Satpute", "Assistant Professor, Electronics and Communication Engineering, VNIT Nagpur, India"],
                        ["Prof. Afaq Ahmad", "Professor, Department of Electrical and Computer Engineering, Sultan Qaboos University, Muscat, Oman"],
                        ["Dr. Min-Shiang Hwang", "Professor, Department of Computer Science and Information Engineering. Asla University, Taiwan"],
                        ["Dr. Noor Elaiza Abdul Khalid", "Associate Professor, University Technology MARA, Malaysia"],
                        ["Prof. Qin Xin", "Faculty of Science and Technology, University of the Faroe Islands (FO), Denmark"],
                        ["Prof. Rajni Jindal", "Professor, Department of Computer Science & Engineering. Delhi Technological University, India"],
                        ["Prof. D. K. Tayal", "Professor and Dean (Academic Affairs), Indira Gandhi Delhi Technical University for Women (IGDTUW), India"],
                        ["Prof. Kapil Sharma", "Professor, Department of Information Technology, Delhi Technological University, India"],
                        ["Dr. Amita Jain", "Assistant Professor, Department of Computer Science and Engineering. Ambedkar Institute of Advanced Communication Technologies and Research, Government of NCT Delhi, India"],
                        ["Dr. Prashant Giridhar Shambharkar", "Assistant Professor, Department of Computer Science and Engineering. Delhi Technological University, India"],
                        ["Dr. Vijay Bhardwaj", "Associate Professor, Guru Kashi University, Bathinda, India"],
                        ["Dr. Vinita Jain", "Professor and Head, Department of Information Technology. Bharati Vidyapeeth's College of Engineering, India"],
                        ["Dr. Manju Khari", "Assistant Professor, Department of Computer Science and Engineering. Ambedkar Institute of Advanced Communication Technologies and Research, Government of NCT Delhi, India"],
                        ["Dr. Manju Papreja", "Principal, GVM Institute of Technology and Management, Sonipat, India"],
                        ["Dr. Nisheeth Joshi", "Associate Professor, Department of Computer Science, Banasthali Vidyapith, Rajasthan, India"],
                        ["Dr. S. B. Goyal", "Director, Faculty of Information Technology, City University of Malaysia, Malaysia"],
                        ["Dr. Amol C. Adamuthe", "Assistant Professor and Head of Department, Department of Information Technology, Rajarambapu Institute of Technology, Rajaramnagar, MS. India"],
                        ["Dr. Binod Kumar", "JSPM's Rajarshi Shahu College of Engineering, Pune, India"],
                        ["Ms. Preeti Verma", "Research Scholar, Jiwaji University, Gwalior"],
                        ["Prof. Subarna Shakya", "Professor, Department of Electronics and Computer Engineering, Pulchowk Campus. Institute of Engineering, Tribhuvan University,Nepal"],
                        ["Dr. B. K. Verma", "Professor, Chandigarh Engineering College, Landran, India"],
                        ["Dr. T. V. Rajnini Kanth", "Professor and Dean R&D, Department of Computer Science and Engineering, Sreenidhi Institute of Science and Technology, India"],
                        ["Ms. Nikita Jain", "Assistant Professor, Department of Computer Science, Bharati Vidyapeeth's College of Engineering. Delhi, India"],
                        ["Ms. Kanak Meena", "Department of Computer Science, IGDTUW, India"]
                    ].map(([name, affiliation], idx) => (
                        <div
                            key={idx}
                            className="p-4 bg-white shadow rounded-xl border border-gray-100"
                        >
                            <p className="font-medium text-center">{name}</p>
                            <p className="text-gray-600 text-sm text-center">{affiliation}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
