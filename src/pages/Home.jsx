import Header from "../components/Home/Header.jsx";
import ThirSection from "../components/Home/ThirSection.jsx";
import ForthSection from "../components/Home/ForthSection.jsx";
import FifthSection from "../components/Home/FifthSection.jsx";
import SixthSection from "../components/Home/SixthSection.jsx";
import LastSection from "../components/Home/LastSection.jsx";
// import { Divider } from "@mui/material";
// import SeventhSection from "../components/Home/SeventhSection.jsx";
import Service from "../components/Home/Service.jsx";
import OurFeatures from "../components/Home/OurFeatures.jsx";
// import RecentWorks from "../components/Home/RecentWorks.jsx"
import WhatUsersSaying from "../components/Home/WhatUsersSaying.jsx";
// import News from "../components/Home/News.jsx";
import { Helmet } from "react-helmet-async";
// import Team from "../components/Home/Team.jsx"
// import PricingPlans from "../components/Home/PricinPlans.jsx"
import Accorian from "../components/Accordian.jsx"

export default function Home() {
  return (
    <>

    {/* Meta Tags */}
    <Helmet>
        <title>Jezh Technologies | Your Digital Innovation Partner</title>
        <meta
          name="description"
          content="Elevate your digital future with Jezh Technologies. We offer cutting-edge solutions in web development, IoT, AI, e-commerce, R&D, and AI/Robotics workshops."
        />
        <meta name="keywords" content="Web Development, IoT, AI, E-commerce, Robotics, Innovation" />
        <meta name="author" content="Jezh Technologies" />
      </Helmet>

      
      <Header />
      <Service/>
      <ThirSection />
      <ForthSection />
      <OurFeatures/>
      <FifthSection />
      <SixthSection />
      <WhatUsersSaying/>
      <LastSection />
      <Accorian/>
    </>
  );
}
