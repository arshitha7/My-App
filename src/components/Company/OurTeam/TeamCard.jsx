import { CiFacebook } from "react-icons/ci";
import { AnimatedTestimonials } from "../../../ui/Aceternity/Testimonial.jsx";
import Anim from "../../../ui/Anim.jsx";
import Underline from "../../../ui/Underline.jsx"
import { FiTwitter } from "react-icons/fi";
import {FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Team2 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.13 PM.jpeg"
import Team3 from "../../../assets/Team/WhatsApp Image 2024-12-23 at 7.05.49 PM.jpeg"



const IconStyle =
  "h-5 w-5 cursor-pointer text-purple-500 hover:text-customGreen transform hover:-translate-y-1 transition-all duration-500";


const MyComponent = () => {
  const testimonials = [
 
    {
      name: "Shabin",
      designation: "Founder & CEO",
      media: [
        {
          
          Linkidin: <FaInstagram className={IconStyle} onClick={()=>window.open("https://www.instagram.com/shabin.jezh?igsh=MWg1YWhwMmp0dDEwaA==")}/>,
          github: <CiLinkedin className={IconStyle} onClick={()=>window.open("https://www.linkedin.com/in/shabin-jezh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")}/>,
          faceBook: <CiFacebook className={IconStyle} />,
          Twitter: <FiTwitter className={IconStyle} />,
        },
      ],
      quote:
        "Shabin is the driving force behind Jezh Technologies, leading with vision, innovation, and a commitment to excellence in technology and business growth.",
      src:Team3,
    },
    {
      name: "Jinu Martin",
      designation: "Director & CTO",
      media: [
        {
         
          Linkidin: <FaInstagram className={IconStyle} onClick={()=>window.open("https://www.instagram.com/jinu_martin/")}/>,
          github: <CiLinkedin className={IconStyle} onClick={()=>window.open("https://www.linkedin.com/in/jinu-martin-64512269/")}/>,
          faceBook: <CiFacebook className={IconStyle} />,
          Twitter: <FiTwitter className={IconStyle} />,
        },
      ],
      quote:
        "Jinu Martin is instrumental in shaping Jezh Technologies' overall direction, bringing strategic expertise, leadership, and a commitment to driving growth and innovation.",
      src:Team2,
    },
    
  ];

  return (
    <div className="py-20 font-jost bg-white">
      <div className="flex flex-col pb-10 md:pb-20 items-center justify-center space-x-4">
        
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
              Meet Our Leaders
            </h1>
            <Underline/>
          
        <Anim delay={0.4}>
          <p className="text-base text-gray-500 text-center max-w-lg leading-6">
          Get to know the visionaries behind Jezh, leading the way with expertise, passion, and innovation.
          </p>
        </Anim>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default MyComponent;
