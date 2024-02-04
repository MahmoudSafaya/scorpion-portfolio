import React from 'react'
import Projects from '../components/Projects'
import { HomeProjects } from '../components/Data'
import CVButton from '../components/CVButton'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import { IoArrowForwardSharp, IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";



const Home = () => {
  return (
    <main className='container w-[85%] md:w-3/4 lg:w-3/5 mx-auto mt-12 relative z-20'>
      <section className='bg-dark-400 p-5 md:p-10 rounded-xl'>

        <div className='flex justify-between items-start flex-col-reverse md:flex-row'>
          <div className='w-full md:w-2/3'>
            <h1 className='font-bold text-3xl text-left'>
              Mahmoud Safaya
            </h1>
            <h3 className='text-gray-200 bg-dark-500 py-2 px-3 mt-3 w-max text-sm rounded-xl shadow-lg'>Front End Developer</h3>
            <p className='text-gray-200 mt-3 mb-8'>
              I'm a junior front-end developer with more than 2 years of experience. I have a bachelor's degree in Computer Science.
              Currently, I'm working at AMS Alafaf Medical Company, but I'm seeking new opportunities.
            </p>
          </div>
          <div className='w-1/3 md:w-1/5 mb-2 md:mb-0'>
            <img src='mahmoudsafaya.jpg' alt='mahmoud safaya' className='rounded-lg' />
          </div>
        </div>

        <div>
          <a href='mailto:mahmoudsafaya18@gmail.com' target='_self' rel='noreferrer' className='block w-max'>
            <div className='flex justify-start items-center mb-3'>
              <span className='rounded-xl shadow-xl w-10 h-10 mr-3 bg-dark-500 flex justify-center items-center z-20'>
                <CiMail className='w-5 h-5 text-primaryColor font-bold' />
              </span>
              <div className='text-xs'>
                <p className='text-gray-200 font-semibold'>E-mail</p>
                <p className='text-gray-300'>mahmoudsafaya18@gmail.com</p>
              </div>
            </div>
          </a>

          <a href='tel:+201551448276' target='_self' rel='noreferrer' className='block w-max'>
            <div className='flex justify-start items-center mb-3'>
              <span className='rounded-xl shadow-xl w-10 h-10 mr-3 bg-dark-500 flex justify-center items-center z-20'>
                <IoPhonePortraitOutline className='w-5 h-5 text-primaryColor font-bold' />
              </span>
              <div className='text-xs'>
                <p className='text-gray-200 font-semibold'>Phone</p>
                <p className='text-gray-300'>+20 155 144 8276</p>
              </div>
            </div>
          </a>

          <div className='flex justify-start items-center mb-3'>
            <span className='rounded-xl shadow-xl w-10 h-10 mr-3 bg-dark-500 flex justify-center items-center z-20'>
              <IoLocationOutline className='w-5 h-5 text-primaryColor font-bold' />
            </span>
            <div className='text-xs'>
              <p className='text-gray-200 font-semibold'>Location</p>
              <p className='text-gray-300'>Tanta, Egypt</p>
            </div>
          </div>

          <CVButton />
        </div>
      </section>

      <section className='my-28 bg-dark-400 p-10 rounded-xl'>
        <h1 className='h-heading'>Projects</h1>
        <Projects projects={HomeProjects} gridStyle='grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-6' />
        <div className='mt-5'>
          <Link to='/portfolio' className='btn-btn mt-10 font-semibold text-2xl'>
            <span className='mr-1'> See More </span> <IoArrowForwardSharp className='mt-1' />
          </Link>
        </div>
      </section>

      <section>
        <Contact isHome={true} />
      </section>
    </main>
  )
}

export default Home