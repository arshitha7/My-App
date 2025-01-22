import Bg from "../../assets/icons/who we are.png";
import HoverButton from "../../ui/HoverButton.jsx";
import Anim from "../../ui/Anim.jsx";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <div className=" flex flex-col  items-center justify-center  min-h-screen px-6 py-12 mt-28 font-jost bg-gray-100">
      <div className="relative text-center md:text-left space-y-6 max-w-2xl mx-6 md:mx-12 lg:mx-20 bg-white p-10 border-[5px] bg- border-gray-600">
        <motion.div   className="absolute left-[60%] -translate-y-1/2 z-10 w-56 h-56 bg-white rounded-full hidden md:block">
          <motion.img
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // animate={{ rotate: [0, 360] }} 
            transition={{
              duration: 2, // Duration of one full rotation
              delay: 2, // Delay before the animation starts
              // repeat: Infinity, // Infinite repetition
              // repeatType: "loop", // Ensures it loops seamlessly
              // ease: "linear", // Smooth linear rotation
            }}
            src={Bg}
            alt="who we are"
          />
        </motion.div>

        <span className="text-customGreen font-semibold text-lg uppercase tracking-wide">
          <Anim>Who We Are?</Anim>
        </span>

        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          <Anim delay={0.8}>Serving Since 2021</Anim>
        </h1>
        <p className=" text-gray-600 ">
          <Anim delay={1}>
            Jezh Technologies is a forward-thinking company focused on
            delivering innovative tech solutions. We specialize in smart IoT and
            AI-powered applications that simplify processes and help businesses
            thrive in a digital world. Our team is committed to creating
            user-friendly, efficient technology that drives success. We work
            closely with clients to deliver tailored solutions that meet their
            unique needs. At Jezh Technologies, we are more than just a
            provider—we’re a trusted partner shaping the future of technology.
          </Anim>
        </p>
        <div className="mt-5">
          <Anim delay={0.8}>
            <HoverButton>View Services</HoverButton>
          </Anim>
        </div>
      </div>
    </div>
  );
}
