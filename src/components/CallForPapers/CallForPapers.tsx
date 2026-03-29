import OnPaperCall from "./OnPaperCall";
import InnovativeTopics from "./InnovativeTopics";
import Onpaper from "./Onpaper";
import ImpDates from "../ImpDates";


const CallForPapers = () => {
    return (
        <div className="bg-white min-h-screen">
            <OnPaperCall />
            <InnovativeTopics />
            <ImpDates />
            {/* <ConferenceTracks /> */}
            <Onpaper />
        </div>
    );
};

export default CallForPapers;
