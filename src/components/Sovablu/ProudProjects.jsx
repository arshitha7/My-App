import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/CustomSlickSlide.css";
import { useState } from "react";
import Underline from "../../ui/Underline";
import AddIcon from "@mui/icons-material/Add";
import { AnimatePresence, motion } from "framer-motion";
import Pattern from "../../ui/Pattern5.jsx";

const ImageCarousel = () => {
  const slides = [
    {
      img: "https://img.freepik.com/free-psd/3d-render-marketing-sale-background_23-2151665129.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Media",
    },
    {
      img: "https://img.freepik.com/free-vector/oil-prices-industry_24877-50042.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Oil & Gas",
    },
    {
      img: "https://img.freepik.com/free-photo/still-life-supply-chain-representation_23-2149827291.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Supply Chain, Logistics",
    },
    {
      img: "https://img.freepik.com/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137472.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "IT Industry",
    },
    {
      img: "https://img.freepik.com/free-psd/human-organs-character-composition_23-2150610260.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Health Care",
    },
    {
      img: "https://img.freepik.com/free-psd/marketing-concept-with-laptop_23-2149835023.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Call Center",
    },
    {
      img: "https://img.freepik.com/free-psd/3d-rendering-cybersecurity-background_23-2151703624.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Forensics",
    },
    {
      img: "https://img.freepik.com/free-vector/education-tree-concept_1284-10861.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Education",
    },
    {
      img: "https://img.freepik.com/free-psd/3d-background-with-architecture-engineering-items_23-2150730444.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Construction",
    },
    {
      img: "https://img.freepik.com/free-vector/industrial-augmented-reality-isometric-composition_1284-29750.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Manufacturing",
    },
    {
      img: "https://img.freepik.com/premium-psd/3d-illustration-modern-green-eco-factory-building-eco-industrial-development-concept_554821-2155.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Facility Management",
    },
    {
      img: "https://img.freepik.com/premium-psd/very-peri-3d-user-interface-icon-computer-rendering_472007-165.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Web Design ",
    },
    {
      img: "https://img.freepik.com/free-psd/3d-illustration-female-character-grocery-store_23-2150953964.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Retail Chain",
    },
    {
      img: "https://img.freepik.com/free-photo/leader-holding-float_1156-566.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Manpower Staffing Agencies",
    },
    {
      img: "https://img.freepik.com/premium-photo/office-team-partner-3d-character-illustration_839035-197886.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Other Contractual Workforce",
    },
    {
      img: "https://img.freepik.com/premium-photo/pictogram-people-network-connections-3d-rendering_519469-3342.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      heading: "Other Distributed Workforce",
    },
  ];

  const settings = {
    dots: true, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Enable scrollable arrows
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: true,
    focusOnSelect: true,
    adaptiveHeight: true,
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

  const [hover, setHover] = useState(null);

  return (
    <div className="relative py-10 font-jost">
      <Pattern />
      <div className="flex flex-col items-center justify-center max-w-3xl mb-8 mt-4 mx-auto text-center">
        <h1 className="text-[#0E314C] text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
          Target Industries
        </h1>
        <Underline />
        <p className="text-base text-gray-500 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mx-5 ml-16 py-10">
        <Slider {...settings} className="flex gap1-10">
          {" "}
          {/* Adjusted the gap to 10 */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex flex-col  " // Added mx-4 for horizontal spacing
            >
              {/* Image container */}
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-[90%] h-[250px] object-cover"
                />
                {/* Overlay animation */}
                <AnimatePresence>
                  {hover === index && (
                    <>
                      {/* Top overlay */}
                      <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "-50%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 w-[90%] bg-black opacity-50"
                      />
                      {/* Bottom overlay */}
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "50%" }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 bg-black w-[90%] opacity-50"
                      />
                      {/* Icon */}
                      <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                          delay: 0.3,
                        }}
                        className="absolute top-5 right-10  bg-green-400 rounded-full text-white p-2 shadow-lg hover:bg-purple-400 transition-colors duration-500"
                      >
                        <AddIcon sx={{ fontSize: "25px" }} />
                      </motion.button>
                    </>
                  )}
                </AnimatePresence>
              </div>
              {/* Title */}
              <h2 className="text-center mt-2 text-base font-semibold text-gray-700 w-[90%]">
                {slide.heading}
              </h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
