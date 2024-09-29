import { HeaderAuth } from "./HeaderAuth"
import { HeaderNav } from "./HeaderNav"
import { HeaderLogoLink } from "./HeaderLogoLink"

export const Header = () => {
    return (
        <header 
            className="bg-slate-300 px-8 py-4
                flex items-center justify-between
                flex-col-reverse
                md:flex-row-reverse 
                lg:flex-row"
        >
            <HeaderNav />
            <HeaderLogoLink />
            <HeaderAuth />
        </header>
    )
}