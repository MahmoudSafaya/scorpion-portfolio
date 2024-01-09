import React from 'react'
import ParticlesBg from '../components/ParticlesBg'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import NavItem from '../components/NavItem'

const Layout = () => {
    return (
        <>
            <header className='w-full mx-auto py-10 flex justify-between items-center'>
                <nav className='w-[90%] md:w-3/4 lg:w-2/5 mx-auto py-2 border border-dark-500 rounded-full'>
                    <ul className="h-full flex justify-evenly items-center">
                        <li>
                            <NavItem route='' />
                        </li>
                        <li>
                            <NavItem route='about' />
                        </li>
                        <li>
                            <NavItem route='portfolio' />
                        </li>
                        <li>
                            <NavItem route='contact' />
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