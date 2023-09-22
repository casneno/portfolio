import React from 'react';
import Project4Img from '../../images/projects/fetch-me.png';  // You can replace this with actual images later
import Project1Img from '../../images/projects/project_1_screenshot.png';  // You can replace this with actual images later
import Project3Img from '../../images/projects/project_3_screenshot.png';  // You can replace this with actual images later
import Project2Img from '../../images/projects/project_2_screenshot.png';  // You can replace this with actual images later

const Projects = () => {

  const projectDetails = [
    {
      title: 'React JS Application using MERN stack (mobile)',
      demoLink: 'https://fetch-me-bcf56e1c2a03.herokuapp.com/',
      codeLink: 'https://github.com/casneno/fetch-me',
      image: Project4Img,
      date: 'August/2023'
    },
    {
      title: 'Django social app with PostGRE SQL',
      demoLink: 'https://fit-me-in-7fcf0f4ba962.herokuapp.com/',
      codeLink: 'https://github.com/casneno/fitmein',
      image: Project3Img,
      date: 'July/2023'
    },
    {
      title: 'An organization tool built with Node, Express and MongoDB',
      demoLink: 'https://codedesk-71e7862f6501.herokuapp.com/',
      codeLink: 'https://github.com/casneno/codedesk_app',
      image: Project2Img,
      date: 'July/2023'
    },
    {
      title: 'Battleships game built in HTML, CSS and JavaScript with an AI',
      demoLink: 'https://casneno.github.io/Battleships-ProjectOne/',
      codeLink: 'https://github.com/casneno/Battleships-ProjectOne',
      image: Project1Img,
      date: 'June/2023'
    }
  ];

  return (
    <div name='projects' className='w-full md:h-screen bg-primaryBg text-primaryText'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-primaryText border-accent1'>Projects</p>
          <p className='text-lg py-4 text-secondaryText'>Check out some of my recent work</p>
        </div>
        
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projectDetails.map((project, idx) => (
            <div key={idx} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-hidden relative'>
              
              {/* Background Image */}
              <div style={{ backgroundImage: `url(${project.image})` }} className='w-full h-full bg-cover bg-center opacity-100 group-hover:opacity-30 absolute'></div>
  
              {/* Hover Effect */}
              <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center h-full relative'>
                <span className='text-2xl text-center font-bold tracking-wider mt-0 mb-2'>
                  {project.title}
                </span>
                <span className='text-xl font-bold tracking-wider mt-0 mb-2'>
                  {project.date}
                </span>
                <div className='pt-4 text-center mb-0'>
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-accent1 text-primaryBg font-bold text-lg'>Demo</button>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-accent1 text-primaryBg font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;
