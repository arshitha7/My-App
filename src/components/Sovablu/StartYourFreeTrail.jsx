export default function StartYourFreeTrial() {
  return (
    <div className="font-jost py-10 bg-gradient-to-r from-green-100 via-white to-white">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="flex justify-center ">
          <img
            src="https://startp-next.envytheme.com/_next/static/media/free-trial-img.e978f887.png"
            alt="Start Free Trial"
            className="w-full  object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-lg mt-6 md:mt-0 ">

          <h1 className="text-2xl md:text-3xl  font-semibold text-gray-800 ">
            Start Your Free Trial
          </h1>
        

          <div className="flex items-center justify-center w-full">
            <div className="flex items-center w-full md:w-4/5   rounded-lg overflow-hidden">
              {/* Input Field */}
              <input
                type="email"
                placeholder="Enter your business email here"
                className="flex-[2] px-4 py-3 text-gray-200 bg-gray-900 focus:outline-none rounded-l-full"
                aria-label="Enter your business email"
              />

              {/* Button */}
              <button
                className="flex-[1] bg-green-500 text-white rounded-r-full py-3 px-4 hover:bg-green-600 transition-all "
              >
                Sign Up Free
              </button>
              
            </div>
          </div>
          <p className="text-gray-400 text-center text-xs md:text-sm">
           Lorem ipsum dolor sit amet consectetur adipisicing elit lorem .
          </p>
        </div>
      </section>
    </div>
  );
}
