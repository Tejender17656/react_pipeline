import TransitionsModal from "@components/atom/Modal/Modal";
import DashboardContent from "@components/molecules/DashboardContent/DashboardContent";
import HomeContent from "@components/molecules/HomeContent/HomeContent";
import LoginForm from "@components/molecules/LoginForm/LoginForm";
import { useAppContext } from "@context/Context";
import ForgotPasswordForm from "@components/molecules/ForgotPasswordForm/ForgotPasswordForm";

export default function Home() {
  const { isUserLoggedIn, currentModal } = useAppContext();

  return (
    <div className="app">
      <title>UVDI-360 UV System</title>
      <div className="my-5">
        <h1 className="text-[#7b51a1] text-center text-[2em] font-bold">
          Welcome to the UVDI-360 UV System
        </h1>
        <h2 className="text-[#58595B] text-center font-normal">
          Combining Powerful UV Technology with Smart Data Reporting
        </h2>
      </div>
      {currentModal === "login" && (
        <TransitionsModal>
          <LoginForm />
        </TransitionsModal>
      )}
      {currentModal === "forgot" && (
        <TransitionsModal>
          <ForgotPasswordForm />
        </TransitionsModal>
      )}
      {isUserLoggedIn ? <DashboardContent /> : <HomeContent />}
    </div>
  )
}