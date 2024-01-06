import React from 'react'

const Projects = ({ projects, gridStyle }) => {
    return (
        <div className={gridStyle}>
            {
                projects && projects.map(item => {
                    const { id, name, url, image, tech } = item;
                    return (
                        <div key={id} className='group rounded-xl bg-dark-500 shadow-lg hover:bg-dark-100 ease-linear duration-300'>
                            <a href={url} className='block w-full h-full p-4' target='_blank' rel="noreferrer">
                                <div className='w-full rounded-xl overflow-hidden'>
                                    <img src={image} alt={name} className='group-hover:scale-125 ease-linear duration-300' />
                                </div>
                                <h2 className='font-semibold text-lg text-gray-200 mt-2'>{name}</h2>
                                {/* {tech && (
                                    <div className='mt-3 text-gray-400'>
                                        <span className='fontw-bold text-slate-200 mr-3'>Tech:</span>
                                        {tech.map(item => {
                                            return (
                                                <span className='mr-2' key={item.id}>{item}</span>
                                            )
                                        })}
                                    </div>
                                )} */}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects