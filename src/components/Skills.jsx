import React from 'react'
import html from '../assets/techicons/html.svg'
import cssIcon from '../assets/techicons/cssIcon.svg'
import jsIcon from '../assets/techicons/javascript.svg'
import sassIcon from '../assets/techicons/sass.svg'
import reactIcon from '../assets/techicons/reactIcon.svg'
import nextIcon from '../assets/techicons/nextj.svg'
import bootstrapIcon from '../assets/techicons/bootstrap-.svg'
import tailwindIcon from '../assets/techicons/tailwind.svg'
import mongoIcon from '../assets/techicons/mongo.svg'
import githubIcon from '../assets/techicons/github.svg'
import bitbucket from '../assets/techicons/bitbucket.svg'
import dockerIcon from '../assets/techicons/docker.svg'
import jqueryIcon from '../assets/techicons/jquery.svg'
import aemIcon from '../assets/techicons/aem.svg'
import graphIcon from '../assets/techicons/graphql.svg'
import npmIcon from '../assets/techicons/npm.svg'
import webpackIcon from '../assets/techicons/webpack.svg'
import yarnIcon from '../assets/techicons/yarn.svg'




export const Skills = () => {
    return (
        <section className="mt-16">
            <div className="text-3xl text-gray-700  font-bold whitespace-nowrap flex md:after:block md:after:h-[2px] md:after:my-auto md:after:ml-4 md:after:w-full md:after:bg-violet-700">

                Skills

            </div>
            <p className="mt-6 mb-16">
                Over the years I have been acquiring knowledge in different areas of programming, both front-end and back-end. Here is a list of the technologies I have used in my projects
            </p>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2 gap-y-10 mt-10 mb-12">
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={html} alt="HTML5" />
                    <p className="text-center text-sm mt-3">HTML5</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={cssIcon} alt="CSS3" />
                    <p className="text-center text-sm mt-3">CSS3</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={jsIcon} alt="JavaScript" />
                    <p className="text-center text-sm mt-3">JavaScript</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3 rounded-full" src={aemIcon} alt="aemIcon" />
                    <p className="text-center text-sm mt-3">AEM</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={reactIcon} alt="React" />
                    <p className="text-center text-sm mt-3">React</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={nextIcon} alt="Next" />
                    <p className="text-center text-sm mt-3">Next</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={sassIcon} alt="Sass" />
                    <p className="text-center text-sm mt-3">Sass</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={bootstrapIcon} alt="Bootstrap" />
                    <p className="text-center text-sm mt-3">Bootstrap</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={tailwindIcon} alt="TailwindCSS" />
                    <p className="text-center text-sm mt-3">TailwindCSS</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={mongoIcon} alt="MongoDB" />
                    <p className="text-center text-sm mt-3">MongoDB</p>
                </div><div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={githubIcon} alt="Github" />
                    <p className="text-center text-sm mt-3">Github</p>
                </div><div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={dockerIcon} alt="Docker" />
                    <p className="text-center text-sm mt-3">Docker</p>
                </div><div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={npmIcon} alt="npm" />
                    <p className="text-center text-sm mt-3">npm</p>
                </div><div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={yarnIcon} alt="yarn" />
                    <p className="text-center text-sm mt-3">yarn</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={bitbucket} alt="bitbucket" />
                    <p className="text-center text-sm mt-3">Bitbucket</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={jqueryIcon} alt="jqueryIcon" />
                    <p className="text-center text-sm mt-3">jquery</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={graphIcon} alt="graphIcon" />
                    <p className="text-center text-sm mt-3">Graphql</p>
                </div>
                <div className="flex flex-col items-center hover:scale-110">
                    <img className="w-1/3" src={webpackIcon} alt="webpackIcon" />
                    <p className="text-center text-sm mt-3">Webpack</p>
                </div>
            </div>
        </section>
    )
}
