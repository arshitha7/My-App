import "./partner.css"; // Assuming your provided CSS is here
import { CardData } from "../../../json/teamcard"; // Your data file
import Underline from "../../../ui/Underline";
import Anim from "../../../ui/Anim.jsx"

const AnimatedCardGrid = () => {
  return (
    <div className="font-jost py-20 bg-customWhite">
      <div className="flex flex-col pb-10 items-center justify-center">
        <h1 className="text-[#0E314C] text-center text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4">
        Our Global Network 
        </h1>
        <Underline />

        <Anim delay={0.4}>
          <p className="text-base text-gray-500 text-center max-w-lg leading-6">
          We are proud to work alongside industry-leading partners who share our vision for excellence. Together, we create impactful solutions that meet the evolving needs of our clients.
          </p>
        </Anim>
      </div>

      <div className="grid-container ">
        {CardData.map((card) => (
          <div key={card.id} className="container">
            {/* Front Side */}
            <div className="side front bg-white shadow-custom ">
              <div className="content">
                <img
                  src={card.image}
                  alt={card.name}
                  className={`${card.id === 5 && "h-40 w-full mb-6 "} ${card.id === 4 && "h-40 w-full mb-7"} ${card.id === 6 && "h-36 w-full mb-7 "} mb-4`}
                />
                <h1 className="text-gray-900 ">{card.name}</h1>
                <p className="text-gray-600 mt-3">{card.description}</p>
              </div>
            </div>
            {/* Back Side */}
            <div className="side back shadow-custom">
              <div className="content">
                <img
                  src={card.image}
                  alt={card.name}
                  className={`${card.id === 5 && "h-40 w-full mb-6 "} ${card.id === 4 && "h-40 w-full mb-7"} ${card.id === 6 && "h-36 w-full mb-7 "} mb-4`}
                />
                <h1>{card.name}</h1>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCardGrid;
