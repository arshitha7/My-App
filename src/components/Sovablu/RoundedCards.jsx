import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PaidIcon from '@mui/icons-material/Paid';
import AnimBT from "../../ui/AnimBT.jsx";
import Underline from "../../ui/Underline.jsx";


export default function OurFeatures() {
  return (
    <section className=" font-jost bg-white pt-10 pb-5 ">
      <div className="flex flex-col justify-center items-center mx-10 ">
        <h1 className="text-xl  md:text-3xl lg:text-3xl text-[#0E314C] font-semibold mb-5">
        Benefits of Sovablu No code development platform
        </h1>
        <Underline />

        <p className="text-base text-gray-500 text-center max-w-lg">
        Unlock the power of No-Code development with Sovablu. Build custom applications faster, easier, and more affordably than ever before. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-16 my-20 gap-8">
        <section className="flex flex-col items-center justify-center gap-5 ">
          <AnimBT>
            <div className="flex flex-col md:flex-row gap-5 bg-white rounded-lg p-5 group hover:bg-white shadow-custom hover:shadow-none transform hover:-translate-y-3 transition-all duration-700 ">
              <span className="flex items-center justify-center bg-white shadow-lg group-hover:shadow-custom transition-all duration-500 rounded-full h-12 p-5 w-12">
                <CodeIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-gray-700 group-hover:text-customGreen  text-lg  transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base font-semibold w-fit text-gray-700 ">
                Rapid Development
                </h1>
                <p className="text-sm text-gray-400 group-hover:text-gray-600 font-semibold transition-all duration-500">
                You will be capable of developing complex apps simultaneously 5x faster with a no-code approach meaning you will not have to code anything at all. 
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg bg-white p-5 group hover:bg-white shadow-custom hover:shadow-none transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-white shadow-lg group-hover:shadow-custom transition-all duration-500 rounded-full h-12 p-5 w-12">
                <SmartToyIcon
                  sx={{ transition: "all 0.5s " }}
                  className="text-gray-800 group-hover:text-customGreen  text-lg  transition-all duration-500"
                />
              </span>

              <div className="flex flex-col gap-2">
                <h1 className="text-base w-fit font-semibold text-gray-700 ">
                Seamless AI Integration
                </h1>
                <p className="text-sm text-gray-400 group-hover:text-gray-600 font-semibold transition-all duration-500">
                Utilize advanced AI technologies for faster development and to gain the advanced functionality conveniently embedded into the applications.
                </p>
              </div>
            </div>
          </AnimBT>

          
        </section>

        <section className="flex flex-col items-center justify-center gap-5 ">
          <AnimBT delay={0.3}>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg bg-white p-5 group hover:bg-white shadow-custom hover:shadow-none transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-white shadow-lg group-hover:shadow-custom transition-all duration-500 rounded-full h-12 p-5 w-12">
                <GroupsIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-gray-700 group-hover:text-customGreen  text-lg  transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base w-fit font-semibold text-gray-700 ">
                Enhanced Collaboration
                </h1>
                <p className="text-sm text-gray-400 group-hover:text-gray-600 font-semibold transition-all duration-500">
                Support IT and business personnel and help them cooperate to create new solutions and improve the existing ones with the help of clear forms of presentation and data modelling.
                </p>
              </div>
            </div>
          </AnimBT>

          <AnimBT delay={0.3}>
            <div className="flex flex-col md:flex-row gap-5 rounded-lg bg-white p-5 group hover:bg-white shadow-custom hover:shadow-none transform hover:-translate-y-3 transition-all duration-700">
              <span className="flex items-center justify-center bg-white shadow-lg group-hover:shadow-custom transition-all duration-500 rounded-full h-12 p-5 w-12">
                <PaidIcon
                  sx={{ transition: "all 0.5s ease" }}
                  className="text-gray-700 group-hover:text-customGreen transition-all duration-500"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base w-fit font-semibold text-gray-700  ">
                Cost-Effective Licensing
                </h1>
                <p className="text-sm text-gray-400 group-hover:text-gray-600 font-semibold transition-all duration-500">
                Enjoy entrusting business with a “pay as you grow” licensing model that provides unlimited user access and gives you freedom to shape the way how to engage the customers.
                </p>
              </div>
            </div>
          </AnimBT>

         
        </section>
      </div>
    </section>
  );
}
