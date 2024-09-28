import { AdminMenu } from "./widgets/AdminMenu"
import { NewsAside } from "./widgets/NewsAside"


export const Aside = () => {
    return (
        <aside className="bg-gray-200 w-1/4 p-4">
            <AdminMenu />
            <NewsAside />
        </aside>
    )
}