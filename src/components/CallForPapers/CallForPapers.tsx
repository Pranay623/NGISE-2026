import OnPaperCall from "./OnPaperCall";
import InnovativeTopics from "./InnovativeTopics";
import Onpaper from "./Onpaper";
import Publication from "./Publication";
import ImpDates from "../ImpDates";


const CallForPapers = () => {
    return (
        <div className="bg-white min-h-screen">
            <OnPaperCall />
            <InnovativeTopics />
            <Publication />
            <ImpDates />
            {/* <ConferenceTracks /> */}
            <Onpaper />
        </div>
    );
};

export default CallForPapers;
