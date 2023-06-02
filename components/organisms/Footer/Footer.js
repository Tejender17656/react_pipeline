import { useAppContext } from "@context/Context"
import { useRouter } from "next/router";

function Footer() {
    const { isSideNavOpen } = useAppContext();
    const router = useRouter()

    return (
        <footer className={`transition-all ease-in-out delay-100 duration-500 z-20 p-3 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-3 ${router.pathname.includes("/cms") && isSideNavOpen && 'ml-[100px]'}`}>
            <div className="w-full max-w-screen-xl mx-auto px-2">
                <span className="block text-sm text-gray-900 sm:text-center">Copyright © 2023 • <a href="https://uvdistage.mobileprogramming.net/contentmanagementsystem/privacy" className="hover:underline text-[#7b51a1]">Privacy Policy</a>. All Rights Reserved.</span>
                <span className="block text-sm text-gray-900 sm:text-center">Version 0.1</span>
            </div>
        </footer>
    )
}

export default Footer