import React from 'react'
import { NavLink } from 'react-router-dom';

const NavItem = ({ route }) => {
    const style = 'relative h-fit font-medium text-gray-300 hover:text-white ease-linear duration-150 capitalize';
    return (
        <NavLink
            to={`/${route}`}
            className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? `text-primaryColor ${style} hover:text-primaryColor after:absolute after:-bottom-1 after:left-0 after:w-1/2 after:h-[2px] after:rounded-xl after:bg-primaryColor` : style
            }
        >
            {route === '' ? 'Home' : route}
        </NavLink>
    )
}

export default NavItem