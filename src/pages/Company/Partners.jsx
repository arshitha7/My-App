import Header from "../../components/Company/Partners/Header"
import FlippingCards from "../../components/Company/Partners/FlippingCards.jsx"
import Faq from "../../components/DefoultFaq.jsx"
import Form from "../../components/Contact/Contact.jsx"

export default function Partners() {
   // Step 1: Create a function to scroll the page by -20% of the viewport height
   

  return (
    <>
    <Header />
    <FlippingCards />
    <Faq/>
    <Form/>
    </>
  )
}
