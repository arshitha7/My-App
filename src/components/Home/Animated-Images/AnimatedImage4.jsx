import { motion } from "framer-motion"
import Eight from "../../../assets/images/imageset4/eight.70aca56a.png"
import Eleven from "../../../assets/images/imageset4/eleven.293a7573.png"
import Five from "../../../assets/images/imageset4/five.b92d972c.png"
import Four from "../../../assets/images/imageset4/four.e7671f90.png"
import Nine from "../../../assets/images/imageset4/nine.b9401578.png"
import One from "../../../assets/images/imageset4/one.a6414547.png"
import Seven from "../../../assets/images/imageset4/seven.b85c9ff2.png"
import Six from "../../../assets/images/imageset4/six.af2d6337.png"
import Ten from "../../../assets/images/imageset4/ten.c4722db8.png"
import Three from "../../../assets/images/imageset4/three.073734e3.png"
import Two from "../../../assets/images/imageset4/two.6a4c3d7e.png"


export default function AnimatedImage4() {
    const images = [
        { src: One, alt: "Image One",className: "z-20 w-[80px] h-[110px] top-[30%] left-[42%]" },
        { src: Three, alt: "Image Three",className: " w-[200px] h-[120px] bottom-[12%] left-[30%] " },
        { src: Four, alt: "Image Four",className:"z-30 right-[30%] w-[50px] h-[70px] bottom-[35%]" },
        { src: Five, alt: "Image Five",className:"z-30 left-[28%] w-[50px] h-[70px] top-[5%]" },
        { src: Six, alt: "Image Six" ,className:"z-30 right-[30%] w-[50px] h-[70px] top-[10%]"},
        { src: Seven, alt: "Image Seven",className:"z-10 w-[80px] h-[180px] right-[14%] top-[13%]" },
        { src: Eight, alt: "Image Eight",className:"z-20 w-[80px] h-[180px] right-[10%] bottom-[4%]" },
        { src: Nine, alt: "Image Nine",className:"z-20 w-[80px] h-[180px] left-[12%] bottom-[7%]" },
        { src: Ten, alt: "Image Ten",className:"z-10 w-[80px] h-[180px] left-[15%] top-[13%]" },
        { src: Two, alt: "Image Two",className:"z-10 left-[37%] top-[33%] w-[130px] h-[200px]" },
        { src: Eleven, alt: "Image Eleven" , className: "w-[80%]  bottom-0 left-[10%]"},
        
      ];
      

  return (
    <section className=" relative w-[420px] -ml-12 md:ml-0 h-[300px] md:w-[500px] md:h-[400px]  ">
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
