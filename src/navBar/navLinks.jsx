import { MdContactSupport } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { IoHardwareChip } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";

export const navLinks = [
  { path: "", element: "Company", hasDropdown: true },
  { path: "/services", element: "Services" },
  { path: "", element: "Products", hasDropdown: true },
  { path: "/sovablu", element: "Sovablu" },
  { path: "", element: "Resources", hasDropdown: true },
];

export const dropdownLinks = [
  {
    path: "/about-us",
    element: "About Us",
    ref: "Company",
    icon: <MdContactSupport />,
    des: "Innovating technology to build a smarter, connected world.",
  },
  {
    path: "/our-team",
    element: "Our Team",
    ref: "Company",
    icon: <RiTeamFill />,
    des: "Passionate experts creating solutions that lead and inspire.",
  },
  {
    path: "/partners",
    element: "Partners",
    ref: "Company",
    icon: <FaHandshake />,
    des: "Strategic partnerships driving the future of technology.",
  },
  {
    path: "/products/software",
    element: "Software",
    ref: "Products",
    icon: <GrCloudSoftware />,
    des: "Intuitive software transforming ideas into seamless experiences.",
  },
  {
    path: "/products/hardware",
    element: "Hardware",
    ref: "Products",
    icon: <IoHardwareChip />,
    des: "Cutting-edge hardware connecting the physical and digital worlds.",
  },
  {
    path: "/blog",
    element: "Blog",
    ref: "Resources",
    icon: <FaBlog />,
    des: "A hub of innovation and insights to inspire and empower.",
  },
  {
    path: "/career",
    element: "Career",
    ref: "Resources",
    icon: <FaBusinessTime />,
    des: "Building a vibrant community and shaping the digital conversation.",
  },
];
