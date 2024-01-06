import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaGithub } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
    return (
        <footer className='w-[60%] md:w-1/4 mx-auto my-20'>
            <div className='my-social-media'>
                <ul className='w-full flex justify-between items-center text-2xl'>
                    <li className='nav-link'>
                        <a href='https://www.facebook.com/mahmoud.safaya.1/' target='_blank' rel='noreferrer'>
                            <FaFacebookSquare />
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href='https://www.linkedin.com/in/mahmoud-safaya-b9b32019b/' target='_blank' rel='noreferrer'>
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href='https://www.instagram.com/mahmoudsafaya8338/' target='_blank' rel='noreferrer'>
                            <GrInstagram />
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href='https://github.com/MahmoudSafaya' target='_blank' rel='noreferrer'>
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
