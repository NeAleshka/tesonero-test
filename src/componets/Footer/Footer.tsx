import Feedback from "./Feedback";
import Answers from "./Answers";
import {useDeviceSize} from "../../hooks";

const Footer = () => {
    const width=useDeviceSize()
    return (
        <div className={`flex max-w-[1920px] mx-auto ${width<600 && 'flex-col'}`}>
            <Feedback/>
            <Answers/>
        </div>
    );
};

export default Footer;
