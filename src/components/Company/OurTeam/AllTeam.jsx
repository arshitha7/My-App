import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Anim from "../../../ui/Anim.jsx";
import { useState } from "react";

import Underline from "../../../ui/Underline.jsx";
import Team1 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.04.04 PM.jpeg";
import Team2 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.13 PM.jpeg";
import Team3 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.49 PM.jpeg";
import Team4 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.47.59 PM.jpeg";
import Sai from "../../../assets/Team/WhatsApp Image 2024-12-30 at 9.04.19 PM.jpeg";
import Midhun from "../../../assets/Team/WhatsApp Image 2024-12-30 at 9.04.32 PM.jpeg";

import SreeParvathy from "../../../assets/Team/Sree Parvathy.jpeg";
import GopiKrishna from "../../../assets/Team/Gopi-Krishna.jpeg";
import Niksha from "../../../assets/Team/Niksha.jpeg";
import Smrithy from "../../../assets/Team/Smirthy.jpeg";
import GiftyMol from "../../../assets/Team/GiftyMol.jpeg";
import VishnuNarayanan from "../../../assets/Team/Vishnu Narayanan.jpeg";
import Subash from "../../../assets/Team/Subash.jpeg";
import Anish from "../../../assets/Team/Anish.jpeg";
import KeerthyVasan from "../../../assets/Team/Keerthi Vasan.jpeg";
import Ramees from "../../../assets/Team/Ramees.jpeg";
import Neeraj from "../../../assets/Team/Neeraj.jpeg";
import Dharani from "../../../assets/Team/Dharani.jpeg"


const IconStyle =
  "h-4 w-4 cursor-pointer text-violet-500 hover:text-green-500 transform hover:-translate-y-1 transition-all duration-500";
const content = [
  {
    title: "Shabin",
    role: "Founder & CEO",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Shabin is the driving force behind Jezh Technologies, leading with vision, innovation, and a commitment to excellence in technology and business growth.",
    image: Team3,
  },
  {
    title: "Jinu Martin",
    role: "Director & CTO",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Jinu Martin is instrumental in shaping Jezh Technologies' overall direction, bringing strategic expertise, leadership, and a commitment to driving growth and innovation.",
    image: Team2,
  },

  {
    title: "Arshitha",
    role: "Head of Operation",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Arshitha plays a key role at Jezh Technologies, ensuring smooth processes, efficient management, and a steadfast commitment to operational excellence and growth.",
    image: Team4,
  },

  {
    title: "Sai Srikanth",
    role: "Chief Operating Officer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Sai Srikanth leads with a focus on operational excellence, driving efficiency, innovation, and seamless execution across all functions at Jezh Technologies for optimal results.",
    image: Sai,
  },
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
      "Mahesh is a skilled and dedicated developer, committed to crafting innovative and efficient web solutions, enhancing user experiences with each project.",
    image: Team1,
  },
  {
    title: "Mithun Shaker",
    role: "Technical Lead",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Mithun is the mastermind behind our cutting-edge solutions, combining technical expertise, innovative thinking, and a passion for excellence in delivering top-tier technology.",
    image: Midhun,
  },

  {
    title: "Dharani",
    role: " Graphic Designer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Dharani creates visually striking and professional designs, elevating Jezh Technologies' brand identity with creativity, precision, and a keen eye for detail and innovation.",
    image:Dharani,
  },
  {
    title: "Sree Parvathi",
    role: "Content Writer",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Sree Parvathi shapes our narrative with creativity and precision, delivering content that resonates with Jezh Technologies' vision and engages our audience effectively.",
    image: SreeParvathy,
  },
  {
    title: "Gopi Krishna",
    role: "Cyber Security",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Gopi Krishna focuses on safeguarding Jezh Technologies' digital assets, applying his expertise to protect against emerging cybersecurity threats with precision and vigilance.",
    image: GopiKrishna,
  },
  {
    title: "Niksha",
    role: "IOT Research Assistant -Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Niksha supports our IoT research efforts with dedication and curiosity, contributing to innovative projects and solutions with enthusiasm, precision, and unwavering commitment.",
    image: Niksha,
  },
  {
    title: "Smirthy",
    role: "IOT Research Assistant -Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Smirthy brings fresh insights to our IoT projects, assisting with research and development, and contributing to innovative solutions as an enthusiastic intern at Jezh Technologies.",
    image: Smrithy,
  },
  {
    title: "Gifty",
    role: "Digital Marketer - Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Gifty plays a key role in driving our digital marketing efforts, contributing fresh ideas and energy to elevate Jezh Technologies' online visibility and engagement.",
    image: GiftyMol,
  },
  {
    title: "Vishnu Narayanan",
    role: "Digital Marketer - Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Vishnu Narayanan drives our digital marketing strategies, blending creativity with analytics to boost Jezh Technologies' online presence and enhance customer engagement.",
    image: VishnuNarayanan,
  },
  {
    title: "Muhammed Ramees ",
    role: "Full stack developer - Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Muhammed Rameez Khan is dedicated to creating dynamic and scalable web applications, leveraging his full-stack development expertise to deliver efficient solutions.",
    image: Ramees,
  },
  {
    title: "Keerthi Vasan",
    role: "No Code developer - Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Keerthi Vasan contributes with a keen interest in no-code development, helping streamline processes and bring innovative solutions to life with a user-friendly approach.",
    image: KeerthyVasan,
  },
  {
    title: "Subash",
    role: "No Code developer - Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Subash brings innovative no-code solutions to life, crafting intuitive and efficient applications that enhance functionality and streamline user experiences.",
    image: Subash,
  },
  {
    title: "Anish",
    role: "No Code developer - Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Anish is dedicated to building intuitive no-code applications, making complex technology accessible, reliable, and innovative while delivering creative and efficient solutions.",
    image: Anish,
  },
  {
    title: "Neeraj",
    role: "No Code developer - Intern",
    media: [
      {
        faceBook: <CiFacebook className={IconStyle} />,
        Twitter: <FiTwitter className={IconStyle} />,
        Linkidin: <FaInstagram className={IconStyle} />,
        github: <FaGithub className={IconStyle} />,
      },
    ],
    description:
      "Neeraj is a skilled no-code developer, passionate about creating seamless applications, simplifying complex processes, and delivering innovative, user-friendly solutions efficiently.",
    image: Neeraj,
  },
];

export default function AllTeam() {
  const [hover, setHover] = useState(null);

 

  return (
    <div className="bg-customWhite py-20 font-jost">
      <Anim>
        <div className="flex flex-col pb-10 md:pb-20 items-center justify-center">
          <h1 className="text-[#0E314C] text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
            Meet Our Team
          </h1>
          <Underline />

          <p className="text-base text-gray-500 text-center max-w-lg leading-6">
          Discover the talented individuals who bring our company to life and drive our success.
          </p>
        </div>
      </Anim>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-5 md:mx-10">
        {content.map((data, i) => (
          <div key={i} className="flex justify-center">
            <motion.div
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="relative flex flex-col items-center text-center shadow-md bg-gradient-to-tr from-white to-white rounded-lg group p-6 hover:shadow-custom transition-shadow duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <motion.div
                className="absolute top-28 w-full bg-customWhite"
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
                className="w-[130px] h-[130px] z-10 object-cover mt-4 rounded-full border-2 border-customGreen/40 group-hover:border-customGreen transition-all duration-500"
                transition={{ duration: 0.3 }}
              />
              <div className="mt-6 bg-gradient-to-t from-green-500 to-customGreen py-2 w-full rounded-3xl group-hover:rounded-none transition-all duration-700">
                <h3 className="text-base tracking-wider font-semibold text-white">
                  {data.title}
                </h3>
                <p className="text-xs text-gray-100">{data.role}</p>
              </div>

              <p className="text-gray-500 text-sm mt-4">{data.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
