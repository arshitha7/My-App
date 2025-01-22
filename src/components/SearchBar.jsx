
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center bg-white ">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full bg-white shadow-custom text-gray-700 border border-gray-300 rounded-full py-3 px-5 pl-10  focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300"
        />
        <AiOutlineSearch
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 text-xl"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-purple-500 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
