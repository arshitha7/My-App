import { FaLightbulb, FaBullseye, FaHandshake } from 'react-icons/fa';


export default function CompanyValues() {
  const sections = [
    {
      title: "Our Mission",
      icon: <FaLightbulb className="text-4xl text-purple-600" />,
      content: "Jezh is to be a global leader in digital innovation. We aspire to shape the future by creating intelligent, user-centric, and sustainable technologies. Our aim is to foster a connected world where businesses leverage IT to achieve unparalleled success, growth, and customer satisfaction."
    },
    {
      title: "Our Vision",
      icon: <FaBullseye className="text-4xl text-customGreen" />,
      content: "We provide innovative, client-centric, and efficient technology services. We strive to empower businesses by delivering cutting-edge solutions that enhance operations, customer experiences, and overall growth. Our commitment lies in ethical practices, client satisfaction, and the continual pursuit of technological excellence."
    },
    {
      title: "Core Values",
      icon: <FaHandshake className="text-4xl text-yellow-600" />,
      content: "At Jezh, we are committed to fostering an ethical work culture characterized by transparent marketing practices. Our strength is derived from our achievements, which empower us to innovate and deliver exceptional projects, while also building trusted relationships with our clients."
    }
  ];

  return (
    <div className="py-10 bg-white font-jost">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-3xl font-semibold mb-4 text-gray-800 ">Our Mission, Vision, and Core Values</h1>
        <p className="text-base text-gray-500 max-w-3xl mx-auto">
          At Jezh, we strive for excellence in everything we do. Our mission, vision, and core values are the foundation of our company culture and guide us toward achieving long-term success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mx-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-xl border-x-2 hover:-translate-y-3 transform transition-all duration-500 ease-in-out"
    
          >
            <div className="flex justify-center mb-4">{section.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-3">{section.title}</h3>
            <p className="text-gray-500 text-center text-sm font-semibold leading-5 tracking-wide">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
