import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useState } from "react";
import Underline from "../../ui/Underline.jsx";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function StyledAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    {
      title: "What is a no-code platform?",
      content:
        "A no-code application development encompasses the creation of applications and forms without coding but with the help of templates, visual tools and pre-built components.",
    },
    {
      title: "How does Sovablu accelerate app development?",
      content:
        "Sovablu automates development by providing intuitive drag-and-drop tools, a smooth interface for deploying and using AI capabilities and data modelling make it easier to develop applications with great sophistication at a very fast rate.",
    },
    {
      title: "Is Sovablu suitable for large enterprises?",
      content:
        "Yes, Sovablu is intended for large enterprises because of the cloud-native nature of its architecture and high performance that allows for effective work with millions of users and large data loads.",
    },
    {
      title: "Can non-developers use Sovablu?",
      content:
        "Absolutely! Sovablu is designed for non-developers where the users of the platform may not necessarily be developers with any coding knowledge.",
    },
    {
      title: "What kind of applications can I build with Sovablu?",
      content:
        "You can develop simple applications up to sophisticated business applications, reports, API or any other ERP-connected applications suitable for your enterprise.",
    },

    {
      title: "How does the pay for what you use licensing model work?",
      content:
        "Our licensing model charges you based on the resources you use, providing a cost-effective solution that scales with your usage.",
    },
    {
      title: "Does Sovablu support integration with external systems?",
      content:
        "Yes, Sovablu offers protection to integrate with external systems, allowing you to import and use data from various sources seamlessly.",
    },
    {
      title: "How easy is it to deploy applications with Sovablu?",
      content:
        "Sovablu makes application deployment easier and faster having features of one-click application deployment as well as faster transport of the changes across environments with no downtime.",
    },
    {
      title: "Can Sovablu handle multi-language localization?",
      content:
        "Yes, there is localization in Sovablu by default and this helps you to translate and localize your applications for different languages though it requires some effort.",
    },
    {
      title: "What kind of support and engagement models does Sovablu offer?",
      content:
        "Sovablu’s customer engagement models are flexible based on your specifications, so you get end-to-end support while achieving your objectives.",
    },
  ];
  const leftColumnData = accordionData.slice(0, 5);
  const rightColumnData = accordionData.slice(5,10);

  return (
    <div className="py-20 bg-customWhite font-jost">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mx-auto max-w-6xl px-4"
      >
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-customBlue text-2xl md:text-3xl font-bold mb-5">
          We have some FAQ to
          inform you more
          </h1>
          <Underline />
        </div>

        {/* Parent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {/* Left Column */}
          <div>
            {leftColumnData.map((item, index) => (
              <Accordion
                key={`left-${index}`}
                expanded={expanded === `left-${index}`}
                onChange={handleChange(`left-${index}`)}
                disabled={item.disabled || false}
                sx={{
                  background: "white",
                  boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "20px",
                }}
              >
                <AccordionSummary
                  className="group"
                  expandIcon={
                    expanded === `left-${index}` ? (
                      <RemoveIcon className="text-customGreen transition-transform duration-300 ease-in-out" />
                    ) : (
                      <AddIcon className="transition-transform duration-300 ease-in-out text-gray-800 group-hover:text-customGreen" />
                    )
                  }
                  aria-controls={`panel-left-${index}-content`}
                  id={`panel-left-${index}-header`}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                    className={`font-semibold group-hover:text-customGreen transition-colors duration-300 font-jost ${
                      expanded === `left-${index}`
                        ? "text-customGreen"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                {!item.disabled && (
                  <AccordionDetails>
                    <Typography
                      sx={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}
                      className="text-gray-500 font-jost"
                    >
                      {item.content}
                    </Typography>
                  </AccordionDetails>
                )}
              </Accordion>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnData.map((item, index) => (
              <Accordion
                key={`right-${index}`}
                expanded={expanded === `right-${index}`}
                onChange={handleChange(`right-${index}`)}
                disabled={item.disabled || false}
                sx={{
                  background: "white",
                  boxShadow: "0 7px 29px rgba(100, 100, 111, 0.2)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "20px",
                }}
              >
                <AccordionSummary
                  className="group"
                  expandIcon={
                    expanded === `right-${index}` ? (
                      <RemoveIcon className="text-customGreen transition-transform duration-300 ease-in-out" />
                    ) : (
                      <AddIcon className="transition-transform duration-300 ease-in-out text-gray-800 group-hover:text-customGreen" />
                    )
                  }
                  aria-controls={`panel-right-${index}-content`}
                  id={`panel-right-${index}-header`}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                    className={`font-semibold group-hover:text-customGreen transition-colors duration-300 font-jost ${
                      expanded === `right-${index}`
                        ? "text-customGreen"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                {!item.disabled && (
                  <AccordionDetails>
                    <Typography
                      sx={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}
                      className="text-gray-500 font-jost"
                    >
                      {item.content}
                    </Typography>
                  </AccordionDetails>
                )}
              </Accordion>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
