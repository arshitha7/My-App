import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import Anim from "../../Anim.jsx"
import AnimRL from "../../AnimRL.jsx"

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  // Linear gradients (memoized for optimization)
  //   const linearGradients = useMemo(
  //     () => [
  //       "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  //       "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
  //       "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  //     ],
  //     []
  //   );

  useEffect(() => {
    const calculateActiveCard = () => {
      if (!ref.current) return;

      const cards = Array.from(ref.current.querySelectorAll(".card"));
      const viewportHeight = window.innerHeight;
      const center = viewportHeight / 2;

      const distances = cards.map((card) => {
        const { top, height } = card.getBoundingClientRect();
        const cardCenter = top + height / 2;
        return Math.abs(cardCenter - center);
      });

      const closestIndex = distances.indexOf(Math.min(...distances));
      setActiveCard(closestIndex);
    };

    const container = ref.current;
    container.addEventListener("scroll", calculateActiveCard);

    return () => {
      container.removeEventListener("scroll", calculateActiveCard);
    };
  }, [content]);

  // Background colors and gradients logic
  //   const backgroundColors = [
  //     "var(--slate-900)",
  //     "var(--black)",
  //     "var(--neutral-900)",
  //   ];

  const backgroundColors = [
    "var(--white)",
    "var(--gray-50)",
    // "var(--gray-100)",
    // "var(--gray-200)",
  ];

  //   const [backgroundGradient, setBackgroundGradient] = useState(
  //     linearGradients[0]
  //   );

  // Update the background gradient based on the active card
  //   useEffect(() => {
  //     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  //   }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10  "
      ref={ref}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 5px 20px 2px",
      }}
    >
      <Anim>
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 card">
              
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-700"
              >
                {item.title}
              </motion.h2>
              <motion.h5
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm  text-slate-500"
              >
                {item.role}
              </motion.h5>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-md text-slate-600 max-w-sm mt-5"
              >
                {item.description}
              </motion.p>

              {item?.media?.map((mediaObject, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="flex text-md text-slate-600 max-w-sm mt-5"
                >
                  {Object.keys(mediaObject).map((key) => (
                    <span key={key} className="mr-4 mb-5">
                      {mediaObject[key]}{" "}
                      
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      </Anim>

    
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-none sticky top-10 overflow-hidden"
          //   contentClassName
        )}
      >
          <AnimRL>
        {content[activeCard]?.content ?? null}
        </AnimRL>
      </div>
      
    </motion.div>
  );
};

// Add prop validation
StickyScroll.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
