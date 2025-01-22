import { RiInformationOffFill } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaCompress } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { MdPolicy } from "react-icons/md";
import { PiLinkSimpleHorizontalFill } from "react-icons/pi";
import { AiFillProject } from "react-icons/ai";

const privacyPolicyContent = [
  {
    key: "information-collection",
    title: "What Information We Collect",
    description:
      "For Visitors – We receive “cookies” to monitor visitor movements on our site. This information may encompass referral URLs, IP addresses, browser types, locations, and device types.",
    icon: <RiInformationOffFill className="text-customGreen text-5xl" />,
  },
  {
    key: "third-party-links",
    title: "Third-Party Links",
    description:
      "We strive to enhance the user-friendliness of our website and have integrated various third-party applications (e.g., applications on social networking sites like Facebook, LinkedIn, Twitter, etc.) to enable visitors to engage with Jezh in novel ways. These interactions may involve the collection of personal information, such as names, addresses, email addresses, time of visit, country, and telephone numbers.",
    icon: <PiLinkSimpleHorizontalFill className="text-blue-500 text-5xl" />,
  },
  {
    key: "information-usage",
    title: "How We Use Your Information",
    description:
      "Browsing information collected from all visitors is utilized to diagnose problems and enhance our website and services. By default, you are subscribed to promotional emails and newsletters, but you can choose to unsubscribe using the instructions and/or opt-out links provided in the mailings.",
    icon: <AiFillProject className="text-green-500 text-5xl" />,
  },
  {
    key: "information-protection",
    title: "How We Protect Your Information",
    description:
      "Jezh does not partner with any companies, so we do not share customer or visitor information with anyone under any circumstances.",
    icon: <AiOutlineFileProtect className="text-red-500 text-5xl" />,
  },

  {
    key: "policy-adherence",
    title: "Adherence to This Policy",
    description:
      "Jezh takes this privacy policy and the principles herein very seriously. We are committed to abiding by this policy and taking reasonable precautions to ensure that your personal information remains secure.",
    icon: <MdPolicy className="text-orange-500 text-5xl" />,
  },
  {
    key: "policy-changes",
    title: "Changes to Our Privacy Policy",
    description:
      "Using our services or products constitutes an understanding of and agreement with this policy. Jezh.com reserves the right to modify this, as well as any other policies and/or agreements at any time.",
    icon: <MdChangeCircle className="text-yellow-500 text-5xl" />,
  },
  {
    key: "consent",
    title: "Consent",
    description:
      " We reserve the right, without explicit permission, to provide personally identifiable information in the following circumstances:\n\n When we believe in good faith that it is necessary to comply with subpoenas, court orders, and other legal processes as required or permitted by law.\n\n To report, prevent, or assist in the investigation of suspected fraud or other illegal activities or take actions associated with such activities.\n\n To enforce the Jezh.com Terms of Services, establish, exercise, or defend our legal rights or as otherwise provided in the User Agreement or this Privacy Policy.",
    icon: <FaCompress className="text-gray-500 text-5xl" />,
  },
];

export default function PrivacyPolicyFeatures() {
  return (
    <div className="font-jost py-16 bg-customWhite">
    <div className="flex flex-col justify-center items-center text-center mb-10 md:mb-16">
      <h1 className="text-sm font-semibold shadow-md rounded-full p-2 px-6 text-customGreen mb-4 bg-green-50">
        Privacy Policy
      </h1>
    </div>
  
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24">
      {privacyPolicyContent.slice(0, 6).map((item) => (
        <div
          key={item.key}
          className="flex flex-col md:flex-row items-start gap-4 bg-white shadow-md hover:shadow-lg rounded-lg p-6 border-t-4 border-customGreen transition-shadow duration-300"
        >
          <div className="flex items-center justify-center w-14 h-14 bg-green-100 text-customGreen rounded-full">
            {item.icon}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-customGreen leading-7 tracking-wide mb-2">
              {item.title}
            </h2>
            <p className="text-gray-500 text-sm whitespace-pre-wrap font-medium">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  
    <section className="flex flex-col items-center justify-center mt-12 md:mt-16">
      {privacyPolicyContent.slice(6, 7).map((data) => (
        <div
          key={data.key}
          className="flex flex-col items-center justify-center text-center bg-white shadow-lg hover:shadow-xl rounded-lg p-8 w-full md:w-3/4 lg:w-1/2 border-t-4 border-customGreen transition-shadow duration-300"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-customGreen rounded-full mb-4">
            {data.icon}
          </div>
          <h1 className="text-xl font-semibold text-gray-700 mb-5">
            {data.title}
          </h1>
          <ul className="text-left text-gray-600 text-sm space-y-5">
            {data.description.split("\n\n").map((point, index) => (
              <li
                key={index}
                className="flex items-start font-medium space-x-2"
              >
                <span className="text-customGreen text-2xl">•</span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  </div>
  
  );
}
