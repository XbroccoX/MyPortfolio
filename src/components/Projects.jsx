import React from 'react'
import { ProjectItem } from './ProjectItem'

import traductor from '../assets/projects/traductor.jpg'

const projects = [
    { id: 1, img: traductor, title: 'ChatGpt Translate', url: 'https://traductor-chat-gpt3turbo-ztuh-xbroccox.vercel.app/', git: 'https://github.com/XbroccoX/TraductorChatGpt3turbo', description: 'This is a copy of Google translate where use Api of Chatgpt', tags: ['React', 'OpenIA', 'ChatGpt'] },
    { id: 2, img: traductor, title: 'ChatGpt Translate', url: 'https://traductor-chat-gpt3turbo-ztuh-xbroccox.vercel.app/', git: 'https://github.com/XbroccoX/TraductorChatGpt3turbo', description: 'This is a copy of Google translate where use Api of Chatgpt', tags: ['React', 'OpenIA', 'ChatGpt'] },
    { id: 3, img: traductor, title: 'ChatGpt Translate', url: 'https://traductor-chat-gpt3turbo-ztuh-xbroccox.vercel.app/', git: 'https://github.com/XbroccoX/TraductorChatGpt3turbo', description: 'This is a copy of Google translate where use Api of Chatgpt', tags: ['React', 'OpenIA', 'ChatGpt'] },
    { id: 4, img: traductor, title: 'ChatGpt Translate', url: 'https://traductor-chat-gpt3turbo-ztuh-xbroccox.vercel.app/', git: 'https://github.com/XbroccoX/TraductorChatGpt3turbo', description: 'This is a copy of Google translate where use Api of Chatgpt', tags: ['React', 'OpenIA', 'ChatGpt'] },
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
