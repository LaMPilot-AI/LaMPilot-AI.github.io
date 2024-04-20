import './About.scss'
import Heading from '../../components/Headings/Heading'

const About = () => {

    document.title = 'LaMPilot AI | About';

    return (
        <div className='pt-16 min-h-screen'>
            <Heading heading="About"></Heading>
            <div className="paragraph-body">
                <p data-aos="fade-up">
                    <span>LaMPilot AI</span> is a pioneering startup at the forefront of revolutionizing the in-cabin
                    experience of autonomous vehicles through advanced AI technologies. We are addressing the critical
                    need for more intuitive, personalized, and intelligent human-vehicle interactions as vehicles become
                    increasingly automated. LaMPilot AI's cutting-edge solution leverages the latest advancements in
                    large language models (LLMs) and generative AI to create a highly sophisticated intelligent voice
                    assistant for autonomous vehicles.
                </p>
                <p data-aos="fade-up">
                    Our unique approach integrates LLMs with the vehicle's existing APIs, enabling seamless control over
                    various in-cabin functions such as air conditioning, seat and mirror adjustment, navigation, and
                    Level 2 (L2) features like Adaptive Cruise Control (ACC) and Lane Keeping Assist (LKA). By
                    harnessing the power of natural language processing and understanding, LaMPilot AI's voice assistant
                    serves as a smart agent, helping drivers complete daily tasks through intuitive voice commands and
                    conversations.
                </p>
                <p data-aos="fade-up">
                    LaMPilot AI's proprietary technology has the potential to redefine the future of transportation and
                    the way people interact with their vehicles. By offering a highly personalized and intelligent
                    in-cabin experience, we aim to enhance user comfort, convenience, and safety. Our commitment to
                    innovation and our dedication to pushing the boundaries of AI-powered human-vehicle interaction
                    position us at the forefront of the automotive industry's transformation.
                </p>
                <div className="m-2 basis-[40%] sm:px-5 py-2 px-2 overflow-hidden rounded-xl lg:mt-0 md:mt-0 mt-5">
                    <img data-aos="fade-up" src="./images/lampilot.png" alt="lampilot_ai_demo"/>
                </div>
            </div>
        </div>
    );
}

export default About
