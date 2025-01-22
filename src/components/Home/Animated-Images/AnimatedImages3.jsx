import { motion } from "framer-motion"
import Bin from "../../../assets/images/imageset3/bin.60ce7b76.png"
import Book from "../../../assets/images/imageset3/book.11c1c4b9.png"
import Carpet from "../../../assets/images/imageset3/carpet.d8796c37.png"
import Code from "../../../assets/images/imageset3/code.82d4b3f4.png"
import Desktop from "../../../assets/images/imageset3/dekstop.2c917b9e.png"
import Dot from "../../../assets/images/imageset3/dot.ee19ae91.png"
import Flower1 from "../../../assets/images/imageset3/flower-top-big.bbfe9272.png"
import Flower2 from "../../../assets/images/imageset3/flower-top.20c351ba.png"
import Headphone from "../../../assets/images/imageset3/headphone.60a2794c.png"
import Keyboard from "../../../assets/images/imageset3/keyboard.7abcad8f.png"
import Man from "../../../assets/images/imageset3/man.041b90e9.png"
import Pen from "../../../assets/images/imageset3/pen.2ff0aba4.png"
import Table from "../../../assets/images/imageset3/table.45335d41.png"
import TeaCup from "../../../assets/images/imageset3/tea-cup.6956e3ff.png"


const images = [
    { src: Carpet, alt: "Carpet", className: " w-[700px] h-[250px] bottom-0 " },
    { src: Flower1, alt: "Flower1", className: "z-30 w-[80px] h-[250px] top-[10%] right-[-10%]" },
    { src: Man, alt: "Man", className: "z-20 w-[350px] h-[350px]  bottom-[5%] left-[-15%]" },
    { src: Table, alt: "Table", className: "w-[450px] h-[350px]  top-[7%] left-[5%]" },
    { src: Keyboard, alt: "Keyboard", className: "z-10 w-[120px] h-[50px]  top-[31%] left-[36%]" },
    { src: Desktop, alt: "Desktop", className: "z-10 w-[120px] h-[140px]  top-[0%] left-[48%]" },
    { src: Book, alt: "Book", className: "z-10 w-[70px] h-[70px] top-[7%] left-[26%]" },
    { src: Pen, alt: "Pen", className: " w-[50px] h-[80px]  top-[-3%] left-[34%]" },
    { src: Headphone, alt: "Headphone", className: "z-10 w-[70px] h-[60px]  top-[30%] right-[10%]" },
    { src: Flower2, alt: "Flower2", className: "z-10 w-[50px] h-[90px]  top-[30%] right-[24%]" },
    { src: TeaCup, alt: "TeaCup", className: "z-10 w-[45px] h-[90px]  top-[31%] left-[55%]" },
    { src: Bin, alt: "Bin", className: "z-10 w-[90px] h-[110px] bottom-5 right-[3%] " },
    
    { src: Code, alt: "Code", className: "z-10 w-[150px] h-[100px] top-[-20%] right-[5%] " },
    { src: Dot, alt: "Dot", className: " w-[60px] h-[60px]  top-[10%] right-[-5%]" },
    
  ];

export default function Animation2() {
  return (
    <section className=" relative w-[420px] -ml-12 md:ml-0 h-[300px] md:w-[500px] md:h-[400px] ">
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
