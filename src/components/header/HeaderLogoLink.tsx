import { NavLink } from "react-router-dom"

export const HeaderLogoLink = () => {
    return (
        <NavLink to="/" className='flex gap-2 items-center mb-4 md:mb-0 hover:text-[#747bff;]'>
            <img src="/blog-logo.png" alt="Football Blog Logo" className="h-5 sm:h-10" />
            <h1 className='text-[24px] sm:text-[40px] italic'>FOOTBALL BLOG</h1>
        </NavLink>
    )
}