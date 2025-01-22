import {
  FaBullhorn,
  FaPaintBrush,
  FaLaptopCode,
  FaVideo,
  FaWindowMaximize,
  FaEye,
  FaMobileAlt,
  FaCube,
} from "react-icons/fa";

const careerList = [
  {
    career: "Digital Marketer Executive",
    icon: <FaBullhorn />,
    quote: "Grow our brand and engage our audience. We're looking for a creative and data-driven digital marketer to join our team. You'll be responsible for developing and executing innovative digital marketing campaigns across various channels to drive brand awareness, generate leads, and increase website traffic.",
  },
  {
    career: "Graphic Designer",
    icon: <FaPaintBrush />,
    quote: "Bring our brand to life with stunning visuals. We're seeking a talented graphic designer with a passion for creating eye-catching and impactful designs. You'll be responsible for developing visual assets for our website, social media, marketing materials, and more.",
  },
  {
    career: "MERN Stack Developer",
    icon: <FaLaptopCode />,
    quote: "Build robust and scalable web applications. We need a skilled MERN Stack developer to join our engineering team. You'll be responsible for designing, developing, and maintaining our web applications using the latest technologies.",
  },
  {
    career: "Video Editor",
    icon: <FaVideo />,
    quote: "Tell our story through compelling video content. We're looking for a dynamic video editor with a keen eye for detail and a passion for storytelling. You'll be responsible for editing and producing high-quality videos for our website, social media, and marketing campaigns.",
  },
  {
    career: "UI/UX Designer",
    icon: <FaWindowMaximize />,
    quote: "Create intuitive and user-friendly digital experiences. We're seeking a talented UI/UX designer to craft exceptional user interfaces and experiences for our products and services. You'll be responsible for conducting user research, designing wireframes and prototypes, and ensuring a seamless user journey.",
  },
  {
    career: "Computer Vision Engineer",
    icon: <FaEye />,
    quote: "Develop cutting-edge computer vision solutions. We're looking for a skilled computer vision engineer to join our research and development team. You'll be responsible for developing and implementing computer vision algorithms for various applications, such as image recognition, object detection, and video analysis.",
  },
  {
    career: "Flutter Developer",
    icon: <FaMobileAlt />,
    quote: "Build beautiful and performant mobile applications. We're looking for a passionate Flutter developer to join our mobile development team. You'll be responsible for designing, developing, and maintaining cross-platform mobile applications using the Flutter framework.",
  },
  {
    career: "Unity 3D Developer",
    icon: <FaCube />,
    quote: "Create immersive and interactive 3D experiences. We're seeking a talented Unity 3D developer to join our game development team. You'll be responsible for developing and implementing 3D game mechanics, environments, and characters using the Unity engine.",
  },
  {
    career: "Three.js Developer",
    icon: <FaCube />, // Using the same cube icon for 3D development
    quote: "Build stunning 3D visualizations and interactive web experiences. We're looking for a skilled Three.js developer to join our front-end development team. You'll be responsible for creating and implementing 3D graphics and animations for our website and web applications using the Three.js library.",
  },
];

const CareerList = () => {
  return (
    <section className="pb-20 pt-10 font-jost">
  <div className="mx-10 md:mx-20 shadow-custom py-10">
    <div className="text-center mt-8 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0E314C] mb-2">
        Embark Your Journey To Success
      </h2>
      <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto text-center font-semibold">
        Seeking Skilled Individuals Across Various Fields to Join Our Dynamic Talent Pool.
      </p>
    </div>

    {/* Career List */}
    <div className="career-list grid grid-cols-1 md:grid-cols-3 gap-6 mx-5 md:mx-10">
      {careerList.map((item, index) => (
        <div
          key={index}
          className="relative career-item flex flex-col justify-between p-6  rounded-lg gap-4 min-h-[300px] "
        >
          <span className="absolute h-[1px] w-[90%] bg-gray-400 bottom-0 left-0"></span>
          <span className={`absolute bg-gray-400 top-0 right-0 ${index===2 | index==5 | index===8 ? "h-0 w-0":" h-[90%] w-[0.5px] "}`}></span>
          <div className="flex flex-col gap-3">
            <div className="icon text-4xl mb-3 text-gray-800">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#0E314C]">{item.career}</h3>
            <p className="text-sm text-gray-500 max-w-lg font-semibold">{item.quote}</p>
          </div>
          <div className="flex justify-start">
            <button
              onClick={() => alert("Application form will open soon!")}
              className="bg-customGreen text-gray-900 py-2 px-6 rounded-md font-semibold text-sm transition-all duration-300 ease-in-out hover:text-white hover:bg-customGreen focus:outline-none focus:ring-2 focus:ring-customGreen focus:ring-offset-2"
            >
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default CareerList;
