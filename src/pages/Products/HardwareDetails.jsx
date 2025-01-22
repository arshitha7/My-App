import Header from "../../components/Product/Hardware/HardwareDetailed/HADDHeader.jsx";
import SoftwareDetailsContent from "../../components/Product/Hardware/HardwareDetailed/HADtwareDetails.jsx";
import Faq from "../../components/DefoultFaq.jsx"
import Form from "../../components/Contact/Contact.jsx"

export default function SoftwareDetails() {
  return (
    <div>
      <Header />
      <SoftwareDetailsContent />
      <Faq/>
      <Form/>
    </div>
  );
}
