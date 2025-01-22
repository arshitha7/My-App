import useHardwareServiceDetails from "../../../../store/HardwareProduct.js";


import Accordian from "./Accordian.jsx"

const serviceDetailsContent = [

  {
    title: "Skeegle Helmet",
    description:
      "The smart safety helmet represents a breakthrough in workplace safety by integrating advanced technologies to protect workers effectively. Its real-time monitoring capabilities ensure that potential hazards are identified immediately, minimizing risks and preventing accidents before they occur. This proactive approach fosters a safer work environment, particularly in high-risk industries like construction, mining, and manufacturing.",
    description2:
      "Equipped with cutting-edge features such as alerts for environmental dangers, the helmet empowers workers to stay informed and vigilant. This not only reduces the likelihood of injuries but also boosts productivity by enabling employees to focus on their tasks with greater confidence. The seamless integration of technology into protective gear transforms it into a vital safety tool rather than just an accessory.",
    description3:
      "In today’s fast-paced industrial world, prioritizing safety is paramount. The smart safety helmet serves as a powerful reminder of an organization's commitment to worker well-being, making it an essential investment for modern workplaces.",
    image: "https://img.freepik.com/premium-photo/close-up-hard-hat-laptop-real-estate-construction-site_10541-1280.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:"https://img.freepik.com/premium-photo/construction-helmet-is-worn-oxygen-cylinder-welding-shop-industry-construction_230115-2959.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"
  },
  {
    title: "Electronic Voting Machines (EVMs)",
    description:
      "Electronic Voting Machines (EVMs) revolutionize the voting process by offering a secure, efficient, and budget-friendly system for conducting elections. Developed by Jezh Technologies, these EVMs ensure accuracy and integrity in voting, eliminating manual errors and tampering risks. Their advanced electronic mechanism speeds up vote counting, enabling quick and transparent results.",
    description2:
      "Versatile and cost-effective, Jezh Technologies' EVMs are ideal for schools, clubs, and local bodies, making elections manageable even on tight budgets. Their user-friendly design ensures accessibility for participants of all ages and technological proficiencies, while their low maintenance requirements make them suitable for smaller organizations.",
    description3:
      "By integrating cutting-edge technology with affordability, these EVMs enhance democratic practices, promote trust, and modernize the electoral process. With their ability to handle large-scale participation efficiently, Jezh Technologies’ EVMs are essential for fostering fair and inclusive decision-making in diverse communities.",
    image2: "https://img.freepik.com/free-photo/bank-atm-operation-enter-password_1359-1192.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image:"https://img.freepik.com/free-photo/atm-operation-bank_1359-1212.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"

  },
  {
    title: "Washroom Automation",
    description:
      "Washroom automation revolutionizes hygiene standards with sensor-based faucets, soap dispensers, and flush systems. By eliminating the need for physical contact, these innovations significantly reduce the risk of germ transmission, ensuring a safer and cleaner environment for users. This touchless operation is especially crucial in public and commercial spaces, where hygiene is a top priority",
    description2:
      "Automated washroom systems contribute to environmental sustainability by minimizing water wastage. Sensor-based faucets release water only when needed, ensuring efficient usage. Similarly, smart flush systems adjust water flow based on requirements, promoting responsible consumption without compromising functionality.",
    description3:
      "These advanced solutions offer unmatched convenience and efficiency. Automated soap dispensers provide precise amounts of soap, reducing waste and maintenance efforts. By integrating technology into everyday practices, washroom automation enhances user experience, saves resources, and aligns with modern standards of cleanliness and sustainability",
    image: "https://img.freepik.com/free-photo/modern-bathroom-interior-with-double-sinks-smart-technology-control-panel_9975-33125.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:"https://img.freepik.com/premium-photo/hightech-bathroom_861346-74521.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"

  },
  {
    title: "Guest Greeting Device",
    description:
      "A guest greeting device leverages advanced AI and facial recognition technology to deliver automated, personalized welcomes. Designed for modern hospitality, it ensures every guest feels valued upon arrival. By recognizing individual guests and adapting its response accordingly, the device sets a warm and engaging tone for the experience ahead",
    description2:
      "Beyond personalization, this innovative device enhances the efficiency of interactions. Whether at hotels, events, or offices, it eliminates the need for manual check-ins, streamlining the process while maintaining a human-like touch. Its seamless integration into existing systems ensures smooth functionality and minimal disruptions.",
    description3:
      "Security is another key feature of this device. Facial recognition adds an extra layer of safety, ensuring authorized access and reducing risks. This blend of technology and hospitality not only enriches guest experiences but also reinforces trust, making it a vital tool for establishments aiming to offer exceptional service while prioritizing security",
      image: "https://img.freepik.com/free-vector/landing-page-concept-with-tablet_23-2147773281.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:"https://img.freepik.com/premium-photo/video-call-group-business-people-meeting-virtual-workplace-remote-office_31965-7189.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"

    },
  {
    title: "School Automation",
    description:
      "School automation simplifies time-consuming administrative processes, allowing educators and staff to focus more on education. By automating tasks such as scheduling, record-keeping, and report generation, institutions can significantly reduce errors and save valuable time. This efficiency ensures that resources are better utilized, resulting in a smoother and more organized academic environment.",
    description2:
      "With automated attendance tracking and grading systems, schools can improve accuracy and reliability. Digital solutions eliminate manual errors and provide instant data insights, making it easier for educators to monitor student performance and attendance. This not only enhances accountability but also supports data-driven decision-making to improve educational outcomes.",
    description3:
      "Automation fosters seamless communication between educators, students, and parents. Real-time notifications, progress updates, and messaging platforms ensure everyone stays informed and engaged. This improved collaboration strengthens relationships and creates a supportive learning environment, ultimately driving academic success and satisfaction.",
    image: "https://img.freepik.com/premium-photo/education-elementary-school-learning-technology-people-concept-little-schoolgirl-with-tablet-pc-computer-break-classroom-virtual-screens-projections_380164-171315.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
    image2:"https://img.freepik.com/premium-photo/children-are-looking-robot_94347-80.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid"

  },
];

export default function SoftwareProductseDetailsCom() {
  const HardwareDetails = useHardwareServiceDetails((state) => state.hardwareProductsDetails);
  const currentService = serviceDetailsContent.find(
    (item) => item.title === HardwareDetails.title
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
            {currentService?.description3}
          </p>
         
          <Accordian/>
        </section>
      </div>
    </div>
  );
}
