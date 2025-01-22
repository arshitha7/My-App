import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.terms) newErrors.terms = "You must agree to the terms.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setLoading(true); // Start loading

    // List of recipient email addresses
    const recipients = [
      "rameesta456@gmail.com",
       "info@jezhtechnologies.com",
       "shabin@jezhtechnologies.com",
       "Arshitha@jezhtechnologies.com"
    ];

    // Loop through recipients and send emails
    const emailPromises = recipients.map((recipient) =>
      emailjs.send(
        "service_447409k",
        "template_b2ku3eb",
        { ...formData, recipient_email: recipient },
        "qI8zxfCk1DLGkeecf"
      )
    );

    // Wait for all emails to be sent
    Promise.all(emailPromises)
      .then((responses) => {
        console.log("Emails sent successfully:", responses);
        toast.success("Messages sent successfully");
      })
      .catch((error) => {
        console.error("Error sending emails:", error);
        toast.error("There was an error sending some or all messages.");
      })
      .finally(() => {
        setLoading(false); // Stop loading
        setTimeout(() => setIsSubmitted(false), 3000);

        // Reset the form data after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          terms: false,
        });
      });
  };

  return (
    
    <div className="bg-white flex items-center justify-center font-jost">
      <div className="bg-white shadow-custom rounded-lg p-8 w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Ask Your Question
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Your Name
              </label>
              
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Row 2: Phone Number and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Your Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              By checking this, you agree to our{" "}
              <a
                href="#"
                className="text-blue-500 underline hover:text-blue-600"
              >
                Terms and Privacy Policy
              </a>
              .
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
            >
              {loading ? (
                <div>
                 Please Wait <CircularProgress size={16} sx={{color:'#fff',marginLeft:"4px"}}/>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
