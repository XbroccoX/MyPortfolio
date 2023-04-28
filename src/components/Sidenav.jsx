import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

import '../styles/menu.css'
// import logo from '../assets/Brocco-removebg.png'
import logo from '../assets/Brocco-removebg-preview.png'

export const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
        console.log('state changed')
    }


    return (
        <div>
            <header className="my-5 flex items-center justify-between">
                <a href="#main" className="cursor-pointer hover:scale-110">
                    <img src={logo} alt="Logo of Brocco" className="w-32 h-6 object-cover" />
                </a>
                <div>

                </div>
                <AiOutlineMenu className="z-[99] md:hidden text-2xl font-bold" onClick={handleNav} />
                {
                    nav
                        ? (
                            <div className="menu fade-in opacity-100 visible translate-x-0 translate-y-0">
                                <nav className="fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20 opacity-80" >
                                    <a href="#main" className="fade-a relative text-white py-5 w-[75%] flex justify-center items-center" style={{ animationDelay: '0.2s' }}>
                                        <AiOutlineHome size={20} />
                                        <span className="pl-4">Home</span>
                                    </a>
                                    <a href="#work" className="fade-a relative text-white py-5 w-[75%] flex justify-center items-center" style={{ animationDelay: '0.3s' }}>
                                        <AiOutlineAppstore size={20} />
                                        <span className="pl-4">Work</span>
                                    </a>
                                    <a href="#projects" className="fade-a relative text-white py-5 w-[75%] flex justify-center items-center" style={{ animationDelay: '0.4s' }}>
                                        <AiOutlineProject size={20} />
                                        <span className="pl-4">Projects</span>
                                    </a>
                                    <a href="#main" className="fade-a relative text-white py-5 w-[75%] flex justify-center items-center" style={{ animationDelay: '0.5s' }}>
                                        <BsPerson size={20} />
                                        <span className="pl-4">Resume</span>
                                    </a>
                                    <a href="#contact" className="fade-a relative text-white py-5 w-[75%] flex justify-center items-center" style={{ animationDelay: '0.6s' }}>
                                        <AiOutlineMail size={20} />
                                        <span className="pl-4">Contact</span>
                                    </a>

                                </nav>
                            </div>
                        )
                        : (
                            <nav className="absolute top-0 bottom-0 right-0 justify-center items-center left-0 md:relative md:block bg-gray-900 md:bg-transparent bg-opacity-60 md:bg-opacity-0 backdrop-blur-md md:backdrop-blur-0 hidden">
                                <ul className="flex gap-6 font-semibold flex-col md:flex-row text-center md:text-start">
                                    <li className="border-b-2 border-transparent hover:border-primary text-white md:text-inherit text-2xl md:text-base">
                                        <a className=" text-gray-700" href="/#main">Home</a>
                                    </li>
                                    <li className="border-b-2 border-transparent hover:border-primary text-white md:text-inherit text-2xl md:text-base">
                                        <a className=" text-gray-700" href="/#work">Work</a>
                                    </li>
                                    <li className="border-b-2 border-transparent hover:border-primary text-white md:text-inherit text-2xl md:text-base">
                                        <a className=" text-gray-700" href="/#projects">Projects</a>
                                    </li>
                                    <li className="border-b-2 border-transparent hover:border-primary text-white md:text-inherit text-2xl md:text-base">
                                        <a className=" text-gray-700" href="/#main">Resume</a>
                                    </li>
                                    <li className="border-b-2 border-transparent hover:border-primary text-white md:text-inherit text-2xl md:text-base">
                                        <a className=" text-gray-700" href="/#contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        )
                }
            </header>
        </div >
    )
}
