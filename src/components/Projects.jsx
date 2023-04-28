import React from 'react'
import { ProjectItem } from './ProjectItem'

import traductor from '../assets/projects/traductor.jpg'
import pokemon from '../assets/projects/pokemon.jpg'
import tesloshop from '../assets/projects/tesloshop.jpg'

const projects = [
    {
        id: 1,
        img: traductor,
        title: 'ChatGpt Translate',
        url: 'https://traductor-chat-gpt3turbo-ztuh-xbroccox.vercel.app/',
        git: 'https://github.com/XbroccoX/TraductorChatGpt3turbo',
        description: 'This is a copy of Google translate where use Api of Chatgpt',
        tags: ['React', 'OpenIA', 'ChatGpt']
    },
    {
        id: 2,
        img: pokemon,
        title: 'Pokemon Card',
        url: 'https://xbroccoxpokenextjs.vercel.app/',
        git: 'https://github.com/XbroccoX/NextJS-pokeApi-Static',
        description: 'I created a web static application with NextJs,  How to use getStaticProps and GetStaticPath and NextUI',
        tags: ['Next.js', 'PokeApi', 'NextUI', 'GSP']
    },
    {
        id: 3,
        img: tesloshop,
        title: 'Teslo shop',
        url: 'https://brocco-shop-mzl-xbroccox.vercel.app/',
        git: 'https://github.com/XbroccoX/BroccoShop',
        description: 'E-commerce with some dependencies of NextJS, MongoDb to BD and Material UI to Interfaz',
        tags: ['Next.js', 'MongoDB', 'Material UI', 'Rest Full API', 'Docker']
    },
    {
        id: 3,
        img: null,
        title: 'Brocco Jira',
        url: '',
        git: 'https://github.com/XbroccoX/BroccoJiraNextJs',
        description: 'develop with NextJS and mongoDB for DB, is a project for adminstrate task',
        tags: ['Next.js', 'MongoDB', 'Bootstrap', 'Dragable']
    },

]

export const Projects = () => {
    return (
        <section id='projects' className='md:px-24 px-10' >
            <div className=" p-4 py-16">
                <h1 className="text-4xl text-gray-700  font-bold text-center ">
                    Projects
                </h1>
                <p className='text-center py-8'>

                </p>
                <div className="grid md:grid-cols-2 gap-12">
                    {
                        projects.map(project => (
                            <ProjectItem img={project.img} title={project.title} url={project.url} urlGithub={project.git} description={project.description} tags={project.tags} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
