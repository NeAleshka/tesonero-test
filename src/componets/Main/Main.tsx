import './Main.css'
import Line from "../Line";
import berry from '../../assets/berry.svg'
import '../../index.css'
import {ReactComponent as Thing} from '../../assets/thing.svg'
import {ReactComponent as Face} from '../../assets/face.svg'
import {ReactComponent as Box} from '../../assets/box.svg'
import {ReactComponent as Board} from '../../assets/board.svg'
import {FunctionComponent, LegacyRef, useRef} from "react";
import {useDeviceSize} from "../../hooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../index.css'
import './Main.css'

interface IItemProps {
    text: string,
    Icon: FunctionComponent<Partial<HTMLDivElement>>,
    widthText?: string
}


const Main = () => {
    const width = useDeviceSize()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <main className={'main_bg w-full relative h-fit pt-[75px] pb-[90px]'}>
            <div className={'text-center relative z-10'}>
                <Line/>
                <div className={'mt-[22px] mb-[70px] align-middle mx-auto font-bold text-[40px] text-[#2E3A59]'}>
                    {'Lorem ipsum, dolor sit amet consectetur'.toUpperCase()}
                </div>
                {
                    width < 600 ? <>
                        <Slider {...settings} arrows={true}>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Face}/>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Box}/>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Face}/>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Box}/>
                        </Slider>
                    </> : <>
                        <div className={'flex space-x-[110px] justify-center mb-[72px]'}>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Face}/>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Box}/>
                        </div>
                        <div className={'flex justify-center'}>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Board}/>
                            <img src={berry} alt={'berry'} className={'w-[436px] h-[230px]'}/>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Thing}/>
                        </div>
                        <div className={'flex space-x-[110px] justify-center mb-[72px]'}>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Face}/>
                            <Item text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit'} Icon={Box}
                                  widthText={'210px'}/>
                        </div>
                    </>
                }
            </div>
            <div className={'absolute left-0 bottom-0 bg-hero-pattern h-[400px] w-[400px] blur-[5px] bg-cover'}>
            </div>
            <div className={'absolute right-0 top-0 bg-right-pattern h-[400px] w-[400px] blur-[5px] bg-cover'}>
            </div>
        </main>
    );
};

export default Main;

const Item = ({Icon, text, widthText}: IItemProps) => {
    const width=useDeviceSize()
    return (
        <div className={`max-w-[200px] max-h-[151px] ${width<600 && 'mx-auto'}`}>
            <Icon className={'svg mx-auto'}/>
            <div className={`px-1 text-[16px] leading-[19px]`} style={{width: `${widthText}`}}>{text}</div>
        </div>
    )
}

