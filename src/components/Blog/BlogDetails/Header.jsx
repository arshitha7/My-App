import useBlogStore from "../../../store/BlogDetails";


import Anim from "../../../ui/Anim.jsx";

import Background from "../../../assets/image2/background/banner-bg1.jpg"
import Patterns from "../../../ui/RandomPatterns3.jsx"

export default function Header() {
  const BlogDetails = useBlogStore((state) => state.blogDetails);
  
 
  return (
    <div className="relative py-20 top-14 flex flex-col justify-center items-center  pt-20 font-jost px-4 overflow-hidden ">
      <div className="absolute w-full h-full object-cover  z-[-1]">
        <img src={Background} alt="" />
      </div>
      <Patterns/>
      <div className="relative z-10 text-center max-w-xl mt-0  p-10 rounded-lg ">
        <Anim key="anim-header">
          <h1 className="text-4xl md:text-4xl font-semibold text-customBlue mb-8">
            {BlogDetails.title}
          </h1>
        </Anim>

       
      </div>
    </div>
  );
}

