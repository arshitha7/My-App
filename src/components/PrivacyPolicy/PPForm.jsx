
import ContactImage from "../../assets/images/rb_2147837418.png";
import Form from "../Contactform.jsx"

export default function SignupForm() {


  return (
    <div className="bg-customWhite py-20 font-jost">
    <div className="   items-center justify-center  px-4 font-jost grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-10">
      <div className="flex flex-col gap-6">
        
        <p className="text-gray-600 text-sm font-semibold shadow-lg bg-white rounded-full w-fit p-2 px-5">
          Do You Have Any Particular Questions? We&apos;re here to help.
        </p>
        <h1 className="text-gray-800 text-2xl font-semibold">
          Just Shoot us an email.
        </h1>
        <p className="text-gray-600 text-base">
          Jezh Technologies stands as an industry-leading AI-driven No-code
          Platform and IoT development Company that provides one-stop solutions
          for your business uplift. Knowing your requirements, our technical
          expert will schedule a call and discuss your idea in detail. All
          information will be kept confidential.{" "}
        </p>
        <div className="flex items-center justify-center">
          <img
            src={ContactImage}
            alt="image"
            className="h-[400px] w-[400px] "
          />
        </div>
      </div>


      <Form/>

      
    </div>
    </div>
  );
}
