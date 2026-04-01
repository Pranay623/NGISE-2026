import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const statutesData = [
  {
    title: "Honorary Chair",
    content: "Senior Scholar in information systems research; outstanding personality widely known to represent scientific integrity, world openness, and support of the scientific youth. Long-term (multi-year) role. Member of the NGISE Steering Committee."
  },
  {
    title: "NGISE Founders",
    content: "Prof. Dr. Dirk Draheim; Prof. Dr. Rahul Sharma"
  },
  {
    title: "General Chairs",
    content: "(currently: NGISE founders). Responsible for: final decision on the long-term strategy of NGISE; final decision on Conference Venues, Conference Chairs, PC Co-Chairs. Long-term (multi-year) role. Reporting to the NGISE Steering Committee."
  },
  {
    title: "Conference Chairs",
    content: "annual role; typically (but not necessarily) affiliated with the conference venue; Responsible for: overseeing an edition of NGISE in a specific year in all regards, both scientifically and administratively. Conference chairs can delegate administrative responsibility to Local Organizing Chairs. Conference chairs typically (but not necessarily) belong to the group of PC Co-Chairs."
  },
  {
    title: "Local Organizing Chairs (optional role)",
    content: "annual role; affiliated with the conference venue; Responsible for: administratively overseeing an edition of NGISE in a specific year."
  },
  {
    title: "Conference Venue",
    content: "host of NGISE in a specific year. The conference venue is always a University (or equivalent, research-heavy institution of tertiary education). The concrete event location of NGISE can be different (or partially different) from the conference venue, i.e., the conference venue could decide to have NGISE in a conference hotel. However, as a rule, NGISE strongly prefers to have the premises of the conference venue as the event location, in service of academic visibility and collaboration. NGISE is an international conference. NGISE travels. The target is to have NGISE in a different place each year, returning to Ajay Kumar Garg Engineering College every fifth year."
  },
  {
    title: "Advisory Committee Members",
    content: "Long-term (multi-year) role; leaders in the research community; leaders of established research institutions; leaders of innovative IT companies; Role: Members of the NGISE steering committee."
  },
  {
    title: "Steering Committee",
    content: "The steering committee consists of: the NGISE Honorary Chair, the NGISE General Chair, the members of the NGISE Advisory Committee. The steering committee determines the long-term strategy of NGISE. It surveilles the quality and integrity of the conference. It helps identifying and supports Conference Venues, Conference Chairs and PC Co-Chairs."
  },
  {
    title: "Programme Committee Co-Chairs (PC Co-Chairs)",
    content: "annual role; the group of PC-Co Chairs should change annually (although some overlaps and repeated involvements are acceptable); PC Co-Chairs are, at the same time, the Editors of the Conference Proceedings; the PC Co-Chairs organize and oversee the NGISE review process. The PC Co-Chairs screen the submitted papers and identify papers that should be desk rejected if they suffer obvious major flaws in regards of, e.g., contribution, length, form, plagiarism etc. The PC Co-Chairs assign papers to PC members for review. The PC Co-Chairs jointly select (in consensus) the accepted papers for the conference proceedings, on the basis of the reviews provided by the NGISE Programme Committee members."
  },
  {
    title: "Editors of the Conference Proceedings",
    content: "see: NGISE Programme Committee Co-Chairs."
  },
  {
    title: "Programme Committee Members (PC Members)",
    content: "annual, but consecutive role, i.e., PC members acquired in a year are expected to join the PC for an indefinite time until they ask to be removed from the PC. The PC shall contain a significant number of R3/R4-level (EU Classification System) researchers. PC members provide the reviews, which are the basis for paper acceptance by the PC Co-Chairs. NGISE reviews are \"semi-delegable\": a PC member can invite sub reviewers (which need to be declared to the PC) to an assigned paper, but needs to provide an own review to the assigned papers also in case of inviting sub reviewers."
  },
  {
    title: "Double-Blind Review Process",
    content: "the NGISE review process is double-blind."
  },
  {
    title: "Acceptance Rate",
    content: "The target acceptance rate is 20% (or less). Never, the acceptance rate shall be larger than 30%."
  },
  {
    title: "Review",
    content: "A review consists of RELEVANCE TO CONFERENCE (3 Likert scale), NOVELTY / ORIGINALITY (5 Likert scale) , METHODOLOGY (5 Likert Scale), REPRODUCABILITY (5 Likert Scale), OVERALL EVALUATION (7 Likert Scale), DETAILED COMMENTS FOR AUTHORS, COMMENTS FOR PROGRAM COMMITTEE (CONFIDENTIAL). (Detailed reviewer guidelines will be elaborated in due course.)"
  },
  {
    title: "Paper Submission - Mutual Expectations",
    content: "Authors are invited to submit original, high-quality papers that have not been previously submitted or published elsewhere. The NGISE-2026 reviewing process is committed to deliver constructive feedback to authors, through rigorous double-blind peer reviews by field experts with extensive experience. Accepted papers are required to incorporate revisions based on referees' comments and suggestions in their Camera Ready submissions prior to inclusion in the conference proceedings."
  },
  {
    title: "NGISE Charter on Scientific Reproducibility",
    content: "Given the highly innovative nature of the conference, we take particular care of scientific reproducibility. We value papers that make available their code, models and data as open source in a public repository. We suggest authors to add a section “Code and Data Policy” to the paper, in which they summarize where their assets have been made available or otherwise provide a short explanation why certain assets are not made available (conflict-of-interest, IP-or licensing-related issues, statewise classification etc.)."
  },
  {
    title: "NGISE Plagiarism Policy",
    content: "Submitted papers must present original work by the authors, supported by adequate, proper, and scholarly citations to others' contributions. Our plagiarism policy enforces the highest standards of academic integrity, with all submissions required to be original and correctly cited. Any detected plagiarism will lead to rejection or corrective measures."
  },
  {
    title: "Plagiarism Scans",
    content: "All submitted papers will be made subject to a plagiarism scan. Results of the plagiarism scans are provided to the NGISE reviewers."
  },
  {
    title: "Sponsor",
    content: "to be defined."
  },
  {
    title: "Best Paper Award",
    content: "The NGISE Best Paper Award is granted to a research result that is particular innovative, surprising and convincing. The paper is selected by a committee consisting of the Honorary Chair, the General Chairs, the Programme Committee Co-Chairs, and the Keynote Speakers. The award comes with certificates for all co-authors, announcement at the conference dinner, and a token of appreciation. All authors of the awarded paper are invited to the conference dinner."
  },
  {
    title: "Student Best Paper Award",
    content: "The NGISE Student Best Paper Award is granted to a research result that is particular innovative, surprising and convincing. It is granted to young scholars who are currently working on their PhD. The awarded paper needs to have at least one PhD student as the first author. The paper is selected by a committee consisting of the Honorary Chair, the General Chairs, the Programme Committee Co-Chairs, and the Keynote Speakers. The award comes with certificates for all co-authors, announcement at the conference dinner, and a token of appreciation. All authors of the awarded paper are invited to the conference dinner."
  },
  {
    title: "Conference Dinner",
    content: "there is an NGISE conference dinner. The conference dinner is considered an important, academic part of the conference. The Best Paper Award and the Student Best Paper Award are announced during the conference dinner. The conference dinner is open to anyone not attending the conference (spouses, colleagues, NGISE friends etc)."
  }
];

export default function Statutes() {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="NGISE Statutes"
      />
      <div className="max-w-7xl mx-auto px-6 py-16 text-left">
        <div className="space-y-8">
          {statutesData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="border-l-4 border-blue-600 pl-6 py-2"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
