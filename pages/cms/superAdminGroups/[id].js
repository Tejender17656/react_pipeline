import { useRouter } from 'next/router';
import { useAppContext } from "@context/Context";
import SideNav from "@components/molecules/SideNav/SideNav";

export default function SuperAdminGroupView() {
  const { isSideNavOpen } = useAppContext();
  const router = useRouter();

  return (
    <>
      <SideNav />
      <div className={`app transition-all ease-in-out delay-100 duration-500 ${isSideNavOpen && "ml-[100px]"}`}>
        <title>Dashboard CMS | UVDI-360 UV System</title>
        <div className="pt-4 font-medium text-center">
          {router.query.id}
          <span className="ml-1 font-normal">
            Super admin group
          </span>
        </div>
      </div>
    </>
  )
}