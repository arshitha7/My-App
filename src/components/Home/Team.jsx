import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from "react";
import "../../css/CustomSlickSlide.css";
import Underline from "../../ui/Underline.jsx";
import Team1 from "../../assets/Team/WhatsApp Image 2024-12-23 at 7.04.04 PM.jpeg"
import Team2 from "../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.13 PM.jpeg"
import Team3 from "../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.49 PM.jpeg"
import Team4 from "../../assets/Team/WhatsApp Image 2024-12-23 at 7.47.59 PM.jpeg"


const IconStyle =
  "h-4 w-4 cursor-pointer text-violet-500 hover:text-green-500 transform hover:-translate-y-1 transition-all duration-500";
const content = [
  {
    title: "Mahesh",
    role: "Full Stack developer",
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
    image:Team1,
      
  },
  {
    title: "Jinu Martin",
    role: "Director",
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
    image:Team2,
  },
  {
    title: "Shabin",
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
    image:Team3,
  },
  {
    title: "Arshitha",
    role: "HOP",
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
    image:Team4,
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
    image:
      "https://img.freepik.com/free-photo/3d-portrait-people_23-2150793856.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
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
    image:
      "https://img.freepik.com/free-photo/view-3d-man-using-laptop_23-2150709796.jpg?t=st=1734533673~exp=1734537273~hmac=1e290ff0f1ea4d1db8d72fd1c4ec1a75a63c7a91a5327c8865252d7c72f7fa7a&w=740",
  },
];

export default function AllTeam() {
  const [hover, setHover] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,            
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (sliderRef.current) {
  //       sliderRef.current.slickNext();
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-gray-100 py-20 font-jost">
      <Anim>
        <div className="flex flex-col pb-10 md:pb-20 items-center justify-center">
          <h1 className="text-[#0E314C] text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
            Meet Our Team
          </h1>
          <Underline />

          <p className="text-sm text-gray-500 text-center max-w-lg leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Anim>

      {/* Scrollable Cards Section */}
      <Slider {...settings} ref={sliderRef}>
        {content.map((data, i) => (
          <div key={i} className="px-4">
            <motion.div
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="relative flex flex-col items-center text-center bg-gradient-to-tr from-white to-white rounded-lg group p-6 hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <motion.div
                className="absolute top-28 w-full bg-gray-100"
                initial={{ opacity: 1, height: "10px" }}
                animate={{
                  opacity: hover === i ? 0 : 1,
                  height: hover === i ? 0 : "10px",
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.7 }}
              />
              <motion.img
                src={data.image}
                alt={data.title}
                className="w-[130px] h-[130px] z-10 object-cover mt-4 rounded-full border-2 border-green-200 group-hover:border-green-500 transition-all duration-500"
                transition={{ duration: 0.3 }}
              />
              <div className="mt-6 bg-custom-gradient py-2 w-full rounded-3xl group-hover:rounded-none transition-all duration-700">
                <h3 className="text-base tracking-wider font-semibold text-white">
                  {data.title}
                </h3>
                <p className="text-xs text-white ">{data.role}</p>
              </div>
              <div className=" justify-center space-x-4 mt-4">
                {data.media.map((icon, idx) => (
                  <div key={idx} className="flex flex-row gap-3">
                    {Object.values(icon)}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4">{data.description}</p>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
