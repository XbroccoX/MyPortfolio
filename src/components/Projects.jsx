import React from "react";
import { ProjectItem } from "./ProjectItem";

import traductor from "../assets/projects/traductor.jpg";
import pokemon from "../assets/projects/pokemon.jpg";
import tesloshop from "../assets/projects/tesloshop.jpg";
import CHMaquina from "../assets/projects/CHMaquina.jpg";
import Luxe from "../assets/projects/Luxe.jpg";
import SpotifyImage from "../assets/projects/SpotifyProyectImage.jpg";

const projects = [
  {
    id: 1,
    img: SpotifyImage,
    title: "Spotify Project - Landing page",
    url: "https://nextjs-spotify-andes.vercel.app/",
    git: "https://github.com/XbroccoX/Nextjs-spotify-project",
    description: "This Spotify project, is a clone of the original Spotify",
    tags: ["Next.js", "React.js", "Tailwind", "Recoil", "NextAuth"],
  },
  {
    id: 2,
    img: Luxe,
    title: "Luxe Dental Clinic - Landing page",
    url: "https://agency-accelerator.vercel.app/en",
    git: "",
    description: "This is a web page of Luxe Dental Clinic",
    tags: ["Next.js", "React.js", "Tailwind", "Typescript", "MUI"],
  },
  {
    id: 3,
    img: pokemon,
    title: "Pokemon Card",
    url: "https://xbroccoxpokenextjs.vercel.app/",
    git: "https://github.com/XbroccoX/NextJS-pokeApi-Static",
    description:
      "I created a web static application with NextJs,  How to use getStaticProps and GetStaticPath and NextUI",
    tags: ["Next.js", "PokeApi", "NextUI", "GSP"],
  },
  {
    id: 4,
    img: CHMaquina,
    title: "Brocco Machine",
    url: "https://ch-maquina-js.vercel.app/",
    git: "https://github.com/XbroccoX/CHMaquinaJS",
    description:
      "Develop Operative System aplication that develop multiples task",
    tags: ["Javascript", "Css", "Html", "Vanilla"],
  },
  {
    id: 5,
    img: tesloshop,
    title: "Teslo shop",
    url: "https://brocco-shop-mzl-xbroccox.vercel.app/",
    git: "https://github.com/XbroccoX/BroccoShop",
    description:
      "E-commerce with some dependencies of NextJS, MongoDb to BD and Material UI to Interfaz",
    tags: ["Next.js", "MongoDB", "Material UI", "Rest Full API", "Docker"],
  },
  {
    id: 6,
    img: null,
    title: "Brocco Jira",
    url: "",
    git: "https://github.com/XbroccoX/BroccoJiraNextJs",
    description:
      "Develop with NextJS and mongoDB for DB, is a project for adminstrate task",
    tags: ["Next.js", "MongoDB", "Bootstrap", "Dragable"],
  },
  {
    id: 7,
    img: null,
    title: "Task Manager",
    url: "",
    git: "https://github.com/XbroccoX/planificador-de-tareas-REACT",
    description:
      "Develop Task manager with React.js with localStorage, hooks, useContext, states",
    tags: ["React.js", "Hooks"],
  },
  {
    id: 8,
    img: traductor,
    title: "ChatGpt Translate",
    url: "https://traductor-chat-gpt3turbo-ztuh-xbroccox.vercel.app/",
    git: "https://github.com/XbroccoX/TraductorChatGpt3turbo",
    description: "This is a copy of Google translate where use Api of Chatgpt",
    tags: ["React", "OpenIA", "ChatGpt"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="md:px-24 px-10">
      <div className=" p-4 py-16">
        <h1 className="text-4xl text-gray-700  font-bold text-center ">
          Projects
        </h1>
        <p className="text-center py-8"></p>
        <div className="grid md:grid-cols-2 gap-12 ">
          {projects.map((project) => (
            <ProjectItem
              img={project.img}
              title={project.title}
              url={project.url}
              urlGithub={project.git}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
