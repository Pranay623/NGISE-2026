
import ConferenceTracks from "../ConferenceTracks/ConferenceTracks";
import OnPaperCall from "./OnPaperCall";
import InnovativeTopics from "./InnovativeTopics";
import Onpaper from "./Onpaper";
import ImpDates from "../ImpDates";
import PageHeader from "../PageHeader";

const CallForPapers = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <OnPaperCall />
            <InnovativeTopics />
            <ImpDates />
            {/* <ConferenceTracks /> */}
            <Onpaper />
        </div>
    );
};

export default CallForPapers;
