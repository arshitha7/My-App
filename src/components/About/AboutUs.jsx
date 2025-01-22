// import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import Underline from "../../ui/Underline.jsx"


export default function AboutUs() {
  return (
    <div className="bg-white  py-10 font-jost  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-20">
        <Anim>
          <section>
            <img
              src="https://startp-next.envytheme.com/_next/static/media/about4.b4b8d97a.png"
              alt=""
            />
          </section>
        </Anim>

        <AnimRL>
          <section className="mt-5 md:mt-14">
            <p className="bg-purple-300 w-fit py-1 px-2 rounded-3xl text-xs text-gray-500 mb-3">
              About Us
            </p>
            <h1 className="text-[#0E314C] text-start text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-5 ">
            Experience the Digital Difference
            </h1>
            <Underline/>

            <p className="text-base text-gray-500 leading-6 mb-4">
            Jezh is a leading digital experience development company that crafts captivating and results-driven online experiences.
            </p>
            <p className="text-base text-gray-500 leading-6">
            We specialize in creating user-centric websites, mobile apps, and digital platforms that engage audiences, drive conversions, and build strong brand identities. Our team of skilled designers, developers, and strategists combines creativity with cutting-edge technology to deliver innovative solutions that exceed client expectations. We are passionate about helping businesses thrive in the digital world by creating seamless and impactful online experiences for their customers.
            </p>
          </section>
        </AnimRL>
      </div>

      
    </div>
  );
}
