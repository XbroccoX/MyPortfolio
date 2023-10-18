import React from "react";
import interfaz from "../assets/developer-bro.svg";
import spain from "../assets/spain.svg";
import usaFlag from "../assets/united-states.svg";

export const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="flex flex-col md:flex-row">
        <div className="mb-14 md:mb-0 flex justify-center md:justify-start md:w-1/3">
          <img src={interfaz} alt="Web developer image" className="w-2/3" />
        </div>
        <div className="flex flex-col md:md:w-2/3 text-gray-700">
          <p className="text-3xl font-bold mb-8">About me</p>
          <p className="mb-4">
            Experienced front-end developer with expertise in React.js, Next.js,
            and Adobe Experience Manager. Skilled in creating dynamic and
            responsive web applications that deliver intuitive user experiences.
            Strong problem-solving and communication skills, with the ability to
            work effectively both independently and as part of a team. Dedicated
            to staying up-to-date with the latest developments in front-end
            technologies.
          </p>
          <div className="flex justify-center items-center justify-around mt-4">
            <a
              className="flex justify-around items-center bg-violet-700 hover:scale-x-105 transition-all text-white  border   font-bold py-2 px-3 md:py-3 md:px-6 rounded-full w-fit"
              href="https://drive.google.com/file/d/1nEfgfwtsndOYAmwCzJIgTM1iixB7H2bu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span className="pr-2">
                <img className="w-5" src={spain} alt="Spain flag" />
              </span>
              <p>Descargar CV</p>
            </a>
            <a
              className="flex justify-around items-center bg-violet-700 hover:scale-x-105 transition-all text-white  border   font-bold py-2 px-3 md:py-3 md:px-6 rounded-full w-fit"
              href="https://drive.google.com/file/d/1j4sai3LT9XbSbA8FsriTh8YYgNoSSLaK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span className="pr-2">
                <img className="w-5" src={usaFlag} alt="Spain flag" />
              </span>
              <p>Download CV</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
