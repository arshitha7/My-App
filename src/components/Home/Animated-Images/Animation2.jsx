import { motion } from "framer-motion"
import BookSelf from "../../../assets/images/imageset2/book-self.4c1ba03b.png"
import Boxes from "../../../assets/images/imageset2/box.724faf96.png"
import Chair from "../../../assets/images/imageset2/chair.3a6c5b0e.png"
import Cloud from "../../../assets/images/imageset2/cloud.b697388c.png"
import Cup from "../../../assets/images/imageset2/cup.9f4640ff.png"
import Flower from "../../../assets/images/imageset2/flower-top.05493867.png"
import Headphone from "../../../assets/images/imageset2/head-phone.08e4ffaa.png"
import Monitor from "../../../assets/images/imageset2/monitor.33375313.png"
import Table from "../../../assets/images/imageset2/table.62d2a3c3.png"
import Tissue from "../../../assets/images/imageset2/tissue.b798041d.png"
import Waterbottle from "../../../assets/images/imageset2/water-bottle.8e8427d5.png"
import Wifi from "../../../assets/images/imageset2/wifi.fd1600a6.png"
import Mugg from "../../../assets/images/imageset2/mug.047e0c41.png"


const images = [
    { src: BookSelf, alt: "BookSelf", className: "z-10 w-[150px] h-[150px] top-0 left-[10%] " },
    { src: Boxes, alt: " Boxes", className: " w-[450px] h-[250px] bottom-0 left-[2%]" },
    { src: Chair, alt: "Chair", className: "z-20 w-[60px] h-[120px] top-[26%] left-[42%]" },
    { src: Cup, alt: "Cup", className: "z-10 w-[65px] h-[60px]  top-[40%] right-[20%] " },
    { src: Headphone, alt: "Headphone", className: "z-10 w-[20px] h-[20px]  top-8 right-[42%]" },
    { src: Flower, alt: "Flower", className: "z-10 w-[30px] h-[60px]  top-[40%] left-[20%]" },
    { src: Monitor, alt: "Monitor", className: "z-10 w-[50px] h-[70px]  top-2 right-[28%]" },
    { src: Table, alt: "Table", className: "w-[150px] h-[150px]  top-5 right-[20%]" },
    { src: Tissue, alt: "Tissue", className: "z-10 w-[30px] h-[50px] top-6 left-[16%]" },
    { src: Waterbottle, alt: "Waterbottle", className: "z-10 w-[15px] h-[40px]  top-12 right-[23%]" },
    { src: Cloud, alt: "smallflower", className: "w-[120px] h-[120px] -top-20 left-44 z-20" },

    { src: Wifi, alt: "Wifi", className: "z-10 w-[40px] h-[40px]  top-2 left-[25%]" },
    { src: Mugg, alt: "Mugg", className: "z-10 w-[15px] h-[20px]  top-[29%] right-[28%]" },


  ];

export default function Animation2() {
  return (
    <section className="relative w-[420px] -ml-12 md:ml-0 h-[300px] md:w-[500px] md:h-[300px]   ">
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
  )
}
