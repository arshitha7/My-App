import developer from "../../../assets/images/imageset1/developer.e7209b1e.png";
import flower from "../../../assets/images/imageset1/flower-top.67ec6c53.png";
import smallMon from "../../../assets/images/imageset1/small-monitor.102e8e08.png";
import smallTop from "../../../assets/images/imageset1/small-top.509c69c5.png";
import table from "../../../assets/images/imageset1/table.46172d2d.png";
import target from "../../../assets/images/imageset1/target.65f374e8.png";
import windowOut from "../../../assets/images/imageset1/2306.w064.n002.405B.p1.405.jpg";
import { motion } from "framer-motion";

const images = [
  {
    src: developer,
    alt: "developer",
    className:
      "z-10 w-[150px] h-[230px] bottom-0 left-1/2 right-1/2 -translate-x-1/2",
  },
  {
    src: flower,
    alt: "flower",
    className: "z-10 w-[100px] h-[150px] bottom-0",
  },
  {
    src: smallMon,
    alt: "monitor",
    className: "w-[100px] h-[100px] bottom-[40%] left-[65%] right-1/2",
  },
  {
    src: smallTop,
    alt: "smallflower",
    className: "w-[50px] h-[80px] bottom-28 left-[85%]",
  },
  {
    src: table,
    alt: "table",
    className: "w-[400px] h-[120px] bottom-0 left-[20%] ",
  },
  { src: target, alt: "target", className: "w-[70px] h-[70px] top-0 right-10" },
  {
    src: windowOut,
    alt: "windowOut",
    className: "w-[250px] h-[150px] absolute top-7 left-[8%]",
  },
];

export default function Animation1() {
  // const getSpecificColor = () => {
  //   // Only green and purple colors
  //   const colors = ["#33FF57", "#FF33F0"]; 
  //   return colors.map((color) => color);
  // };

  return (
    <section className="relative w-[420px] -ml-12 md:ml-0 h-[300px] md:w-[500px] md:h-[300px] ">
      {/* Rotating Circles */}
       {/* <div className="absolute w-[500px] h-[900px] rounded-full -bottom-28 left-16">
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full bottom-10 right-40 `}
          style={{
            backgroundColor: getSpecificColor(), // Use only green or purple
           
            transformOrigin: "0 -200px", // Circle radius (distance from center to dot position)
          }}
          initial={{
            rotate: i * 180, // 50% gap (opposite positions)
          }}
          animate={{
            rotate: [i * 180, i * 180 + 360], // Full rotation
          }}
          transition={{
            repeat: Infinity,
            duration: 10, // Animation duration
            ease: "linear",
          }}
        />
      ))}
    </div> */}

    

      {images.map((image, index) => (
        <motion.img
          key={image.alt}
          src={image.src}
          alt={image.alt}
          className={`absolute ${image.className}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      ))}
    </section>
  );
}
