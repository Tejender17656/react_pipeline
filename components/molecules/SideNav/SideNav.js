import { useAppContext } from '@context/Context';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideNav = () => {
    const router = useRouter();
    const { isSideNavOpen } = useAppContext();
    return (
        <div className={`${isSideNavOpen ? "flex" : "-translate-x-[100px]" } transition-all ease-in-out duration-500 delay-100 z-50 flex-col fixed top-0 h-screen items-center text-center w-[100px] overflow-x-auto text-white bg-[#1b0b44] rounded-b shadow-[0_8px_8px_2px_rgba(0,0,0,0.6)]`}>
            {/* <a className="flex items-center justify-center mt-3" href="#">
                <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
            </a> */}
            <div className={`flex flex-col items-center mt-3 border-t border-gray-700`}>
                <Link className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="/cms/dashboard">
                    <div className={`border-b flex flex-col items-center w-[85px] text-sm py-2.5 ${router.pathname.includes("/dashboard") && "bg-[#bbb3c275]"} hover:bg-[#bbb3c275] cursor-pointer`}>
                        <img className="w-[40px] h-[40px]" width="40" height="40" src="https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/home.png" alt="" />
                        Home
                    </div>
                </Link>
                <Link className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="/cms/admin">
                    <div className={`border-b flex flex-col items-center w-[85px] text-sm py-2.5 ${router.pathname.includes("/admin") && "bg-[#bbb3c275]"} hover:bg-[#bbb3c275] cursor-pointer`}>
                        <img className="w-[40px] h-[40px]" width="40" height="40" src="https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/uvdiadmin.png" alt="" />
                        UVDI Admin
                    </div>
                </Link>
                <Link className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="/cms/superAdminGroups">
                    <div className={`border-b flex flex-col items-center w-[85px] text-sm py-2.5 ${router.pathname.includes("/superAdminGroups") && "bg-[#bbb3c275]"} hover:bg-[#bbb3c275] cursor-pointer`}>
                        <img className="w-[40px] h-[40px]" width="40" height="40" src="https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/superadmin.png" alt="" />
                        Super Admin Groups
                    </div>
                </Link>
                <div className='border-b flex flex-col items-center w-[85px] text-sm py-2.5 hover:bg-[#bbb3c275]'>
                    <a className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="#">
                        <img width="40" height="40" src="https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/hospitalgroup11.png" alt=""/>
                    </a>
                    Hospital Groups
                </div>
                <div className='border-b flex flex-col items-center w-[85px] text-sm py-2.5 hover:bg-[#bbb3c275]'>
                    <a className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="#">
                        <img width="40" height="40" src="https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/hospitals.png" alt=""/>
                    </a>
                    Sold Hospitals
                </div>
                <div className='border-b flex flex-col items-center w-[85px] text-sm py-2.5 hover:bg-[#bbb3c275]'>
                    <a className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="#">
                        <img className="w-[40px] h-[40px]" width="40" height="40" src="https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/devices.png" alt=""/>
                    </a>
                    Devices
                </div>
                <div className='border-b flex flex-col items-center w-[85px] text-sm py-2.5 hover:bg-[#bbb3c275]'>
                    <a className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="#">
                        <img className="w-[40px] h-[40px]" width="40" height="40" src="	https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/uvdiadmin.png" alt=""/>
                    </a>
                    All Registered Users
                </div>
                <div className='border-b flex flex-col items-center w-[85px] text-sm py-2.5 hover:bg-[#bbb3c275]'>
                    <a className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="#">
                        <img className="w-[40px] h-[40px]" width="40" height="40" src="https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/warranty.png" alt=""/>
                    </a>
                    Warranty Set-up
                </div>
                <div className='border-b flex flex-col items-center w-[85px] text-sm py-2.5 hover:bg-[#bbb3c275]'>
                    <a className="flex items-center justify-center w-12 h-10 mt-2 rounded" href="#">
                        <img className="w-[40px] h-[40px]" width="40" height="40" src="https://uvdistage.mobileprogramming.net/usa-canada/contentmanagementsystem/img/uvdiadmin.png" alt=""/>
                    </a>
                    Account Managers
                </div>
            </div>
        </div>
    )
}

export default SideNav