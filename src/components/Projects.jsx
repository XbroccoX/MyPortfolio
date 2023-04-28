import React from 'react'
import { ProjectItem } from './ProjectItem'

import traductor from '../assets/projects/traductor.jpg'

const projects = [
    { id: 1, img: traductor, title: 'ChatGpt Translate', url: 'https://traductor-chat-gpt3turbo-ztuh-xbroccox.vercel.app/', git: 'https://github.com/XbroccoX/TraductorChatGpt3turbo', description: 'This is a copy of Google translate where use Api of Chatgpt', tags: ['React', 'OpenIA', 'ChatGpt'] },
]

export const Projects = () => {
    return (
        <section id='projects' className='md:px-24 px-10' >
            <div className=" p-4 py-16">
                <h1 className="text-4xl text-gray-800  font-bold text-center ">
                    Projects
                </h1>
                <p className='text-center py-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat fugiat minima? Dolore doloremque, adipisci ipsum voluptas ducimus ad reiciendis architecto inventore quisquam distinctio voluptate? Mollitia optio fugit dolores atque?
                    Sapiente voluptatum maxime vitae, consequuntur explicabo necessitatibus unde sed amet iure repellendus aspernatur ad ullam facere. Reprehenderit, quaerat earum. Mollitia eum nemo aspernatur voluptate. Voluptatem dolor ipsa dolorem nostrum quidem!
                    Distinctio quidem reiciendis aliquam. Cum, omnis nemo recusandae eligendi tempore quisquam odio magnam praesentium voluptatem reprehenderit inventore ex tenetur magni molestias harum? Sint officiis obcaecati, aut perspiciatis alias esse dolorum?
                    Dolor provident porro rerum est quam dolorum odit natus cum sunt consequatur? Dolorem ipsam iste sapiente praesentium quidem debitis, eos rem aperiam cumque quibusdam facilis voluptatibus officia animi nesciunt iusto!
                    Exercitationem ad delectus deserunt cumque iste consectetur eos explicabo ipsam veritatis sit quibusdam possimus, quae tenetur voluptatibus blanditiis et quasi. Reprehenderit veniam tempore perspiciatis itaque accusamus. Explicabo maiores natus esse.
                </p>
                <div className="grid sm:grid-cols-2 gap12">
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
