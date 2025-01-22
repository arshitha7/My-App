import { useEffect, useState, useRef } from "react";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import HoverButton from "../../ui/SwipeButton.jsx/Swipe1.jsx";
import Anim from "../../ui/Anim.jsx";
import Underline from "../../ui/Underline.jsx";

export default function StatsSection() {
  const projectsRef = useRef(null);
  const customersRef = useRef(null);
  const othersRef = useRef(null);

  const [projectsCount, setProjectsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [othersCount, setOthersCount] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentProjectsRef = projectsRef.current;

    if (currentProjectsRef) observer.observe(currentProjectsRef);

    return () => {
      if (currentProjectsRef) observer.unobserve(currentProjectsRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1000;
      const steps = 100;
      const incrementProjects = 10 / steps;
      const incrementCustomers = 20 / steps;
      const incrementOthers = 100 / steps;

      let currentProjects = 0;
      let currentCustomers = 0;
      let currentOthers = -1;

      const interval = setInterval(() => {
        currentProjects += incrementProjects;
        currentCustomers += incrementCustomers;
        currentOthers += incrementOthers;

        setProjectsCount(Math.round(currentProjects));
        setCustomersCount(Math.round(currentCustomers));
        setOthersCount(Math.round(currentOthers));

        if (
          currentProjects >= 10 &&
          currentCustomers >= 20 &&
          currentOthers >= 100
        ) {
          clearInterval(interval);
        }
      }, duration / steps);
    }
  }, [isVisible]);

  return (
    <div
      className="relative bg-customWhite py-14 font-jost
    "
    >
      
      <div className="flex flex-col justify-center items-center  mb-5">
        
          
            <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl max-w-lg font-semibold leading-tight  mb-4">
            Customer Delight is our Focus 
            </h1>
            <Underline/>
         
         
        <Anim delay={0.4}>
          <p className="text-base text-gray-500 text-center max-w-lg">
          Building long-term customer relationships through exceptional service. 
          </p>
        </Anim>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 justify-center md:space-x-12 space-y-8 md:space-y-0 p-10 ">
        <div
          ref={projectsRef}
          className="flex  z-40 flex-row gap-5 text-center border-b-2 md:border-0 md:border-b-0 border-dotted border-gray-600 md:pl-8 md:pb-0 pb-4"
        >
          <div className="flex justify-center items-center">
            <HandshakeOutlinedIcon
              fontSize="medium"
              className="text-gray-500"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl  font-semibold text-customGreen">{`${projectsCount}+`}</h1>
            <p className="text-md md:text:lg text-gray-600  ">Clients</p>
          </div>
        </div>

        <div
          ref={customersRef}
          className="flex  z-40 flex-row gap-5 text-center border-b-2 md:border-l-2 md:border-b-0 border-dotted border-gray-400 md:pl-8 md:pb-0 pb-4"
        >
          <div className="flex justify-center items-center">
            <AssignmentOutlinedIcon
              fontSize="medium"
              className="text-gray-500"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl  font-semibold text-customGreen">{`${customersCount}+`}</h1>
            <p className="text-md md:text:lg text-gray-600">Projects</p>
          </div>
        </div>

        <div
          ref={othersRef}
          className="flex  z-40 flex-row gap-5 text-center border-b-2 md:border-l-2 md:border-b-0 border-dotted border-gray-400 md:pl-8 md:pb-0 pb-4"
        >
          <div className="flex justify-center items-center">
            <GroupRemoveOutlinedIcon
              fontSize="medium"
              className="text-gray-500"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-customGreen ">{`${othersCount}+`}</h1>
            <p className="text-md md:text:lg text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
      <Anim>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 my-10 border-2 border-dotted border-gray-200 mx-10 md:mx-52 lg:mx-72 p-5 md:p-8">
          <div>
            <h1 className="text-[#0E314C] text-lg md:text-xl font-semibold">
              Have any question about us?
            </h1>
            <p className="text-sm text-gray-500">
              Don&apos;t hesitate to contact us
            </p>
          </div>
            
            <div>
          <HoverButton>Contact Us</HoverButton>
          </div>
        </div>
      </Anim>
    </div>
  );
}
