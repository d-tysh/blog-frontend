import { AdminMenu } from "./widgets/AdminMenu"
import { AuthAside } from "./widgets/AuthAside"
import { NewsAside } from "./widgets/NewsAside"

export const Aside = () => {
    return (
        <aside className="aside">
            <AuthAside />
            <AdminMenu />
            <NewsAside />
        </aside>
    )
}