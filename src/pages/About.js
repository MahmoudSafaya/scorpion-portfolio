import React from 'react'
import CVButton from '../components/CVButton';
import { FaGraduationCap } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { FaBriefcase, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiJquery, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";


const About = () => {
  return (
    <div className='about container w-[85%] md:w-3/4 lg:w-3/5 mx-auto mt-12 relative z-20'>
      <div className='bg-dark-300 py-5 px-5 sm:px-10 rounded-2xl text-gray-200'>

        <section className='section-in-about my-5 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-10 before:bg-gray-500 before:content-[""] before:w-[1px] before:h-4/5 before:mt-1 before:z-10'>
          <div className='flex justify-start items-center mb-8'>
            <span className='rounded-xl shadow-xl w-10 h-10 mr-3 bg-dark-300 flex justify-center items-center z-20'>
              <FaGraduationCap className='w-4 h-4 text-primaryColor' />
            </span>
            <h1 className='font-bold text-3xl'>Education</h1>
          </div>
          <div className='w-full pl-10'>
            <h3 className='font-semibold text-xl relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-6 before:bg-primaryColor before:content-[""] before:w-2 before:h-2 before:rounded-full before:z-10 after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-7 after:bg-primaryColor/20 after:content-[""] after:w-4 after:h-4 after:rounded-full after:z-10 '>Faculty of Computers and Information</h3>
            <p className='text-primaryColor my-2'>2018 - 2022</p>
            <p>Bachelor's degree in <b className='text-primaryColor'>Computer Science</b> </p>
          </div>
        </section>


        <section className='section-in-about my-10 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-10 before:bg-gray-500 before:content-[""] before:w-[1px] before:h-4/5 before:mt-1 before:z-10'>
          <div className='flex justify-start items-center mb-8'>
            <span className='rounded-xl shadow-xl w-10 h-10 mr-3 bg-dark-300 flex justify-center items-center z-20'>
              <FaBriefcase className='w-4 h-4 text-primaryColor' />
            </span>
            <h1 className='font-bold text-3xl'>Experience</h1>
          </div>
          <div className='w-full pl-10'>
            <h3 className='font-semibold text-xl relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-6 before:bg-primaryColor before:content-[""] before:w-2 before:h-2 before:rounded-full before:z-10 after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-7 after:bg-primaryColor/20 after:content-[""] after:w-4 after:h-4 after:rounded-full after:z-10 '>Front End Developer</h3>
            <p className='text-primaryColor my-2'>February 2022 - Present</p>
            <p>AMS Alafaf Medical Services</p>
          </div>
        </section>


        <section className='section-in-about my-5'>
          <div className='flex justify-start items-center mb-8'>
            <span className='rounded-xl shadow-xl w-10 h-10 mr-3 bg-dark-300 flex justify-center items-center'>
              <GiSkills className='w-4 h-4 text-primaryColor' />
            </span>
            <h1 className='font-bold text-3xl'>Skills</h1>
          </div>
          <div className='grid grid-cols-3 sm:grid-cols-4 gap-6 mb-8'>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><FaHtml5 /></p>
              <p className='mt-3 font-semibold'>HTML</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><FaCss3Alt /></p>
              <p className='mt-3 font-semibold'>CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><SiJavascript /></p>
              <p className='mt-3 font-semibold'>JavaScript</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><SiTypescript /></p>
              <p className='mt-3 font-semibold'>TypeScript</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><FaSass /></p>
              <p className='mt-3 font-semibold'>SASS</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><FaBootstrap /></p>
              <p className='mt-3 font-semibold'>Bootstrap</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><SiJquery /></p>
              <p className='mt-3 font-semibold'>jQuery</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><SiTailwindcss /></p>
              <p className='mt-3 font-semibold'>TailwindCSS</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><FaReact /></p>
              <p className='mt-3 font-semibold'>React.js</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><SiNextdotjs /></p>
              <p className='mt-3 font-semibold'>Next.js</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><TbBrandRedux /></p>
              <p className='mt-3 font-semibold'>Redux</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><FaNodeJs /></p>
              <p className='mt-3 font-semibold'>Node.js</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><FaGitAlt /></p>
              <p className='mt-3 font-semibold'>Git</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-5xl text-primaryColor'><FaGithub /></p>
              <p className='mt-3 font-semibold'>Github</p>
            </div>
          </div>
          <div className='w-max mx-auto'>
            <CVButton />
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default About
