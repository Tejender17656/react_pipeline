import SideNav from "@components/molecules/SideNav/SideNav";
import { useAppContext } from "@context/Context";

export default function Dashboard() {
  const { isSideNavOpen } = useAppContext();

  return (
    <>
      <SideNav />
      <div className={`app transition-all ease-in-out delay-100 duration-500 ${isSideNavOpen && "ml-[100px]"}`}>
        <title>Dashboard CMS | UVDI-360 UV System</title>
        Under dev
      </div>
    </>
  )
}