import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaTwitter, FaGithub, FaMailchimp } from 'react-icons/fa'
import Santiago from '../assets/Santiago.jpg'
export const Main = () => {



    return (
        <section id="main" className="flex flex-col md:flex-row my-auto items-center">
            <div className="md:w-1/2 flex flex-col order-2 md:order-1 items-center md:items-start">
                <div className="bg-purple-600 w-fit px-4 py-2 rounded-t-full rounded-r-full text-white font-bold">
                    {/* <TypeAnimation
                        sequence={[
                            "Hi, I'm", // Types 'One'
                            1000, // Waits 1s
                            '',
                            1000
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                    /> */}
                    Hi, I'm
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mt-5 text-gray-700">
                    Santiago Aristizábal
                </h1>
                <h2 className="text-xl md:text-2xl font-normal">
                    <TypeAnimation
                        sequence={[
                            'Web Frontend developer', // Types 'One'
                            1000, // Waits 1s
                            "React Developer", // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'Next Developer', // Types 'Three' without deleting 'Two'
                            3000, // Waits 2s
                            'Adobe Experience Manager Developer', // Types 'Three' without deleting 'Two'

                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                    />
                </h2>
                <div className="mt-6 flex gap-2">
                    <a href="https://www.linkedin.com/in/santiago-aristizabal-3ab8531b5/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                        className='p-2 rounded-full bg-violet-600 cursor-pointer hover:scale-110'
                    >
                        <FaLinkedinIn color='white' size={20} />
                    </a>
                    <a href="https://github.com/ransilad" target="_blank" rel="noreferrer" aria-label="Github"
                        className='p-2 rounded-full bg-violet-600 cursor-pointer hover:scale-110'
                    >
                        <FaTwitter color='white' size={20} />
                    </a>
                    <a href="https://twitter.com/ransilad" target="_blank" rel="noreferrer" aria-label="Twitter"
                        className='p-2 rounded-full bg-violet-600 cursor-pointer hover:scale-110'
                    >
                        <FaGithub color='white' size={20} />
                    </a>
                    <a href="mailto:abeld.rangels@gmail.com" target="_blank" rel="noreferrer"
                        className='p-2 rounded-full bg-violet-600 cursor-pointer hover:scale-110'
                    >
                        <FaMailchimp color='white' size={20} />
                    </a>
                </div>
            </div>
            <div className="w-[60%] md:w-1/3 mx-auto order-1 md:order-2 my-16 md:my-0">
                <img className="rounded-full border-neutral-200 border-[20px]" src={Santiago} alt="Abel Rangel" />
            </div>
        </section>
    )
}
