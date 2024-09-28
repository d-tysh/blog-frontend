import { Suspense } from "react"
import { Header } from "./header/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Aside } from "./Aside"
import { Loader } from "./Loader"

export const Layout = () => {
    return (
        <div className='flex flex-col min-h-[100vh] w-[1140px]'>
            <Header />
            <div className="flex flex-1">
                <Aside />
                <main className="bg-slate-100 w-3/4 p-4">
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
            <Footer />
        </div>
    )
}