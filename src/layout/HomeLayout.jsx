import { Outlet } from "react-router-dom";
import HomeNav from "../navBar/HomeNav";
import ScrollToTop from "../components/ScrollToTop";
// import SmoothScroll from "../components/SmoothScroll.jsx";
import Footer from "../components/Footer.jsx"
import { useEffect } from "react";

export default function HomeLayout() {
  useEffect(() => {
    document.documentElement.style.colorScheme = "light";
  }, []);

  return (
    <>
      {/* <SmoothScroll> */}
        <ScrollToTop />
        <HomeNav />
        <Outlet />
        <Footer/>
      {/* </SmoothScroll> */}
    </>
  );
}
