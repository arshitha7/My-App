export default function SDAccordian() {
    return (
      <div className="w-full  font-jost bg-white">
         <h1 className="py-5 text-customBlue text-xl underline ml-2 ">key features;</h1>
        {/* Accordion Item 1 */}
        <div className="collapse collapse-plus bg-white shadow-custom rounded-none mb-2">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-base font-medium text-customBlue">
             Item 1
          </div>
          <div className="collapse-content text-gray-500 text-sm">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
  
        {/* Accordion Item 2 */}
        <div className="collapse collapse-plus bg-white shadow-custom rounded-none mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-base font-medium text-customBlue">
            Item 2
          </div>
          <div className="collapse-content text-gray-500 text-sm">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
  
        {/* Accordion Item 3 */}
        <div className="collapse collapse-plus bg-white shadow-custom rounded-none mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-base font-medium text-customBlue">
           Item 3
          </div>
          <div className="collapse-content text-gray-500 text-sm">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    );
  }
  