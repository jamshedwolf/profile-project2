import React from 'react';
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";

const projects = [
  { id: 1, image: proj1, link: '#' },
  { id: 2, image: proj2, link: '#' },
  { id: 3, image: proj3, link: '#' },
  { id: 4, image: proj4, link: '#' },
  { id: 5, image: proj5, link: '#' },
  { id: 6, image: proj6, link: '#' }
];

function Projects() {
  return (
    <div id='projects' className='relative max-w-[1400px] mx-auto lg:p-20 h-auto'>
      <div className="font-bold text-yellowbtn text-4xl p-10 md:text-5xl lg:text-6xl text-center">PROJECTS</div>
      <div className="flex justify-center gap-4 flex-wrap flex-col lg:flex-row items-center">
        {projects.map(project => (
          <div key={project.id} data-aos="zoom-in-up" className="relative w-[300px] h-[200px] group border-2 overflow-hidden rounded-lg border-yellowbtn">
            <img src={project.image} alt={`Project ${project.id}`} className="w-full h-full object-cover" />
            <div className="absolute transition-all opacity-0 group-hover:opacity-100 duration-200 ease-in top-0 w-full h-full bg-white/20 flex items-center justify-center">
              <a href={project.link} className="">
                <button className="px-4 py-1 bg-white rounded-full">Live</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute  top-[500px] blur-[200px] z-[-1] bg-purple-600 left-[50%] w-[250px] h-[250px]"></div>
            <div className="absolute right-[0px] blur-[200px] z-[-1] bg-blue-600  w-[250px] h-[250px]"></div>
            <div className="absolute top-[200px] hidden lg:block  blur-[200px] z-[-1] bg-purple-600 left-[300px] w-[250px] h-[250px]"></div>
    </div>
  );
}

export default Projects;
