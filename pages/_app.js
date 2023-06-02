import React from 'react'
import { createContext } from "react";
import Header from '@components/organisms/Header/Header';
import Footer from '@components/organisms/Footer/Footer'
import { Toaster } from 'react-hot-toast';
import Cookies from "js-cookie";
import LogoutPopup from '@components/molecules/LogoutPopup/LogoutPopup';
import '../styles.css'

export const AppContext = createContext();

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = React.useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    remember: false,
    isUserLoggedIn: false,
  });
  const [currentModal, setCurrentModal] = React.useState("login");

  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token && !isUserLoggedIn) {
      setIsUserLoggedIn(true);
    }
  }, []);

  React.useEffect(() => {
    const token = Cookies.get("token");
    if (!token && isUserLoggedIn) {
      if(userData?.remember) {
        Cookies.set("token", JSON.stringify({
          name: userData.name,
          email: userData.email,
          remember: userData.remember,
          isUserLoggedIn: isUserLoggedIn,
        }), { expires: 7 });
      } else {
        // session cookie
        Cookies.set("token", JSON.stringify({
          name: userData.name,
          email: userData.email,
          remember: userData.remember,
          isUserLoggedIn: isUserLoggedIn,
        }));
      }
    }
  }, [isUserLoggedIn]);


  return (
    <AppContext.Provider
      value={{ open, setOpen, userData, setUserData, isUserLoggedIn, setIsUserLoggedIn, currentModal, setCurrentModal, isSideNavOpen, setIsSideNavOpen }}
    >
      <Header />
      <Toaster />
      {open && currentModal === "logout" && <LogoutPopup />}
      <Component {...pageProps} />
      <Footer />
    </AppContext.Provider>
  )
}
export default MyApp