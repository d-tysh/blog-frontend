import { NavLink } from "react-router-dom"

export const HeaderLogoLink = () => {
    return (
        <NavLink to="/" className='hover:text-[#747bff;] flex gap-2 items-center'>
            <img src="/blog-logo.png" alt="Football Blog Logo" className="h-10" />
            <h1 className='text-[40px] italic'>FOOTBALL BLOG</h1>
        </NavLink>
    )
}