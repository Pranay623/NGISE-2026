import PageHeader from "@/components/PageHeader";

export default function TechnicalOrgannizers() {
    const members = [
        "Rozha Kamal Ahmed, Sulaimani Polytechnic University, Iraq",
        "Colin Atkinson, Software Engineering Group, University of Mannheim, Germany",
        "Dagmar Auer, University of Applied Sciences Upper Austria, Hagenberg, Austria",
        "Ladjel Bellatreche, University of Poitiers, France",
        "Sadok Ben Yahia, University of Southern Denmark, Denmark",
        "Edward Bernroider, WU Wien, Vienna Uiversity of Economics, Austria",
        "Markus Bertl (PC Chair), Vienna University of Economics, Austria",
        "Rakshya Bhattarai, Hanken School of Economics, Helsinki, Finland",
        "Ahto Buldas, Tallinn University of Technology, Estonia",
        "Sidra Azmat  Butt, Tallinn University of Technology, Estonia",
        "Tania Cerquitelli, Politecnico di Torino, Italy",
        "Vishal Chaudhary, Tallinn University of Technology, Estonia",
        "Tarek Clarke, Statistics Canada, Ottawa, Canada",
        "Tanmoy  Deb , Motherson Innovation, Noida, India",
        "Vipin Deval, KIET Group, Ghaziabad, India",
        "Gillian Dobbie, Computer Science, University of Auckland, New Zealand",
        "Dirk Draheim (PC Chair), Tallinn University of Technology, Estonia",
        "Vimal Dwivedi, University of Ulster , UK",
        "Lisa Ehrlinger, Hasso Plattner Institute, Potsdam, Germany",
        "Kevin Feichtinger, Karlsruhe Institute of Technology, Germany",
        "Michael Felderer, University of Cologne, Germany",
        "Iztok Fister, University of Maribor, Slovenia",
        "Teodoro Forcht-Dagi, Queen's University Belfast, UK",
        "Mike Friedrichsen, German University of Digital Science, Potsdam, Germany",
        "Anchal Garg, University of Greater Manchester, Bolton, UK",
        "Verena Geist, SCCH (Software Competence Center Hagenberg), Austria",
        "Sonia Ayachi Ghannouchi, Université de Sousse, Tunisia",
        "Shilpi Gupta, University of Mannheim, Germany",
        "Ruchi Gupta, Ajay Kumar Garg Engineering College, Ghaziabad, India",
        "Eric Jackson, Tallinn University of Technology, Estonia",
        "Marijn Jannsen, Technical University of Delft, the Netherlands",
        "Tina Jukic, University of Ljubljana, Slovenia",
        "Minakshi Kaushik (PC Chair), Karlsruhe Institute of Technology, Germany",
        "John Keers, University of Ulster, Belfast, Northern Ireland",
        "Ismail Khalil, Johannes Kepler University Linz, Austria",
        "Naho Kitano, Asukoe Partners, Tokio, Japan",
        "Gabriele Kotsis, Johannes Kepler University Linz, Austria",
        "Dieter Kranzlmüller, Ludwig Maximilian University, Munich, Germany",
        "Ajitesh Kumar, GLA University, Mathura, India",
        "Josef Küng, Johannes Kepler University Linz, Austria",
        "Atul  Kumar Srivastava, Amity University Tashkent, Uzbekistan",
        "Punam  Kumari, Amity University Bengaluru, India",
        "Arne Lange, Karlsruhe Institute of Technology, Germany",
        "Janika Leoste, Tallinn University of Technology, Estonia",
        "Innar Liiv, Tallinn University of Technology, Estonia",
        "Silvia Lips (PC Chair), Tallinn University of Technology, Estonia",
        "Christof Lutteroth, University of Bath, UK",
        "Olaf Maennel, University of Adeleide, Australia",
        "Rana Majumdar, Sister Nivedita University, Kolkata, India",
        "Anju Mishra, Ajay Kumar Garg Engineering College, Ghaziabad, India",
        "Ved Prakash Mishra, Amity University, Dubai, UAE",
        "Takehiko Nagumo, Kyoto University, Japan",
        "Felix Naumann, Hasso Plattner Institute, Potsdam, Germany",
        "Anastasija Nikiforova, University of Tartu, Estonia",
        "Alexander Norta, University of Pretoria , South Africa",
        "Monalisha  Ojha, University of Mannheim, Germany",
        "Riina Palu, Tallinn University of Technology, Estonia",
        "Ingrid Pappel, Tallinn University of Technology, Estonia",
        "Vishwajeet Pattanaik, Indian Institute of Science, Bengalore, India",
        "Sijo Arakkal Peious, Tallinn University of Technology, Estonia",
        "Gunnar Piho, Tallinn University of Technology, Estonia",
        "Mohammed Ragab, Birmingham City University, UK",
        "L. Arun Raj, BS Abdur Rahman Institute of Science & Technology, Tamil Nadu, India",
        "Deepak Rai, National Institute of Technology Jamshedpur, India",
        "Arun Kumar Sangaiah, National Yunlin University of Science and Technology, Taiwan",
        "Shelly Sachdeva, National Institute of Technology Delhi, India",
        "Manoj  Kumar Sain, Banasthali University, Jaipur, India",
        "Dolly Sharma, Shiv Nadar University, Greater Noida, India",
        "Attique Shah, City University of Birmingham, UK",
        "Rahul Sharma (PC Chair), Karlsruhe Institute of Technology, Germany",
        "Marcin Sikorski, Gdańsk University of Technology, Poland",
        "Anupama Sharma, Ajay Kumar Garg Engineering College, Ghaziabad, India",
        "Gaurav  Singal, Netaji Subhas University of Technology, India",
        "Akanksha  Singh, Benett University, Greater Noida, India",
        "Il-Yeol Song, Drexel University, Philadelphia, USA",
        "Divesh Srivastava, AT&T Labs Research, USA",
        "Kuldar Taveter, University of Tartu, Estonia",
        "A Min Tjoa, Technical University Vienna, Austria",
        "Ankit Vidyarthi, Jaypee Institute of Information Technology Noida, India",
        "Weixing Zang, Karlsruhe Institute of Technology, Germany",
        "Thomas Ziebermayer, University of Applied Sciences Upper Austria, Hagenberg, Austria",
        "Athanasios V. Vasilakos, University of Agder, Norway",
        "Shivani Agarwal, Ajay Kumar Garg Engineering College, Ghaziabad, India",
        "Mohamed Anis  Bach Tobji , University of Manouba, Tunisia",
        "Rim Jallouli, University of Manouba, Tunisia",
        "Raul Rojas, Freie Universität Berlin, Germany",
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader title="Programme Committee" />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto py-8 text-left">
                    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm p-6">
                        <ul className="flex flex-col">
                            {members.map((member, idx) => (
                                <li
                                    key={idx}
                                    className={"bg-white p-1"}
                                >
                                    <span className="text-gray-700 font-medium text-sm sm:text-base tracking-tight">
                                        {member}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
