// import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import Underline from "../../ui/Underline.jsx";


export default function AboutUs() {
  return (
    <div className="bg-gray-50  py-10 font-jost  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-20">
        <Anim>
          <section className="mt-5 md:mt-20">
            <p className="bg-purple-300 w-fit py-1 px-2 rounded-3xl text-xs text-gray-500 mb-3">
              Who We Are?
            </p>
            <h1 className="text-[#0E314C] text-start text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-5 ">
              Serving Since 2021
            </h1>
            <Underline/>

            <p className="text-base text-gray-500 leading-6 mb-4">
              Jezh Technologies is a forward-thinking company focused on
              delivering innovative tech solutions. We specialize in smart IoT
              and AI-powered applications that simplify processes and help
              businesses thrive in a digital world.
            </p>
            <p className="text-base text-gray-500 leading-6">
              Our team is committed to creating user-friendly, efficient
              technology that drives success. We work closely with clients to
              deliver tailored solutions that meet their unique needs. At Jezh
              Technologies, we are more than just a provider—we’re a trusted
              partner shaping the future of technology.
            </p>
          </section>
        </Anim>

        <AnimRL>
          <section className="mt-6">
            <img
              src="https://startp-next.envytheme.com/_next/static/media/about-one.15a914b7.png"
              alt=""
            />
          </section>
        </AnimRL>
      </div>

     
    </div>
  );
}
