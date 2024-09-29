import { Suspense } from "react"
import { Header } from "./header/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Aside } from "./Aside"
import { Loader } from "./Loader"

export const Layout = () => {
    return (        
        <div className='flex flex-col min-h-[100vh] w-[100vw]'>
            <Header />
            <div className="flex flex-1 flex-col-reverse md:flex-row">
                <Aside />
                <main className="bg-slate-100 md:w-2/3 lg:w-3/4 p-8">
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
            <Footer />
        </div>
    )
}