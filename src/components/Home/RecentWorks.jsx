import { useEffect, useRef, useState } from "react";
import Anim from "../../ui/Anim.jsx";
import { motion } from "framer-motion";
import { TfiAgenda } from "react-icons/tfi";
import { TfiBasketball } from "react-icons/tfi";
import { IoBookOutline } from "react-icons/io5";
import { MdInsertChartOutlined } from "react-icons/md";
import { TiChartPieOutline } from "react-icons/ti";
import { TiThLargeOutline } from "react-icons/ti";
import Underline from "../../ui/Underline.jsx";

const ScrollingCards = () => {
  const scrollContainerRef = useRef(null);
  const [hover, setHover] = useState("");

  // Scroll handler for buttons
  const handleScroll = (direction) => {
    const { current } = scrollContainerRef;
    if (current) {
      const cardWidth = current.firstChild.offsetWidth + 16; // Card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("right");
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Data for cards
  const cardsData = [
    {
      image:
        "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      title: "Title",
      icon: TfiAgenda,
    },
    {
      image:
        "https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac felis ut magna aliquet.",
      title: "Title",

      icon: TiChartPieOutline,
    },
    {
      image:
        "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor justo nec quam.",
      title: "Title",

      icon: TfiBasketball,
    },
    {
      image:
        "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec lacus tincidunt, blandit.",
      title: "Title",

      icon: IoBookOutline,
    },
    {
      image:
        "https://img.freepik.com/premium-photo/vr-entertainment_53876-88376.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod enim sit amet.",
      title: "Title",

      icon: TiThLargeOutline,
    },
    {
      image:
        "https://img.freepik.com/premium-photo/smart-home-interface-with-augmented-realty-iot-object-interior-design_756748-3181.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia sapien at ligula.",
      title: "Title",

      icon: MdInsertChartOutlined,
    },
  ];

  return (
    <div className="py-20 font-jost">
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 ">
          Our Recent Works
        </h1>
        <Underline />

        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Scroll buttons */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-lg hover:bg-gray-600"
        >
          ←
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 shadow-lg hover:bg-gray-600"
        >
          →
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll gap-4 p-4 scrollbar-hide"
        >
          {cardsData.map((card, index) => (
            <motion.div
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              key={index}
              className="relative min-w-[250px] lg:min-w-[300px] h-72 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-[300px] h-[300px] object-cover"
              />

              {/* Hover Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={hover === index ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-t from-green-500/70 to-customGreen/70 bg-opacity-50 flex flex-col justify-evenly p-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20, x: 20 }}
                  animate={
                    hover === index
                      ? { opacity: 1, y: 10, x: -10 }
                      : { opacity: 0, y: -20, x: -10 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute cursor-pointer top-4 right-4 text-4xl text-gray-800 hover:text-gray-100 transition-colors duration-200"
                >
                  <span className="bg-gray-100 rounded-full w-10 h-10 p-2 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                    <card.icon />
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    hover === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-white font-semibold text-lg mt-24"
                >
                  <motion.h1 className="text-white font-semibold text-xl md:text-lg cursor-pointer max-w-fit hover:underline transition-all duration-300 mb-2">
                    {card.title}
                  </motion.h1>

                  <motion.p className="text-white font-medium text-sm md:text-base">
                    {card.paragraph}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCards;
