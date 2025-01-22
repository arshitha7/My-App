import PropTypes from "prop-types";


export default function SDAccordian({acc1,acc2,acc3}) {
    return (
      <div className="w-full   font-jost bg-white">

        <h1 className="py-5 text-customBlue text-xl underline ml-2 ">key features;</h1>
        {/* Accordion Item 1    */}
        <div className="collapse collapse-plus bg-white shadow-custom rounded-none mb-2">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-base font-medium text-customBlue">
             {acc1?.header}
          </div>
          <div className="collapse-content text-gray-500 text-sm">
            <p>{acc1?.des}</p>
          </div>
        </div>
  
        {/* Accordion Item 2 */}
        <div className="collapse collapse-plus bg-white shadow-custom rounded-none mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-base font-medium text-customBlue">
           {acc2?.header}
          </div>
          <div className="collapse-content text-gray-500 text-sm">
          <p>{acc2?.des}</p>
          </div>
        </div>
  
        {/* Accordion Item 3 */}
        <div className="collapse collapse-plus bg-white shadow-custom rounded-none mb-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-base font-medium text-customBlue">
           {acc3?.header}
          </div>
          <div className="collapse-content text-gray-500 text-sm">
          <p>{acc3?.des}</p>
          </div>
        </div>
      </div>
    );
  }
  
  SDAccordian.propTypes = {
    acc1: PropTypes.shape({
      header: PropTypes.string.isRequired,
      des: PropTypes.string.isRequired,
    }).isRequired,
    acc2: PropTypes.shape({
      header: PropTypes.string.isRequired,
      des: PropTypes.string.isRequired,
    }).isRequired,
    acc3: PropTypes.shape({
      header: PropTypes.string.isRequired,
      des: PropTypes.string.isRequired,
    }).isRequired,
  };