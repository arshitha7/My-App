import { Link,useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { navLinks, dropdownLinks } from "./navLinks.jsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {motion} from "framer-motion"

export default function ResponsiveNav() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [dropdownState, setDropdownState] = useState({});

  const toggleDropdown = (element) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [element]: !prevState[element],
    }));
  };

   const navigate =useNavigate()
  const handleContactPage = () => {
     navigate('/contact')
     setOpen(false)
  }

  return (
    <div className="relative">
      {/* Navbar Toggle Button */}
      <div className="flex justify-end items-center p-4">
        <button onClick={() => setOpen(!open)} className="text-gray-950 z-20">
          {open ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navigation Drawer */}
      {open && (
        <motion.div 
         initial={{height:0,width:0}}
         animate={open?{height:'100%',width:'100%'}:{height:0,width:0}}
         transition={{duration:0.2}}
          className="fixed top-0 left-0  bg-gray-50 z-10 p-6 overflow-y-auto">
          <ul className="flex flex-col mt-14 gap-6 text-gray-800 ">
            {navLinks?.map((item) => (
              <li key={item.element} className="relative">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className={`font-semibold py-2 flex items-center justify-between w-full transition-all duration-300 ${
                      item.hasDropdown ? "cursor-default" : "cursor-pointer"
                    } hover:text-gray-700`}
                    onClick={() => {
                      if (item.hasDropdown) {
                        setActiveLink(
                          activeLink === item.element ? null : item.element
                        );
                        toggleDropdown(item.element);
                      } else {
                        setOpen(false);
                      }
                    }}
                  >
                    <span>{item?.element}</span>
                    {item?.hasDropdown &&
                      (dropdownState[item.element] ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      ))}
                  </Link>
                </div>

                {/* Dropdown */}
                {item?.hasDropdown && activeLink === item.element && (
                  <ul className="pl-4 mt-2 space-y-2 bg-gray-100 rounded-lg py-3">
                    {dropdownLinks
                      .filter((subItem) => subItem.ref === item.element)
                      .map((subItem) => (
                        <li key={subItem.element} className="flex items-center">
                         <div>
                          {subItem.icon}
                         </div>
                          <div>
                            <Link
                              to={subItem.path}
                              className="text-gray-800 hover:text-gray-700 block font-semibold py-1"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.element}
                            </Link>
                            <p className="ml-2 text-base text-gray-500">
                              {subItem.des}
                            </p>
                          </div>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Login and Signup Buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <button
            onClick={handleContactPage}
             className="bg-customGreen text-gray-50 font-semibold px-5 py-2 rounded-lg border border-green-700 hover:bg-green-700 transition-all duration-300">
              Contact Us
            </button>
           
          </div>
        </motion.div>
      )}
    </div>
  );
}
