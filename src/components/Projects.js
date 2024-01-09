import React from 'react'
import { IoEyeOutline } from "react-icons/io5";


const Projects = ({ projects, gridStyle }) => {
    return (
        <div className={gridStyle}>
            {
                projects && projects.map(item => {
                    const { id, name, url, image } = item;
                    return (
                        <div key={id} className='group rounded-xl bg-dark-500 shadow-lg hover:bg-dark-100 ease-linear duration-300'>
                            <a href={url} className='block w-full h-full p-4' target='_blank' rel="noreferrer">
                                <div className='w-full rounded-xl overflow-hidden relative'>
                                    <img src={image} alt={name} className='group-hover:scale-125 ease-linear duration-300' />
                                    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center group-hover:bg-[#00000020]'>
                                        <div className='bg-dark-300 rounded-xl w-0 h-0 flex justify-center items-center group-hover:w-12 group-hover:h-12 ease-in-out duration-300'>
                                            <IoEyeOutline className='w-6 h-6 text-primaryColor' />
                                        </div>
                                    </div>
                                </div>
                                <h2 className='font-semibold text-lg text-gray-200 mt-2'>{name}</h2>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects