import Underline from "../../ui/Underline";
import Pattern from "../../ui/RandomPatterns4.jsx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";

const contents = [
  {
    image:
      "https://startp-next.envytheme.com/_next/static/media/blog9.cafd6324.jpg",
    date: "Admin / August 15, 2022",
    title: "Making Peace With The Feast Or Famine Of Freelancing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    buttonLink: "/",
  },
  {
    image:
      "https://startp-next.envytheme.com/_next/static/media/blog10.b0a38dc5.jpg",
    date: "Admin / August 15, 2022",
    title: "Making Peace With The Feast Or Famine Of Freelancing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    buttonLink: "/",
  },
  {
    image:
      "https://startp-next.envytheme.com/_next/static/media/blog11.fc980b16.jpg",
    date: "Admin / August 15, 2022",
    title: "Making Peace With The Feast Or Famine Of Freelancing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
    buttonLink: "/",
  },
];

export default function OurRecentStory() {
  const [btnHover, setBtnHover] = useState(null);
  return (
    <div className="font-jost py-20 relative bg-white">
      <Pattern />
      <section className="flex flex-col items-center justify-center text-center ">
        <h1 className="text-[#0E314C] text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-5">
          Our Recent Story
        </h1>
        <div className="">
          <Underline />
        </div>
        <p className="text-base text-gray-500 leading-6 mb-10 max-w-lg mx-auto ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          sapiente, reiciendis beatae consequuntur ratione odit accusantium
          pariatur explicabo totam optio
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 md:p-10 mx-5">
        {contents?.map((item, index) => (
          <div
            key={index}
            className="flex z-10 flex-col gap-7 bg-gradient-to-r from-green-100 via-green-100 to-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* Content */}
            <div className="p-4">
              <p className="text-base text-gray-500 mb-2">{item.date}</p>
              <h1 className="text-[#0E314C] text-lg font-semibold mb-2">
                {item.title}
              </h1>
              <p className="text-base text-gray-500 ">{item.description}</p>
              {/* Button */}
              <button
                onMouseEnter={() => setBtnHover(index)}
                onMouseLeave={() => setBtnHover(null)}
                className="mt-4 flex items-center text-sm bg-white rounded-full p-2 px-5 font-semibold text-[#0E314C] hover:text-customGreen transition-colors duration-300"
              >
                Read Story
                <MdKeyboardDoubleArrowRight
                  className={`text-lg transform transition-transform duration-500 ${
                    btnHover === index ? "translate-x-3" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
