import React from 'react'
import ParticlesBg from '../components/ParticlesBg'
import { Outlet, Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <header className='w-full mx-auto py-10 flex justify-between items-center'>
                <nav className='w-[90%] md:w-3/4 lg:w-2/5 mx-auto py-2  border border-gray-800 rounded-full'>
                    <ul className="navbar-links h-full flex justify-evenly items-center">
                        <li className='nav-link'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
            <ParticlesBg className="relative z-10" />

            <Outlet />

            <Footer />
        </>
    )
}

export default Layout