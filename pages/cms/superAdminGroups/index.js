import { useState } from "react";
import { useAppContext } from "@context/Context";
import CustomPopup from "@components/atom/CustomPopup";
import SearchField from "@components/atom/SearchField/SearchField";
import SimpleButton from "@components/atom/SimpleButton/SimpleButton";
import Table from "@components/atom/Table/Table";
import SideNav from "@components/molecules/SideNav/SideNav";
// import superAdminGroupsStubData from "@fixtures/superAdminFixtures";
import { TABLE_ID, CUSTOM_POPUP } from "@constants/global"
import axios from "@lib/axios"

export default function SuperAdminGroups() {
  const [superAdminTableData, setSuperAdminTableData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { isSideNavOpen } = useAppContext();
  const tableHeadingArray = ["Groups", "Edit", "Delete"]
  const [showDeletePopup, setShowDeletePopup] = useState(false)

  const getSuperAdminList = () => {
    setIsLoading(true)
    axios.post(`/uvdiUsers/getuvdiDistributorGroups`, { "accessmode": "W", "accessregion": "US" })
        .then(res => {
            setSuperAdminTableData(res.data.data);
            setIsLoading(false)
        })
        .catch(err => { setIsLoading(false) })
  }
  
  return (
    <>
      <SideNav />
      <div className={`app transition-all ease-in-out delay-100 duration-500 ${isSideNavOpen && "ml-[100px]"}`}>
        <title>Dashboard CMS | UVDI-360 UV System</title>
        <div className="pt-4">
          <CustomPopup title={CUSTOM_POPUP.TITLE} description={CUSTOM_POPUP.SUPER_ADMIN_GRP_DESCRIPTION} buttonText={CUSTOM_POPUP.BUTTON_TEXT} popUpWidth="max-w-md" showPopup={showDeletePopup} setShowPopup={setShowDeletePopup} handleConfirm={() => { }} />
          <Table id={TABLE_ID.SUPER_ADMIN_GROUPS_LIST} tableData={superAdminTableData} tableHeadingArray={tableHeadingArray} isLoading={isLoading} handleDelete={() => setShowDeletePopup(prev => !prev)} >
            <div className="h-[60px] bg-[#604691]">
              <h3 className="text-center w-full text-white p-[12px] text-[22px] float-left">
                SUPER ADMIN GROUPS
              </h3>
              <SimpleButton className="absolute right-[20%] mt-[12px] text-white border-white font-medium font-sans uppercase" onClick={() => { }}>Add</SimpleButton>
              <SearchField classess="absolute float-right right-0 mt-[12px] w-[20%] pl-[10px]" handleSearch={(val) => { getSuperAdminList() }} />
            </div>
          </Table>
        </div>
      </div>
    </>
  )
}