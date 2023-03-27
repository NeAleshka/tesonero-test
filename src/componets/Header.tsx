import logo from '../assets/logo.svg'
import {useState} from "react";
import {useDeviceSize} from "../hooks";


const Header = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);
    const width = useDeviceSize()

    return (
        <nav className={`flex pt-[30px] pb-[40px] justify-${width<770?'center':'between' }`}>
            <div
                className={`flex ${width < 810 ? 'pl-[10px]' : 'pl-[80px]'}  items-center justify-between ${width < 1200 ? 'space-x-5' : 'space-x-28'} flex-shrink-0`}>
                <img src={logo} alt={'logo'} className={'cursor-pointer'}/>
                {
                    width > 770 && <>
                        <button
                            className={`h-fit text-[#A6ABBD] px-[24px] py-[4px] ${activeButton === 1 ? 'activeNav' : ''} hover:hoverItem`}
                            onClick={() => setActiveButton(1)}>Item 1
                        </button>
                        <button
                            className={`h-fit text-[#A6ABBD] px-[24px] py-[4px] ${activeButton === 2 ? 'activeNav' : ''} hover:hoverItem`}
                            onClick={() => setActiveButton(2)}>Item 2
                        </button>
                        <button
                            className={`h-fit text-[#A6ABBD] px-[24px] py-[4px] ${activeButton === 3 ? 'activeNav' : ''} hover:hoverItem`}
                            onClick={() => setActiveButton(3)}>Item 3
                        </button>
                    </>
                }

            </div>
            {
                width > 770 && <div className={'flex pr-[80px] items-center'}>
                    <button
                        className={`h-fit text-[#A6ABBD] px-[24px] py-[4px] ${activeButton === 4 ? 'activeNav' : ''} hover:hoverItem`}
                        onClick={() => setActiveButton(4)}>Button
                    </button>
                </div>
            }

        </nav>
    );
};

export default Header;
