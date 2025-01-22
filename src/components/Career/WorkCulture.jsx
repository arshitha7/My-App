import { FaUsers, FaDollarSign, FaGrinBeam, FaBook, FaCalendarAlt, FaSmileBeam } from 'react-icons/fa';

export default function WorkCulture() {
  const contents = [
    {
      title: "PATRONIZE PARTY",
      icon: <FaUsers />,
      description: "Join our amazing parties and social events that bring everyone together."
    },
    {
      title: "ECONOMIC INCENTIVES",
      icon: <FaDollarSign />,
      description: "Enjoy competitive salary packages and attractive economic incentives."
    },
    {
      title: "FUN AT WORK",
      icon: <FaGrinBeam />,
      description: "We believe that fun should be part of your work life—join our playful work culture!"
    },
    {
      title: "PLACE TO LEARN",
      icon: <FaBook />,
      description: "Our employees have access to a world of learning opportunities and personal growth."
    },
    {
      title: "WORKING 5 DAYS A WEEK",
      icon: <FaCalendarAlt />,
      description: "We offer a great work-life balance with a five-day workweek."
    },
    {
      title: "OPTIMISTIC WORK CULTURE",
      icon: <FaSmileBeam />,
      description: "We foster an optimistic and encouraging environment for all our team members."
    }
  ];

  return (
    <div className="py-10 font-jost bg-white ">
      <div className="flex flex-col justify-center items-center text-center space-y-6">
        <p className="text-sm font-semibold text-customGreen bg-white rounded-full shadow-lg p-2 px-6">Jezh Technologies&apos;s Work Culture & Value</p>
        <h1 className="text-4xl sm:text-3xl font-semibold text-gray-800">Your Life In Jezh Technologies</h1>
        <p className="max-w-3xl text-md text-gray-600">
       At Jezh Technologies, we foster interpersonal relationships through mutual respect, harmony, and understanding, aiming to consistently exceed our commitments. Here’s a glimpse of some of the perks we offer to help our employees unleash their inner talents! If you’re someone who enjoys making a meaningful contribution and being acknowledged for your efforts, Jezh is the place for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 mx-8">
        {contents.map((item, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-xl shadow-lg transform  hover:scale-105 hover:shadow-2xl transition-all duration-500"
           
          >
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl text-customGreen">{item.icon}</div>
            </div>
            <h3 className="text-md font-semibold mb-2 text-center">{item.title}</h3>
            <p className="text-gray-500 text-center text-sm font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
