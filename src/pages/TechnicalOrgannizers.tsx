import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

export default function TechnicalOrgannizers() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader
                title="Technical Program Committee"
                description="Our distinguished technical committee members from around the globe"
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

                    {/* General Chair */}
                    {/* Technical Program Committee */}
                    {/* <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">Technical Program Committee</h4> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {[
                            ["Prof. Kuldar Taveter", "Software Engineering Group, University of Tartu, Estonia"],
                            ["Prof. Rakshya Bhattarai", "Computer Science Researcher, Finland"],
                            ["Dr. Inoubli", "CRIL Research Center, University of Artois, France"],
                            ["Dr. Verena Geist", "Researcher, Austria"],
                            ["Dr. Nzamba Bignoumba", "Researcher, Gabon"],
                            ["Dr. Lisa Ehrlinger", "Data Profiling Group, Hasso Plattner Institute (HPI), Germany"],
                            ["Prof. Michael Felderer", "Institute for Software Technology, German Aerospace Center (DLR), Germany"],
                            ["Prof. Gerd Wagner", "Web Engineering and Modeling, Brandenburg University of Technology (BTU), Germany"],
                            ["Prof. Norbert Gronau", "Chair of Information Systems, University of Potsdam, Germany"],
                            ["Prof. Dieter Kranzlmüller", "Chair of Computer Science and Director, Leibniz Supercomputing Centre (LRZ), LMU Munich, Germany"],
                            ["Prof. Gerhard Weiss", "Artificial Intelligence and Multiagent Systems, Maastricht University, Netherlands"],
                            ["Dr. Shweta Suran", "Max Planck Institute for Human Development (MPIB), Germany"],
                            ["Dr. Rajeev Wankar", "School of Computer and Information Sciences, University of Hyderabad, India"],
                            ["Dr. Vishwajeet Pattanaik", "National Institute of Technology Rourkela, India"],
                            ["Mr. Vipin Deval", "KIET Group of Institutions, India"],
                            ["Prof. Avigdor Gal", "Data Science and Information Systems, Technion – Israel Institute of Technology, Israel"],
                            ["Prof. Takehiko Nagumo", "Graduate School of Management, Kyoto University, Japan"],
                            ["Prof. Dimitris Zeginis", "Data and Knowledge Engineering, University of Macedonia, Greece"],
                            ["Prof. Efthimios Tambouris", "Information Systems, University of Macedonia, Greece"],
                            ["Prof. Gerald Weber", "Computer Science, University of Auckland, New Zealand"],
                            ["Prof. Annika Hinze", "Department of Computer Science, University of Waikato, New Zealand"],
                            ["Prof. Marcin Sikorski", "Faculty of Management and Economics, Gdansk University of Technology, Poland"],
                            ["Prof. Tina Jukić", "Faculty of Public Administration, University of Ljubljana, Slovenia"],
                            ["Prof. Carmen Rotuna", "Researcher, Romania"],
                            ["Prof. Konstantinos Tarabanis", "University of Macedonia, Greece"],
                            ["Prof. Prayag Tiwari", "Computer Science, Sweden"],
                            ["Prof. Oscar Pastor", "Center for Software Production Methods, Universitat Politècnica de València, Spain"],
                            ["Prof. Gerhard Schwabe", "Information Management Research Group, University of Zurich, Switzerland"],
                            ["Prof. Dursun Zafer Şeker", "Faculty of Informatics, Istanbul Technical University, Turkey"],
                            ["Prof. Ladjel Bellatreche", "LIAS Laboratory, University of Poitiers / ENSMA, France"],
                            ["Prof. Meelis Kull", "Machine Learning Group, University of Tartu, Estonia"],
                            ["Prof. Hans Vangheluwe", "Modeling and Simulation, University of Antwerp, Belgium"],
                            ["Dr. Elli Valla", "Tallinn University of Technology, Estonia"],
                            ["Dr. Anastasija Nikiforova", "University of Tartu, Estonia"],
                            ["Dr. Innar Liiv", "Tallinn University of Technology, Estonia"],
                            ["Prof. Iztok Fister", "Computer Science, University of Maribor, Slovenia"],
                            ["Prof. Nitesh Bharosa", "Faculty of Technology, Policy and Management, Delft University of Technology, Netherlands"],
                            ["Marijn Janssen", "ICT and Governance, Delft University of Technology, Netherlands"],
                            ["Prof. Sonia Ayachi Ghannouchi", "Researcher, Tunisia"],
                            ["Emna Ammar El Hadj Amor", "Researcher, Tunisia"],
                            ["Prof. Christof Lutteroth", "Department of Computer Science, University of Bath, United Kingdom"],
                            ["Prof. Anna De Liddo", "Knowledge Media Institute, The Open University, United Kingdom"],
                            ["Prof. Keegan McBride", "Digital Governance, University of Oxford, United Kingdom"],
                            ["Prof. Alan Sexton", "School of Computer Science, University of Birmingham, United Kingdom"],
                            ["Prof. Vimal Dwivedi", "Researcher, United Kingdom"],
                            ["Prof. Attique Shah", "School of Computing, Birmingham City University, United Kingdom"],
                            ["Prof. Adel Aneiba", "School of Computing, Birmingham City University, United Kingdom"],
                            ["Prof. Simon Price", "School of Computer Science, University of Bristol, United Kingdom"],
                            ["Prof. Ilkay Altintas", "San Diego Supercomputer Center, University of California San Diego, USA"],
                            ["Prof. Il-Yeol Song", "College of Computing and Informatics, Drexel University, USA"],
                            ["Prof. Divesh Srivastava", "AT&T Labs Research, USA"],
                            ["Prof. Nicholas Bucciarelli", "Cornell University, USA"],
                            ["Dr. Tushar Jaware", "Dean (Research and Development) and Associate Professor, Electronics and Communication Engineering, R. C. Patel Institute of Technology, Shirpur, India"],
                            ["Dr. Manohar Naik S.", "Assistant Professor, Department of Computer Science, Central University of Kerala, India"],
                            ["Meetu Malhotra", "Doctoral Student and Research Assistant, Harrisburg University of Science and Technology, USA"],
                            ["Dr. Sumit Kumar", "Associate Professor and Head, Department of Information Technology, Rajan Mamta Degree College, Aurangabad, Bihar, India"],
                            ["Ms. Vimal Gaur", "Associate Professor, Department of Computer Science and Engineering, Maharaja Surajmal Institute of Technology, Delhi, India"],
                            ["Dr. Chaitali Bhowmik", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Soumi Dutta", "Associate Professor, Sister Nivedita University, West Bengal, India"],
                            ["Prachi Goel", "Assistant Professor, Department of Computer Science and Engineering, Dr. Akhilesh Das Gupta Institute of Professional Studies, Delhi, India"],
                            ["Tanvi Rustagi", "Assistant Professor, Department of Computer Science, World College of Technology and Management, Gurugram, India"],
                            ["Dr. Chaitali Koley", "Assistant Professor, Electronics and Communication Engineering, National Institute of Technology Mizoram, India"],
                            ["Dr. Deepika Bhatia", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Ms. Esha Saxena", "Assistant Professor, Jamia Hamdard University, New Delhi, India"],
                            ["Dr. Monika Bansal", "Associate Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Sanjay Nalbalwar", "Professor and Head, Department of Electronics and Telecommunication Engineering, Dr. Babasaheb Ambedkar Technological University, Lonere, India"],
                            ["Dr. Biswa Sahoo", "Associate Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Yatu Rani", "Assistant Professor, Bhagwan Mahavir Institute of Engineering and Technology, Sonepat, India"],
                            ["Ms. Mini Agarwal", "Assistant Professor, Department of Computer Science and Engineering, Maharaja Agrasen Institute of Technology, New Delhi, India"],
                            ["Vaishali", "Assistant Professor, Manav Rachna International Institute of Research and Studies, Faridabad, India"],
                            ["Dr. Sivabalan Settu", "Assistant Professor, Vignan Foundation for Science, Technology and Research (Vignan University), Guntur, India"],
                            ["Dr. Mohammed Wasid", "Assistant Professor, School of Computer Science and Engineering, Bennett University, India"],
                            ["Ms. Prerna Ajmani", "Assistant Professor, Department of Information Technology, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Ashish Kumar", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Sitender", "Assistant Professor, Department of Information Technology, Maharaja Surajmal Institute of Technology, Delhi, India"],
                            ["Ms. Gunjan Beniwal", "Assistant Professor, Maharaja Surajmal Institute of Technology, Delhi, India"],
                            ["Dr. Gunjan Verma", "Assistant Professor, School of Computer Applications, Manav Rachna International Institute of Research and Studies, Faridabad, India"],
                            ["Dr. Nivedita Palia", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Sandhya Tarwani", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Ms. Nishi Jain", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Adeel Hashmi", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Pooja Kherwa", "Assistant Professor, Department of Computer Science, Maharaja Surajmal Institute of Technology, Delhi, India"],
                            ["Dr. Moolchand Sharma", "Assistant Professor, Department of Computer Science and Engineering, Maharaja Agrasen Institute of Technology, Delhi, India"],
                            ["Dr. Sandeep Kumar", "Senior Scientist, Wireless Communication, Central Research Laboratory, Bharat Electronics Limited, India"],
                            ["Dr. Shakti Kundu", "Associate Professor, Department of Computer Science, BML Munjal University, Haryana, India"],
                            ["Dr. Vikash Yadav", "Lecturer, Computer Science and Engineering, Government Polytechnic Bighapur Unnao, Uttar Pradesh, India"],
                            ["Dr. Mazin Abed Mohammed", "Associate Professor, Information Systems Department, University of Anbar, Iraq"],
                            ["Dr. Sujatha Kesavan", "Dean, Dr. MGR Educational and Research Institute, Tamil Nadu, India"],
                            ["Sujatha R.", "Associate Professor, Department of Software and Systems Engineering, Vellore Institute of Technology, Vellore, India"],
                            ["Dr. Srilatha Chebrolu", "Assistant Professor, Department of Computer Science, National Institute of Technology Andhra Pradesh, India"],
                            ["Ms. Neha Sharma", "Assistant Professor, Department of Computer Science, Bharati Vidyapeeth’s College of Engineering, Delhi, India"],
                            ["Dr. Aws Yonis", "Assistant Professor, Wireless Communication Engineering, Ninevah University, Mosul, Iraq"],
                            ["Dr. Parul Chaudhary", "Assistant Professor, Department of Computer Science and Engineering, Maharaja Surajmal Institute of Technology, Delhi, India"],
                            ["Dr. Mohd Izhar", "Department of Computer Science and Engineering, Dr. Akhilesh Das Gupta Institute of Professional Studies, Delhi, India"],
                            ["Dr. Vani Kapoor", "Assistant Professor, Department of Information Technology, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Milind Shah", "Professor and Dean (Academics), Fr. C. Rodrigues Institute of Technology, Maharashtra, India"],
                            ["Nikhil Marriwala", "Assistant Professor, Department of Electronics and Communication Engineering, Kurukshetra University, Kurukshetra, India"],
                            ["Dr. Rajeev Kumar", "Assistant Professor, Department of Computer Science and Engineering, National Institute of Technology Hamirpur, India"],
                            ["Apurva Jain", "Dr. Akhilesh Das Gupta Institute of Professional Studies, Delhi, India"],
                            ["Ms. Divya Jatain", "Assistant Professor, Department of Computer Science and Engineering, Maharaja Surajmal Institute of Technology, Delhi, India"],
                            ["Dr. Bhawna Suri", "Associate Professor, Department of Computer Science and Engineering, Bhagwan Parshuram Institute of Technology, Delhi, India"],
                            ["Ms. Shikha Jain", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Usha Dhankar", "Assistant Professor, Department of Electronics and Communication Engineering, HMR Institute of Technology and Management, New Delhi, India"],
                            ["Dr. Ajay Dureja", "Assistant Professor, Department of Computer Science and Engineering, Bharati Vidyapeeth’s College of Engineering, Delhi, India"],
                            ["Mr. Amrit Chhetri", "Digital Forensic Researcher, My Cyber Hubs, India"],
                            ["Dr. Naresh Kumar", "Associate Professor, Department of Computer Science and Engineering, Maharaja Surajmal Institute of Technology, Delhi, India"],
                            ["Dr. Riya Sapra", "Associate Professor, Department of Computer Science and Engineering, Amity University Haryana, India"],
                            ["Dr. Amrita Rai", "Professor, Department of Electronics and Communication Engineering, Lloyd Institute of Engineering and Technology, Greater Noida, India"],
                            ["Dr. Atul Garg", "Professor and Associate Director (IQAC), Institute of Engineering and Technology, Chitkara University, Punjab, India"],
                            ["Dr. Deepika Kumar", "Associate Professor and Head, Department of Computer Science and Engineering, Bharati Vidyapeeth College of Engineering, Delhi, India"],
                            ["Dr. Soumi Ghosh", "Assistant Professor, Department of Information Technology, Maharaja Agrasen Institute of Technology, Delhi, India"],
                            ["Dr. Munishwar Rai", "Associate Professor, Department of Computer Science and Engineering, MMICT & BM, India"],
                            ["Dr. Sandeep Mathur", "Professor and Head, Amity University, Noida, India"],
                            ["Ms. Vidushi", "Assistant Professor, Department of Computer Science, Vivekananda Institute of Professional Studies – Technical Campus, Delhi, India"],
                            ["Dr. Abhinav Juneja", "Professor and Head, Department of Computer Science and Information Technology, KIET Group of Institutions, Delhi NCR, India"],
                            ["Dr. J. Deny", "Associate Professor, Department of Electronics and Communication Engineering, Kalasalingam Academy of Research and Education, India"],
                            ["Dr. Meghna Sharma", "Associate Professor, Department of Computer Science and Engineering, The NorthCap University, Gurugram, India"],
                            ["Dr. Narendra Rathore", "Professor, Acropolis Institute of Technology and Research, Madhya Pradesh, India"],
                            ["Dr. Prashant Kumar", "Assistant Professor, Department of Electronics and Communication Engineering, National Institute of Technology Jamshedpur, India"],
                            ["Dr. Pushpendra Singh", "Associate Professor, Department of Electrical Engineering, JK Lakshmipat University, Jaipur, India"],
                            ["Sarita Gulia", "Assistant Professor, Amity University Gurgaon, India"],
                            ["Dr. Anitha Kumari", "Associate Professor, Department of Information Technology, PSG College of Technology, Coimbatore, India"],
                            ["Dr. Rajiv Chopra", "Associate Professor, Department of Computer Science and Engineering, Guru Tegh Bahadur Institute of Technology, Delhi, India"],
                            ["Dr. Martin Sagayam Kulandairaj", "Assistant Professor, Department of Electronics and Communication Engineering, Karunya Institute of Technology and Sciences, Coimbatore, India"],
                            ["Dr. A. Pramod Kumar", "CMR Engineering College, Hyderabad, India"],
                            ["Ms. Pratibha Dumane", "Assistant Professor, Department of Electronics and Telecommunications Engineering, Don Bosco Institute of Technology, Mumbai, India"],
                            ["Dr. Shashikant Patil", "Professor, Atlas SkillTech University, Mumbai, India"],
                            ["Dr. Srinivasa Ramanujam Kannan", "Associate Professor, School of Mechanical Sciences, Indian Institute of Technology Bhubaneswar, India"],
                            ["Dr. Sunil Karamchandani", "Associate Professor, Electronics and Telecommunication Engineering, Dwarkadas J. Sanghvi College of Engineering, University of Mumbai, India"],
                            ["Dr. Puneet Singh Lamba", "Assistant Professor, Department of Computer Science and Engineering, University of Delhi, India"],
                            ["Dr. Vishal Satpute", "Assistant Professor, Department of Electronics and Communication Engineering, Visvesvaraya National Institute of Technology, Nagpur, India"],
                            ["Prof. Afaq Ahmad", "Department of Electrical and Computer Engineering, Sultan Qaboos University, Muscat, Oman"],
                            ["Dr. Min-Shiang Hwang", "Department of Computer Science and Information Engineering, Asia University, Taiwan"],
                            ["Dr. Noor Elaiza Abdul Khalid", "Associate Professor, Universiti Teknologi MARA, Malaysia"],
                            ["Prof. Qin Xin", "Faculty of Science and Technology, University of the Faroe Islands, Denmark"],
                            ["Prof. Rajni Jindal", "Professor, Department of Computer Science and Engineering, Delhi Technological University, India"],
                            ["Prof. D. K. Tayal", "Professor and Dean (Academic Affairs), Indira Gandhi Delhi Technical University for Women, India"],
                            ["Prof. Kapil Sharma", "Professor, Department of Information Technology, Delhi Technological University, India"],
                            ["Dr. Amita Jain", "Assistant Professor, Department of Computer Science and Engineering, Ambedkar Institute of Advanced Communication Technologies and Research, Government of NCT Delhi, India"],
                            ["Dr. Prashant Giridhar Shambharkar", "Assistant Professor, Department of Computer Science and Engineering, Delhi Technological University, India"],
                            ["Dr. Vijay Bhardwaj", "Associate Professor, Guru Kashi University, Bathinda, India"],
                            ["Dr. Vinita Jain", "Professor and Head, Department of Information Technology, Bharati Vidyapeeth’s College of Engineering, India"],
                            ["Dr. Manju Khari", "Assistant Professor, Department of Computer Science and Engineering, Ambedkar Institute of Advanced Communication Technologies and Research, Government of NCT Delhi, India"],
                            ["Dr. Manju Papreja", "Principal, GVM Institute of Technology and Management, Sonipat, India"],
                            ["Dr. Nisheeth Joshi", "Associate Professor, Department of Computer Science, Banasthali Vidyapith, Rajasthan, India"],
                            ["Dr. S. B. Goyal", "Director, Faculty of Information Technology, City University Malaysia, Malaysia"],
                            ["Dr. Amol C. Adamuthe", "Assistant Professor and Head, Department of Information Technology, Rajarambapu Institute of Technology, Rajaramnagar, Maharashtra, India"],
                            ["Dr. Binod Kumar", "JSPM’s Rajarshi Shahu College of Engineering, Pune, India"],
                            ["Ms. Preeti Verma", "Research Scholar, Jiwaji University, Gwalior, India"],
                            ["Prof. Subarna Shakya", "Professor, Department of Electronics and Computer Engineering, Institute of Engineering, Tribhuvan University, Nepal"],
                            ["Dr. B. K. Verma", "Professor, Chandigarh Engineering College, Landran, India"],
                            ["Dr. T. V. Rajnini Kanth", "Professor and Dean (R&D), Department of Computer Science and Engineering, Sreenidhi Institute of Science and Technology, India"],
                            ["Ms. Nikita Jain", "Assistant Professor, Department of Computer Science, Bharati Vidyapeeth’s College of Engineering, Delhi, India"],
                            ["Ms. Kanak Meena", "Department of Computer Science, Indira Gandhi Delhi Technical University for Women, India"]
                        ]
                            .map(([name, affiliation], idx) => (
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
        </div>
    );
}
