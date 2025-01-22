// import { motion } from "framer-motion";
import Anim from "../../ui/Anim.jsx";
import AnimRL from "../../ui/AnimRL.jsx";
import Underline from "../../ui/Underline.jsx"
import HoverButton from "../../ui/SwipeButton.jsx/Swipe1.jsx";
import Pattern from "../../ui/RandomPatterns3.jsx"


export default function AboutUs() {
  return (
    <div className="bg-white  font-jost relative ">
        <Pattern/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-20 ">
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
              Engaging New Audiences Through Smart Approach
            </h1>
            <Underline/>

            <p className="text-sm text-gray-500 leading-6 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm text-gray-500 leading-6 mb-4">
              Nullam quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
              sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
              augue velit cursus nunc.Donec vitae sapien ut libero venenatis
              faucibus tempus.
            </p>
            <div className="py-4 mb-4">
            <HoverButton>
                Discover More
            </HoverButton>
            </div>
          </section>
        </AnimRL>
      </div>

     
    </div>
  );
}
