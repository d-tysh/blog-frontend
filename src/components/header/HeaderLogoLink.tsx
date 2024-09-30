import { NavLink } from "react-router-dom"

export const HeaderLogoLink = () => {
    return (
        <NavLink to="/" className='header-logo'>
            <img src="/blog-logo.png" alt="Football Blog Logo" className="h-5 sm:h-10" />
            <h1 className='text-[24px] sm:text-[40px] italic'>FOOTBALL BLOG</h1>
        </NavLink>
    )
}