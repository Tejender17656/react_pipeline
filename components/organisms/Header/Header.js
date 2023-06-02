import { useAppContext } from "@context/Context";
import SimpleButton from "@components/atom/SimpleButton/SimpleButton";
import { useRouter } from "next/router";
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const router = useRouter()
    const { setOpen, isUserLoggedIn, setCurrentModal, setIsSideNavOpen, isSideNavOpen } = useAppContext();

    const handleLogout = () => {
        setOpen(true);
        setCurrentModal("logout")
    }

    return (
        <header className={`${router.pathname.includes("/cms") ? "bg-[#1b0b44]" : "bg-[#330060]"} text-white transition-all ease-in-out delay-100 duration-500 ${router.pathname.includes("/cms") && isSideNavOpen && 'ml-[100px]'}`}>
            <nav className="flex items-center justify-between p-6 lg:px-6" aria-label="Global">
            {/* <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-6" aria-label="Global"> */}
                <div className={`${router.pathname.includes("/cms") ? "flex" : "hidden"}`}>
                    <button type="button" onClick={()=>setIsSideNavOpen(prev => !prev)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="flex lg:flex-1">
                    <a href="#" className="p-1.5">
                        <span className="text-white font-bold">Welcome, UVDI Admin</span>
                    </a>
                </div>
                <div className="hidden sm:flex sm:gap-x-12">                
                    <img className="h-[55px] w-[310px]" src="https://uvdistage.mobileprogramming.net/usa-canada/logo.png" alt="" />
                </div>
                <div className="flex flex-1 justify-end">
                    {/* <a href="#" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a> */}
                    {isUserLoggedIn ? (
                        <SimpleButton className="text-white border-white font-medium font-sans normal-case" onClick={()=>handleLogout()}>Logout</SimpleButton>
                    ) : (
                        router.pathname != "/" && <SimpleButton className="text-white border-white font-medium font-sans normal-case" onClick={()=>{setOpen(prev => !prev); setCurrentModal("login");}}>Login</SimpleButton>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header