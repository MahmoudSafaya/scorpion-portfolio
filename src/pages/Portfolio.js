import React from 'react'
import Projects from '../components/Projects'
import { PortfolioProjects } from '../components/Data'

const Portfolio = () => {
  return (
    <div className='w-[85%] md:w-3/4 lg:w-3/5 mx-auto mt-12 sm:bg-dark-400 relative z-20 p-5 sm:p-10 rounded-xl'>
      <h1 className='h-heading'>Projects</h1>
      <Projects projects={PortfolioProjects} gridStyle='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6' />
    </div>
  )
}

export default Portfolio