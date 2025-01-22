import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";

// BentoGrid Component
export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 font-jost sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 min-h-[450px] md:min-h-[500px] h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

// PropTypes for BentoGrid
BentoGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// BentoGridItem Component
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  imageAlt,
}) => {
  return (
    <div
      className={cn(
        "row-span-1  rounded-xl  group hover:shadow-xl transition-shadow duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border hover:border-transparent flex flex-col space-y-4",
        className
      )}
    >
      {header}
      {image && (
        <motion.div className="flex justify-center my-4">
          <motion.img
            whileHover={{
              rotateY: 15,
              rotateX: -10,
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={image}
            alt={imageAlt}
            className="w-96 h-52 object-cover rounded-md cursor-text"
          />
        </motion.div>
      )}
      <div className="transform group-hover:translate-x-2 transition-transform duration-300 px-5 md:px-8 py-3">
        {icon}
        <div className=" font-bold text-xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className=" font-normal text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// PropTypes for BentoGridItem
BentoGridItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  header: PropTypes.node,
  icon: PropTypes.node,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};
