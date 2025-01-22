import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import jezhpng from "../assets/JezhLogo/Removal-40.png";
import { navLinks, dropdownLinks } from "./navLinks.jsx";
import ResponsiveNav from "./responsiveNav.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import SupportButton from "../ui/SwipeButton.jsx/SupportButton.jsx";

export default function HomeNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [hover, setHover] = useState(null);
  const [linkActive, setLinkActive] = useState(null);
  const [activeRef, setActiveRef] = useState(null);
  const [activeDrop, setActiveDrop] = useState(null);

  const handleLinkClick = (element, ref) => {
    setIsDropdownOpen(false);
    setActiveLink("");
    setLinkActive(element);
    setActiveRef(ref);
  };

  const handleClear = async () => {
    setActiveDrop(null);
    setActiveLink(null);
    setActiveRef(null);
    setLinkActive(null);
    activeLink(null);
  };

  const navigate = useNavigate();

  return (
    <div>
      <nav
        className="font-jost z-50 w-full max-w-full flex items-center fixed top-0 bg-white"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 20px 40px -40px inset",
          zIndex: 1000,
        }}
      >
        {/* Logo Section */}
        <Link to="/" className="flex-shrink-0 ml-16">
          <img
            onClick={handleClear}
            src={jezhpng}
            alt="jezhIcon"
            className="h-28 w-28 object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex-grow flex justify-end items-center mr-5">
          <ul className="hidden lg:flex  justify-end items-center list-none ">
            {navLinks.map((item) => (
              <li
                key={item.element}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) {
                    setActiveLink(item.element);
                    setIsDropdownOpen(true);
                  }
                }}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  onClick={() => {
                    setLinkActive(item.element);
                    setActiveRef(null);
                    setActiveDrop(null);
                  }}
                  onMouseEnter={() => setHover(item.element)}
                  onMouseLeave={() => setHover(null)}
                  style={{ fontWeight: 500 }}
                  disabled={item.hasDropdown}
                  to={item.hasDropdown ? "#" : item.path}
                  className={` ${linkActive === item.element || activeRef === item.element || activeDrop === item.element ? "text-customGreen" : "text-gray-600"} 
                  tracking-tight leading-relaxed px-4  py-2 rounded-full transition-all duration-300 
                  transform hover:text-customGreen hover:scale-105  
                    ${item.hasDropdown && isDropdownOpen && activeLink === item.element && "text-customGreen"}
                  ${item.hasDropdown ? "cursor-text" : "cursor-pointer"}`}
                >
                  {item.element}

                  {item.hasDropdown && (
                    <KeyboardArrowDownIcon
                      sx={{
                        transition: "transform 0.5s",
                        transform:
                          hover === item.element ? "translateY(4px)" : "none",
                        "&:hover": {
                          transform: "translateY(4px)",
                        },
                      }}
                    />
                  )}
                </Link>

                {item.hasDropdown &&
                  isDropdownOpen &&
                  activeLink === item.element && (
                    <motion.div
                      className=""
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      <div className="absolute left-0 right-0 top-6 bg-transparent h-6 " />
                      <div className="absolute left-1/2 right-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 bg-white z-10 top-12 rotate-45" />

                      <motion.ul className="absolute left-1/2 top-12 -translate-x-1/2 w-96 rounded-2xl bg-white p-2 py-3 shadow-custom">
                        {dropdownLinks
                          .filter((subItem) => subItem.ref === activeLink)
                          .map((subItem) => (
                            <li
                              onMouseEnter={() => setActiveDrop(subItem.ref)}
                              onMouseLeave={() => setActiveDrop(null)}
                              key={subItem.element}
                              className="flex items-center px-4 py-2 transition-transform duration-500 hover:translate-x-2 group relative"
                            >
                              <Link
                                onClick={() =>
                                  handleLinkClick(subItem.element, subItem.ref)
                                }
                                to={subItem.path}
                                className="text-gray-900 cursor-pointer transition-all duration-300 ease-in-out group-hover:text-gray-700"
                              >
                                <motion.div className="text-customGreen text-2xl mr-2 p-2 shadow-lg rounded-full  transition-all duration-500">
                                  {subItem.icon}
                                </motion.div>
                              </Link>
                              <div className="flex flex-col mx-2">
                                <Link
                                  onClick={() =>
                                    handleLinkClick(
                                      subItem.element,
                                      subItem.ref
                                    )
                                  }
                                  to={subItem.path}
                                  className={`${linkActive === subItem.element ? "text-customGreen" : "text-gray-600"} transition-all duration-300 ease-in-out group-hover:text-customGreen`}
                                >
                                  {subItem.element}
                                </Link>

                                <Link
                                  onClick={() =>
                                    handleLinkClick(
                                      subItem.element,
                                      subItem.ref
                                    )
                                  }
                                  to={subItem.path}
                                  className="text-gray-400 cursor-pointer transition-all duration-300 ease-in-out "
                                >
                                  <p className="text-sm ">{subItem.des}</p>
                                </Link>

                                <span className="w-64 mt-3 h-[1px] bg-slate-200"></span>
                              </div>
                            </li>
                          ))}
                      </motion.ul>
                    </motion.div>
                  )}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div
          onClick={() => navigate("/contact")}
          className="hidden lg:flex gap-4 mr-10"
        >
          <SupportButton>Contact Us</SupportButton>
        </div>

        {/* Responsive Navigation */}
        <div className="flex lg:hidden justify-end items-center">
          <ResponsiveNav />
        </div>
      </nav>
    </div>
  );
}
