import Line from "../Line";
import {Accordion, AccordionDetails, AccordionSummary, createTheme, ThemeProvider} from "@mui/material";
import Arrow from '../../assets/questions/Vector.svg'
import React, {useState} from "react";
import first from '../../assets/questions/1.svg'
import second from '../../assets/questions/2.svg'
import third from '../../assets/questions/3.svg'
import fourth from '../../assets/questions/4.svg'
import fifth from '../../assets/questions/5.svg'
import {useDeviceSize} from "../../hooks";


interface IQuestionProps {
    image?: string
    question?: string
    answer?: string
    index: number
    isActive: boolean
    setActive: (index: number | null) => void
    activeQuestion: number | null
}


const Answers = () => {
    const imageArray: string[] = [first, second, third, fourth, fifth]
    const [activeQuestion, setActiveQuestionQuestion] = useState<number | null>(null);
    const width = useDeviceSize()

    return (
        <div className={`pt-[100px] flex ${width > 600 && 'w-1/2'} items-center flex-col bg-[#F8FBFF] px-[20px]`}>
            <Line/>
            <div className={`
            text-center mt-[12px] mb-[25px] ${width < 600 ? 'w-[100vw]' : ' max-w-[640px]'}  font-bold text-[40px] leading-[47px] text-[#2E3A59] mb-[50px]`}>
                Lorem ipsum, dolor sit adipisicing elit.
                <div className={'text-[16px] font-medium'}>
                    Porro ab rerum omnis magnam eligendi error nobis dolore?
                </div>
            </div>
            <div>
                {
                    imageArray.map((item, index) => <Question key={index} image={item} index={index}
                                                              isActive={index === activeQuestion}
                                                              setActive={setActiveQuestionQuestion}
                                                              activeQuestion={activeQuestion}/>)
                }
            </div>
        </div>
    );
};

export default Answers;

const ArrowIcon = () => {
    return (
        <img src={Arrow} alt={'Arrow'}/>
    )
}

const Question = ({question, image, answer, index, setActive, isActive, activeQuestion}: IQuestionProps) => {
    const isMobile = useDeviceSize() < 600
    const [expanded, setExpanded] = useState(false);
    const toggleActive = (index: number) => {
        if (activeQuestion === index) {
            setActive(null)
        } else {
            setActive(index)
            setExpanded(!expanded)
        }

    }

    const theme = createTheme({
        components: {
            MuiAccordionSummary: {
                styleOverrides: {
                    content: {
                        marginBottom: '0px',
                        alignItems: 'center',
                    },
                    root: {
                        paddingLeft: '0px',
                        paddingRight: '0px',
                    }
                },
            },
            MuiAccordionDetails: {
                styleOverrides: {
                    root: {
                        padding: isMobile ? '0px' : '8px 16px 16px',
                    }
                }
            }
        },
    });
    return (
        <Accordion style={{
            backgroundColor: 'initial',
            boxShadow: 'none',
            borderBottom: '1px solid #E7EBF0',
            paddingBottom: '16px',
            maxWidth: '704px',
        }} onChange={() => toggleActive(index)}
                   disableGutters={true}
                   expanded={isActive}
        >
            <ThemeProvider theme={theme}>
                <AccordionSummary
                    expandIcon={<ArrowIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    {
                        !isMobile && <img src={image ? image : first} alt={'first'} className={'mr-[24px]'}/>
                    }

                    <div className={`text-[24px]  ${isActive ? 'text-[#00C368]' : 'text-[#2E3A59]'} font-bold`}>
                        {question ? question : ' Lorem ipsum, dolor sit amet adipisicing elit.'}
                    </div>
                </AccordionSummary>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <AccordionDetails>
                    <div className={`${!isMobile && 'px-[50px]'}  text-[16px]`}>
                        {answer ? answer : 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit' +
                            ' exercitationem laborum cupiditate magnam eaque quae delenit'}
                    </div>
                </AccordionDetails>
            </ThemeProvider>

        </Accordion>
    )
}