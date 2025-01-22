import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import SearchBar from "../SearchBar.jsx";
import {useNavigate} from "react-router-dom"
import useBlogStore from "../../store/BlogDetails.js";

export default function Blogs() {
  const contents = [
    {
      image:
        "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=",
      date: "Admin / August 15, 2022",
      title: "How a Website Can Help Scale Your Small Business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?b=1&s=612x612&w=0&k=20&c=rIMVMkPV5kiP2vu0iMk_u4LyzKr1tG02L6wYTHX7yEQ=",
      date: "Admin / August 15, 2022",
      title: "The Role of Software Development in Digital Transformation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.jpg?b=1&s=612x612&w=0&k=20&c=6K9v0tIuP0MFKy9JF1e1IW-pqhnmpoLWTPP4MsGSOmg=",
      date: "Admin / August 15, 2022",
      title: "Top 5 Features Every E-Commerce Website Should Have",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/three-people-sitting-table_1124848-131125.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1498322831/photo/indian-business-people-meeting-presentation-in-office-conference-room-showing-infographics.jpg?s=612x612&w=0&k=20&c=xYxXa5HgbHlLdLJYnLYzUnCZsVkgJR2kfoP18bbCgbk=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1169460143/photo/diverse-team-of-creative-millennial-coworkers-in-a-startup-brainstorming-strategies.jpg?s=612x612&w=0&k=20&c=xDb9QAaBbo5hQvgiptMOcsw22aRy-FO0Mls_kO-q_Tc=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1094918638/photo/beat-the-deadline-with-technology.jpg?s=612x612&w=0&k=20&c=WkfzNwl66CTKa7S1nYhhYUtXtuiZPIuBy-koSxiOugg=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?b=1&s=612x612&w=0&k=20&c=rIMVMkPV5kiP2vu0iMk_u4LyzKr1tG02L6wYTHX7yEQ=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.jpg?b=1&s=612x612&w=0&k=20&c=6K9v0tIuP0MFKy9JF1e1IW-pqhnmpoLWTPP4MsGSOmg=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/three-people-sitting-table_1124848-131125.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
      buttonLink: "/",
    },
  ];

  const PopularPosts = [
    {
      image:
        "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "How a Website Can Help Scale Your Small Business...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?b=1&s=612x612&w=0&k=20&c=rIMVMkPV5kiP2vu0iMk_u4LyzKr1tG02L6wYTHX7yEQ=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "The Role of Software Development in Digital Transformation...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.jpg?b=1&s=612x612&w=0&k=20&c=6K9v0tIuP0MFKy9JF1e1IW-pqhnmpoLWTPP4MsGSOmg=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "Top 5 Features Every E-Commerce Website Should Have...",
      buttonLink: "/",
    },
  ];

  const [hover, setHover] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(contents.length / itemsPerPage);
  const setBlogDetails = useBlogStore((state) => state.setBlogDetails);

   
  const handlePageChange = (newPage) => {
    try {
      if (newPage > 0 && newPage <= totalPages) {
        setPage(newPage);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      scrollToTop();
    }
  };

  // Get items for the current page
  const paginatedContents = contents.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 50,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate()
  const handleDetails =async(image,date,title,description)=>{
      try {
        setBlogDetails({image:image,date:date,title:title,description:description})
         navigate('/blog/details')
        console.log(image,date,title,description);
        
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="py-20 font-jost">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mx-5 md:mx-10">
        {/* First Column (4/3 width) */}
        <section className="col-span-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          {paginatedContents.map((data, index) => (
            <div
              key={index}
              className="relative overflow-hidden "
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-[260px]  rounded-lg mb-28 cursor-pointer"
              />
              <div
                className={`absolute bottom-0 left-5 right-5 w-[90%]  rounded-lg h-auto p-5 bg-gradient-to-br from-green-200 via-green-100 to-white 
              flex flex-col gap-3 transition-all duration-500 
              ${hover === index ? "  -translate-y-3 " : "translate-y-0"}
              `}
              >
                <p className={`text-sm text-gray-700 `}>{data.date}</p>
                <h1
                  className={`text-base font-semibold cursor-pointer  line-clamp-3 text-gray-800 ${hover === index ? "mb-4" : "mb-0"} transform transition-all duration-500`}
                >
                  {data.title}
                </h1>
                <button
                onClick={()=>handleDetails(data.image,data.date,data.title,data.description)}

                  className={`bg-white absolute z-50 border border-gray-300 py-2 px-4 bottom-0 translate-y-1/3 
    text-xs font-semibold text-gray-800 rounded-full transition-all duration-500 flex items-center space-x-2
    hover:bg-customGreen hover:text-white ${
      hover === index ? "opacity-100" : "opacity-0"
    }`}
                >
                  <span>Read More</span>
                  <IoMdAddCircleOutline className="text-base" />
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Second Column (4/1 width) */}
        <aside className="col-span-2  bg-white  rounded-lg">
          {/* Search Bar */}
          <SearchBar />

          {/* Popular Posts Section */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Popular Posts
            </h1>
            <div className="mt-4 space-y-4">
              {PopularPosts?.map((data, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 gap-4 items-center border-b pb-3 last:border-none"
                >
                  {/* Image */}
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-20 object-cover rounded-md col-span-1"
                  />
                  {/* Text Content */}
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">{data.date}</p>
                    <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                      {data.description}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Section  */}
          <div className="mt-10">
            {/* Category Section */}
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Category
            </h1>
            <div className="mt-4 space-y-3">
              {[
                "Business",
                "Privacy",
                "Technology",
                "Tips",
                "Uncategorized",
              ].map((category, i) => (
                <div key={i} className="flex items-center space-x-2">
                  {/* Green Square */}
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  {/* Category Text */}
                  <p className="text-xs font-semibold tracking-wider text-gray-700">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/*Tags Section  */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Tags
            </h1>
            <div className="mt-4 grid grid-cols-3 justify-center items-center gap-3">
              {[
                "IT",
                "Spale",
                "Games",
                "Fashion",
                "Travel",
                "Smart",
                "Marketing",
                "Tips",
              ].map((category, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white text-gray-500 text-xs text-center tracking-wider font-semibold rounded-full border border-gray-300
                   hover:bg-green-500 hover:text-white cursor-pointer transition-colors duration-300"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>

      {/* Pagination */}
      <div className="flex  justify-start items-center mt-10 space-x-2 ml-3 md:ml:10 lg:ml-72">
        <button
          onClick={() => handlePageChange(page - 1)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          disabled={page === 1}
          style={{ cursor: page === 1 ? "not-allowed" : "pointer" }}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`py-2 px-4 rounded ${
              page === index + 1
                ? "bg-green-500 text-white"
                : "bg-gray-300 hover:bg-green-500 text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          disabled={page === totalPages}
          style={{ cursor: page === totalPages ? "not-allowed" : "pointer" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
