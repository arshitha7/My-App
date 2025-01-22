import { StickyScroll } from "./stickyScroll.jsx";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Anim from "../../Anim.jsx"
import Underline from "../../Underline.jsx";

const IconStyle =
  "h-4 w-4 cursor-pointer text-green-500 hover:text-violet-700 transform hover:-translate-y-2 transition-all duration-500";
const content = [
  {
    title: "Name",
    role: "CEO & Founder",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    content: (
      <div className="h-full w-full flex items-center justify-center   text-white">
        <img
          src="https://img.freepik.com/premium-photo/3d-rendering-teenager-with-laptop-his-hands-surrounded-by-robots_1057-42934.jpg?w=740"
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Name",
    role: "Project Manager",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    content: (
      <div className="h-full w-full flex items-center justify-center   text-white">
        <img
          src="https://img.freepik.com/free-photo/view-3d-woman-using-laptop_23-2150710060.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Name",
    role: "Web Developer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    content: (
      <div className="h-full w-full flex items-center justify-center   text-white">
        <img
          src="https://img.freepik.com/free-photo/3d-render-little-boy-with-laptop-tools_1057-44642.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"
          className="h-full w-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Name",
    role: "UI/UX Designer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi eum autem, numquam eius eligendi. Minima porro reiciendis reprehenderit qui nisi quo, eaque, quod quos, at hic modi laborum. Voluptate.",
    content: (
      <div className="h-full w-full flex items-center justify-center   text-white">
        <img
          src="https://img.freepik.com/free-photo/view-3d-girl-with-open-book_23-2150709876.jpg?t=st=1734178498~exp=1734182098~hmac=27401588a48d99bad9a7a4dda02ef1f7e3a2986fe11656a8b853bf7d8b7ff801&w=740"
          className="h-full w-full object-contain "
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10 font-jost my-10">
      <div className="flex flex-col justify-center items-center  mb-20">
        
          <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight  mb-4">
            Our Awesome Team
          </h1>
          <Underline/>
          
        <Anim delay={0.4}>
        <p className="text-sm text-gray-500 text-center max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </Anim>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
