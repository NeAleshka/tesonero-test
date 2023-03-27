import quotes from "../../assets/quotes.svg";
import Line from "../Line";
import avatar from "../../assets/user.svg";
import {useDeviceSize} from "../../hooks";

interface IUserFeedback {
    isMain:boolean
    avatar:string
    text:string
    userName:string
    revert?:boolean
}

const Feedback = () => {
    const width=useDeviceSize()
    return (
        <div className={`py-[100px] flex ${width> 600 ? 'w-1/2':'px-[16px]' } items-center flex-col bg-[#F5F5F5]`}>
            <Line/>
            <div className={'mt-[20px] font-bold text-[40px] leading-[47px] text-[#2E3A59] text-center mb-[50px]'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <UserFeedback isMain={true} avatar={avatar} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur' + ' animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi' +
                ' expedita, provident excepturi officia!' +
                ' Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?'} userName={'Jane Doe'}/>
            <div className={`flex ${width<600 && 'flex-col-reverse'}`}>
                <UserFeedback isMain={false} revert={true} avatar={avatar} text={'Lorem ipsum, dolor sit amet consectetur' +
                    ' adipisicing elit.' +
                    ' Laboriosam quas, aut consectetur' + ' animi  autem aliquid'} userName={'Jane Doe'}/>
                <UserFeedback isMain={false} avatar={avatar} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' +
                    ' Laboriosam quas, aut consectetur' + ' animi  autem aliquid'} userName={'Jane Doe'}/>
            </div>

        </div>
    );
};

export default Feedback;


const UserFeedback = ({userName,text,avatar,isMain,revert}:IUserFeedback) => {
    const isMobile=useDeviceSize()<600
    return(
        <div className={`flex ${isMain && isMobile && 'flex-col items-center bg-white rounded-[32px] shadow-mobileFeedback' +
        ' relative'} text-[#2E3A59] ${isMain && !isMobile ? 'mb-[134px]':'mb-[35px]'} ${revert && 'flex-row-reverse'}`}>
            <img src={avatar} alt={userName} className={`mr-[10px] ${isMain && !isMobile?'w-[181px] h-[181px]':'h-[91px]' +
                ' w-[91px]'}`}/>
            <div>
                <div className={`text-[16px] leading-[24px] ${isMain? 'max-w-[560px]':'max-w-[240px]'} flex items-start`}>
                    {isMain &&  <img src={quotes} alt={'quotes'} className={`mr-[17px] ${isMobile && 'absolute top-[24px]' +
                    ' left-[16px]'}`}/>}
                    <div className={`${isMain && isMobile && 'text-center px-[16px]'}`}>
                        {text}
                    </div>

                </div>
                <div className={`flex justify-between items-end`}>
                    <div className={`font-bold mt-[15px] ${( isMain && !isMobile) ? 'pl-[57px]':!isMain ?'pl-[0px]': 'mx-auto'}`}>{userName}</div>
                    {isMain &&  <img src={quotes} alt={'quotes'}  className={`-rotate-180 mr-2 ${isMobile && 'absolute' +
                    ' top-[24px]' +
                    ' right-[16px]'}`}/>}
                </div>
            </div>
        </div>
    )
}