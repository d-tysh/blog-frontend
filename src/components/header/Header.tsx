import { HeaderAuth } from "./HeaderAuth"
import { HeaderNav } from "./HeaderNav"
import { HeaderLogoLink } from "./HeaderLogoLink"

export const Header = () => {
    return (
        <header className="header">
            <HeaderNav />
            <HeaderLogoLink />
            <HeaderAuth />
        </header>
    )
}