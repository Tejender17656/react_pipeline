import { useState } from "react";
import { useAppContext } from "@context/Context";
import { TABLE_ID, CUSTOM_POPUP } from "@constants/global"
import SideNav from "@components/molecules/SideNav/SideNav";
import Table from "@components/atom/Table/Table";
import SimpleButton from "@components/atom/SimpleButton/SimpleButton";
import SearchField from "@components/atom/SearchField/SearchField";
// import adminTableStubData from "@fixtures/adminFixtures"
import CustomPopup from "@components/atom/CustomPopup";
import axios from "@lib/axios"

export default function Admin() {
  const [adminTableData, setAdminTableData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showDeletePopup, setShowDeletePopup] = useState(false)
  const { isSideNavOpen } = useAppContext();
  const tableHeadingArray = ["First Name", "Last Name", "Email", "Delete"]

  const getAdminList = () => {
    setIsLoading(true)
    axios.post(`/uvdiUsers/getuvdiUsers`, { "accessmode": "W", "accessregion": "US" })
        .then(res => {
            setAdminTableData(res.data.data);
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
          <CustomPopup title={CUSTOM_POPUP.TITLE} description={CUSTOM_POPUP.ADMIN_DESCRIPTION} buttonText={CUSTOM_POPUP.BUTTON_TEXT} popUpWidth="max-w-md" showPopup={showDeletePopup} setShowPopup={setShowDeletePopup} handleConfirm={() => { }} />
          <Table id={TABLE_ID.ADMIN_LIST} tableData={adminTableData} tableHeadingArray={tableHeadingArray} isLoading={isLoading} handleDelete={() => setShowDeletePopup(prev => !prev)}>
            <div className="h-[60px] bg-[#604691]">
              <h3 className="text-center w-full text-white p-[12px] text-[22px] float-left">
                UVDI ADMINS
              </h3>
              <SimpleButton className="absolute right-[20%] mt-[12px] text-white border-white font-medium font-sans uppercase" onClick={() => { }}>Add</SimpleButton>
              <SearchField classess="absolute float-right right-0 mt-[12px] w-[20%] pl-[10px]" handleSearch={(val) => {getAdminList()}} />
            </div>
          </Table>
        </div>
      </div>
    </>
  )
}