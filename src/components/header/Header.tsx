import { HeaderAuth } from "./HeaderAuth"
import { HeaderNav } from "./HeaderNav"
import { HeaderLogoLink } from "./HeaderLogoLink"

export const Header = () => {
    return (
        <header className="flex items-center justify-between bg-slate-300 px-8 py-4 min-w-[1140px]">
            <HeaderNav />
            <HeaderLogoLink />
            <HeaderAuth />
        </header>
    )
}