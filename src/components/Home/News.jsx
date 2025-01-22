import Anim from "../../ui/Anim.jsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AnimBT from "../../ui/AnimBT.jsx"
import Underline from "../../ui/Underline.jsx";


export default function News() {
  return (
    <div className="pb-20 pt-48 bg-white font-jost">
      <div className="flex flex-col justify-center items-center ">
       
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
            The News from Our Blog
            </h1>
            <Underline/>
         
        <Anim delay={0.4}>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Anim>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 bg-white  gap-5 mx-5 md:mx-14 font-jost mt-10 md:mt-16">

         <AnimBT delay={0.3}>
        <section className="relative flex flex-col gap-3 bg-gray-100 hover:bg-white hover:shadow-xl transition-colors duration-300 ">
          <div className="relative w-full h-full">
          <img
            src="https://img.freepik.com/free-photo/business-partners-negotiating-about-strategies-using-laptop_1163-4774.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_tags_boosted"
            alt="image"
          />
          <div className="absolute bottom-0 translate-y-1/2 left-5 bg-gradient-to-t from-green-500 to-customGreen p-2 rounded-3xl flex gap-2">
            <CalendarTodayOutlinedIcon sx={{fontSize:12,color:"#FFF",mt:'2px'}}/>
          <span className="text-xs text-white">March 15, 2022</span>
          </div>
          </div>
          
          <h1 className="mx-4 text-black text-xl md:text-2xl mt-6">Heading</h1>
          <p className=" "></p>
          <div className="flex mx-4 text-sm gap-1">
            <span className="text-gray-950 ">By</span>
            <span className="text-gray-500">subheading</span>
          </div>
          <p className="mx-4 text-gray-500 text-sm leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            nobis fuga mollitia architecto eveniet delectus quos maiores sit
            eius nesciunt accusantium corporis expedita aut laboriosam, corrupti
            eaque, autem voluptate quis.
          </p>

          <div className="mx-4 flex gap-1 text-sm text-gray-700 hover:text mb-4 cursor-pointer group hover:text-customGreen transition-all duration-300">
            <span>Read More</span>
            <button className="transform group-hover:translate-x-2 transition-transform duration-500">
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </button>
          </div>
        </section>
        </AnimBT>

        <AnimBT delay={0.4}>
        <section className="relative flex flex-col gap-3 bg-gray-100 hover:bg-white hover:shadow-xl transition-colors duration-300 ">
            <div className="relative w-full h-full">       
          <img
            src="https://img.freepik.com/free-photo/workers-long-wooden-table_1262-810.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_tags_boosted"
            alt="image"
          />
           <div className="absolute bottom-0 translate-y-1/2 left-5 bg-gradient-to-t from-green-500 to-customGreen p-2 rounded-3xl flex gap-2">
            <CalendarTodayOutlinedIcon sx={{fontSize:12,color:"#FFF",mt:'2px'}}/>
          <span className="text-xs text-white">March 17, 2022</span>
          </div>
          </div>   
         
          <h1 className="mx-4 text-black text-xl md:text-2xl mt-6">Heading</h1>
          <p className=" "></p>
          <div className="flex mx-4 text-sm gap-1">
            <span className="text-gray-950 ">By</span>
            <span className="text-gray-500">subheading</span>
          </div>
          <p className="mx-4 text-gray-500 text-sm leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            nobis fuga mollitia architecto eveniet delectus quos maiores sit
            eius nesciunt accusantium corporis expedita aut laboriosam, corrupti
            eaque, autem voluptate quis.
          </p>

          <div className="mx-4 flex gap-1 text-sm text-gray-700 hover:text mb-4 cursor-pointer group hover:text-customGreen transition-all duration-300">
            <span>Read More</span>
            <button className="transform group-hover:translate-x-2 transition-transform duration-500">
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </button>
          </div>
        </section>
        </AnimBT>

        <AnimBT delay={0.5}>
        <section className="relative flex flex-col gap-3 bg-gray-100 hover:bg-white hover:shadow-xl transition-colors duration-300 ">
         <div className="relative w-full h-full">
          <img
            src="https://img.freepik.com/free-photo/creative-people-working-office_23-2147656715.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_tags_boosted"
            alt="image"
          />
          <div className="absolute bottom-0 translate-y-1/2 left-5 bg-gradient-to-t from-green-500 to-customGreen p-2 rounded-3xl flex gap-2">
            <CalendarTodayOutlinedIcon sx={{fontSize:12,color:"#FFF",mt:'2px'}}/>
          <span className="text-xs text-white">March 19, 2022</span>
          </div>
          </div>
          <h1 className="mx-4 text-black text-xl md:text-2xl mt-6">Heading</h1>
          <p className=" "></p>
          <div className="flex mx-4 text-sm gap-1">
            <span className="text-gray-950 ">By</span>
            <span className="text-gray-500">subheading</span>
          </div>
          <p className="mx-4 text-gray-500 text-sm leading-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            nobis fuga mollitia architecto eveniet delectus quos maiores sit
            eius nesciunt accusantium corporis expedita aut laboriosam, corrupti
            eaque, autem voluptate quis.
          </p>

          <div className="mx-4 flex gap-1 text-sm text-gray-700 hover:text mb-4 cursor-pointer group hover:text-customGreen transition-all duration-300">
            <span>Read More</span>
            <button className="transform group-hover:translate-x-2 transition-transform duration-500">
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </button>
          </div>
        </section>
        </AnimBT>

      </div>
    </div>
  );
}
