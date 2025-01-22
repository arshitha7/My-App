import useSoftwareServiceDetails from "../../../../store/SoftwareProductsStore";

import Accordian from "./Accordian.jsx";

const serviceDetailsContent = [
  {
    title: "Time Tick",
    description:
      "The Time Tick Attendance System leverages AI-integrated facial recognition technology to streamline employee attendance tracking. This advanced system eliminates manual errors, ensuring accurate and reliable records every time. With its seamless operation, businesses can enjoy efficient workforce management, saving valuable time and resources.",
    description2:
      "By automating attendance tracking, Time Tick enhances organizational productivity and reduces administrative burdens. Its AI-powered recognition ensures that attendance is recorded instantaneously and securely, minimizing the risk of fraud. Employees benefit from a hassle-free clock-in process, fostering a more efficient workplace environment. Implementing the Time Tick Attendance System also strengthens compliance with attendance policies and labor regulations. Its sophisticated technology offers scalability, making it ideal for businesses of all sizes. With its focus on accuracy and efficiency, Time-Tick is a game-changer for modern workforce management.",
    accordianItem1: {
      header: "Facilitate The Time and Attendance",
      des: "Automatically records employee arrival and departure times, eliminating manual entry errors.",
    },
    accordianItem2: {
      header: "Superintend Working Shift",
      des: "Easily manage and track employee shifts, including flexible schedules, overtime, and breaks.",
    },
    accordianItem3: {
      header: "Smooth-Running Complex Workforce Scheduling",
      des: "Streamlines complex scheduling needs for large teams, including multiple locations and shifts.",
    },

    image:
      "https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148546549.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:
      "https://img.freepik.com/free-photo/man-touching-his-smartwatch_1134-157.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  },
  {
    title: "Maze HCM",
    description:
      "Experience Mace HCM, an award-winning human resources management software solution. Designed for businesses of all sizes, Mace HCM streamlines core HR functions like time and attendance, payroll, leave management, claims processing, and performance appraisals.",
    description2:
      "This comprehensive platform empowers HR professionals by automating tedious tasks, reducing administrative burdens, and improving overall efficiency. With Mace HCM, businesses can gain valuable insights into their workforce, make data-driven decisions, and foster a more engaged and productive work environment. The user-friendly interface and robust features make it an ideal choice for organizations seeking to modernize their HR operations and enhance employee satisfaction.",
    accordianItem1: {
      header: "Enhanced Data Security",
      des: "Safe and efficient storage of employee information.",
    },
    accordianItem2: {
      header: "Cost Savings",
      des: "Reduce payroll processing and benefit administration expenses.",
    },
    accordianItem3: {
      header: "Increased Efficiency",
      des: "Automate workflows for improved productivity.",
    },

    image:
      "https://img.freepik.com/free-photo/businessmen-solving-maze-together_1134-600.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:
      "https://img.freepik.com/free-photo/businessman-solving-maze_1134-599.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  },
  {
    title: "Trackoon GPS",
    description:
      "Introducing Trackoon, a user-friendly and reliable GPS-based solution for managing your school bus fleet. Prioritizing safety and compliance, Trackoon simplifies operations with its intuitive interface.",
    description2:
      "Seamlessly transition to efficient fleet management with minimal disruption. Our solution is designed for quick implementation, enabling you to experience the benefits of cost-effectiveness and enhanced operational efficiency within days. Trackoon provides real-time vehicle tracking, route optimization, and driver behavior monitoring, ensuring student safety and peace of mind for parents.",
    accordianItem1: {
      header: "Route Optimization",
      des: "Effortlessly set up new routes and stops, assign vehicles, and eliminate redundant routes with ease.",
    },
    accordianItem2: {
      header: "Resource Allocation",
      des: "Efficiently allocate drivers, employees, and students to buses based on seat availability.",
    },
    accordianItem3: {
      header: "Streamlined Operations",
      des: "Simplify vehicle maintenance scheduling and transport fee collection for a seamless transportation experience.",
    },

    image:
      "https://img.freepik.com/free-vector/laptop-with-gps-navigation-software_24877-51529.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:
      "https://img.freepik.com/free-vector/gps-navigation-illustration_24877-57121.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  },
  {
    title: "Safety Management System",
    description:
      "This software empowers your organization to elevate workplace safety to new heights. Our user-friendly software streamlines occurrence reporting, analysis, and corrective action tracking, ensuring compliance with industry regulations. By fostering a proactive safety culture, Jezh’s SMS helps minimize risks, improve operational efficiency, and enhance overall safety performance.",
    description2:
      "Gain valuable insights into safety trends, identify potential hazards, and proactively address safety concerns. Experience a significant reduction in accidents and incidents through improved risk management and proactive mitigation strategies.",
    accordianItem1: {
      header: "Performance Visibility",
      des: "Enhance visibility into health and safety performance.",
    },
    accordianItem2: {
      header: "Incident Reduction",
      des: "Reduce incident rates effectively.",
    },
    accordianItem3: {
      header: "Mobile Safety",
      des: "Manage health and safety on the go with mobile solutions.",
    },

    image:
      "https://img.freepik.com/premium-photo/hand-typing-laptop-keyboard-with-padlock-concept-cyber-security-internet-privacy-data-protection-business-financial-data-personal-information-digital-devices-data-governance_808510-3884.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:
      "https://img.freepik.com/premium-photo/warehouse-management-software-application-computer-real-time-monitoring_31965-23926.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  },
  {
    title: "Vendor Management System",
    description:
      "Jezh's vendor management software empowers businesses across all industries to simplify and optimize their interactions with suppliers.",
    description2:
      "Our intuitive platform centralizes vendor information, streamlines contract management, and provides real-time insights into vendor performance. Effortlessly monitor service providers, track key performance indicators (KPIs), and ensure compliance with service level agreements (SLAs). Jezh simplifies SLA management by providing tools for easy creation, monitoring, and automated alerts for any deviations.",
    accordianItem1: {
      header: "Vendor Onboarding & Management",
      des: " Easily add new vendors, store critical information, and manage their profiles within the system.",
    },
    accordianItem2: {
      header: "Contract Management",
      des: "Create, store, and track all vendor contracts electronically, ensuring compliance and minimizing risks.",
    },
    accordianItem3: {
      header: "Performance Tracking",
      des: "Monitor key performance indicators (KPIs) to assess vendor performance and identify areas for improvement.",
    },

    image:
      "https://img.freepik.com/free-photo/tablet-with-applications_1134-123.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:
      "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041853.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
  },
];

export default function SoftwareProductseDetailsCom() {
  const SoftwareDetails = useSoftwareServiceDetails(
    (state) => state.SoftwareProductsDetails
  );
  const currentService = serviceDetailsContent.find(
    (item) => item.title === SoftwareDetails.title
  );

  return (
    <div className="font-jost pb-10">
      <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
        {/* Text Section */}
        <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
          <h1 className="text-2xl font-bold text-customBlue mb-4">
            {currentService?.title}
          </h1>
          <p className="text-gray-500 leading-7 text-justify text-sm">
            {currentService?.description}
          </p>
          <p className="text-gray-500 leading-7 text-justify text-sm">
            {currentService?.description2}
          </p>
        </section>

        {/* Image Section */}
        <section className="flex justify-center items-center bg-white ">
          <img
            src={currentService?.image}
            alt={currentService?.title}
            className="w-full max-w-lg rounded-lg object-cover"
          />
        </section>
      </div>

      {/* 2nd Row  */}

      <div className=" grid grid-cols-1 md:grid-cols-2  p-6">
        {/* Image Section */}
        <section className="flex justify-center items-center bg-white ">
          <img
            src={currentService?.image2}
            alt={currentService?.title}
            className="w-full max-w-lg rounded-lg "
          />
        </section>
        {/* Text Section */}
        <section className="flex flex-col justify-center gap-4 mx-5 md:mx-10">
          <p className="text-gray-500 leading-7 text-justify text-sm">
            {SoftwareDetails?.des}
          </p>

          <Accordian
            acc1={currentService?.accordianItem1}
            acc2={currentService?.accordianItem2}
            acc3={currentService?.accordianItem3}
          />
        </section>
      </div>
    </div>
  );
}
