import { Link } from "react-router-dom";
import Jezh from "../assets/icons/[removal.ai]_abada9aa-5991-43bc-beb5-8f7be43142e9-jezh (1).png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AnimBT from "../ui/AnimBT.jsx";
import ANim from "../ui/Anim.jsx";
// import RandomPatterns2 from "../ui/RandomPatterns4.jsx";
import { CiLinkedin, CiTwitter, CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const linkStyle = "text-gray-400 hover:text-customGreen transition";
  const iconStyle = { marginRight: "8px", color: "rgb(156, 163, 175)" };

  return (
    <footer className="relative font-jost bg-black ">
      <AnimBT>
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between py-12 px-6 md:px-12 lg:px-24 space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Jezh} alt="JezhTechLogo" className="h-32 w-32 mb-4" />
            <p className="text-gray-300 text-sm text-center md:text-left">
              Empowering technology to build a better future.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-gray-100 font-semibold text-lg">Company</h1>
            <Link to="/about-us" className={linkStyle}>
              About Us
            </Link>
            <Link to="/our-team" className={linkStyle}>
              Our Team
            </Link>
            <Link to="/partners" className={linkStyle}>
              Partners
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-gray-100 font-semibold text-lg">Products</h1>
            <Link to="/products/software" className={linkStyle}>
              Software
            </Link>
            <Link to="/products/hardware" className={linkStyle}>
              Hardware
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-gray-100 font-semibold text-lg">Resources</h1>
            <Link to="/blog" className={linkStyle}>
              Blog
            </Link>
            <Link to="/career" className={linkStyle}>
              Career
            </Link>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-gray-100 font-semibold text-lg">Contact Us</h1>
            <p className=" flex items-center">
              <EmailOutlinedIcon sx={iconStyle} />
              <a href="mailto:info@jezhtechnologies.com" className={linkStyle}>
                info@jezhtechnologies.com
              </a>
            </p>
            <p className="text-gray-600 flex items-center ">
              <ContactPhoneOutlinedIcon sx={iconStyle} />
              <a href="tel:+919385722102" className={linkStyle}>
                +91 9385722102
              </a>
              ,{" "}
              <a href="tel:+918428807007" className={linkStyle}>
                +91 8428807007
              </a>
            </p>
            <p className="text-gray-600 flex items-center">
              <LanguageOutlinedIcon sx={iconStyle} />
              <a
                href="https://www.jezhtechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                www.jezhtechnologies.com
              </a>
            </p>
            <div className="grid grid-cols-4  h-10 w-10 text-2xl gap-10 text-gray-400  ">
              <a href="https://www.instagram.com/jezh_technologies?igsh=MXF0N2h3OHZyaWh2bg==">
                <FaInstagram className="transform hover:-translate-y-1 hover:text-customGreen transition-all duration-300 cursor-pointer" />
              </a>
             
                {" "}
                <CiFacebook className="transform hover:-translate-y-1 hover:text-customGreen transition-all duration-300 cursor-pointer" />
             
              <a href="https://x.com/Jezhtech?t=Br12bODBOtRqVXX5xFYOug&s=08">
                {" "}
                <CiTwitter className="transform hover:-translate-y-1 hover:text-customGreen transition-all duration-300 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/jezh-technologies/">
                <CiLinkedin className="transform hover:-translate-y-1 hover:text-customGreen transition-all duration-300 cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="text-white grid grid-cols-1 gap-5">
            <h1 className="opacity-0">Career</h1>

            <Link to="/services" className={linkStyle}>
              Services
            </Link>
            <Link to="/sovablu" className={linkStyle}>
              Sovablu
            </Link>
            <Link to="/contact" className={linkStyle}>
              Contact Us
            </Link>
            <Link to="/privacy-policy" className={linkStyle}>
              Privacy - Policy
            </Link>
          </div>
        </div>
      </AnimBT>

      {/* Location Cards */}
      <div className="relative z-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 lg:px-24">
          <ANim delay={0.3}>
            <div className="border border-gray-600  p-4 rounded text-center shadow-sm">
              <h2 className="text-gray-100 text-lg font-semibold mb-2">
                India - Kanyakumari
              </h2>
              <p className="text-gray-400 text-sm">
                Sri Sai Complex,
                <br />
                Nagercoil, India - 629001
              </p>
            </div>
          </ANim>
          <ANim delay={0.4}>
            <div className="border border-gray-600  p-4 rounded text-center shadow-sm">
              <h2 className="text-gray-100 text-lg font-semibold mb-2">
                India - Coimbatore
              </h2>
              <p className="text-gray-400 text-sm">
                SRCAS IC, Nava India
                <br />
                Coimbatore, India - 641006
              </p>
            </div>
          </ANim>
          <ANim delay={0.5}>
            <div className="border border-gray-600  p-4 rounded text-center shadow-sm">
              <h2 className="text-gray-100 text-lg font-semibold mb-2">
                UAE - Dubai
              </h2>
              <p className="text-gray-400 text-sm">
                Sapphire Tower Deira,
                <br />
                Dubai, UAE - 780610
              </p>
            </div>
          </ANim>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800"></div>
      <div className="relative z-10 py-4 text-center text-gray-600 text-sm">
        Copyright © {new Date().getFullYear()} Jezh Technologies. All rights
        reserved.
      </div>
    </footer>
  );
}
