import { Person, ThreeLineHorizontal } from "akar-icons";
import { Link } from "react-router-dom";

interface HeaderProps {
  displaySidebar: Function;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="w-full h-20 flex justify-center items-center px-2 bg-white border-b">
      <div className="w-full max-w-7xl flex justify-between items-center ">
        <div className="w-1/3 md:hidden">
          <button
            className="w-8 h-8 hover:bg-gray-100 rounded flex justify-center items-center"
            onClick={() => props.displaySidebar()}
          >
            <ThreeLineHorizontal strokeWidth={1.5} size={28} />
          </button>
        </div>
        <div className="w-1/3 md:w-3/4 flex justify-center md:justify-start items-center">
          <Link
            to="/"
            className="w-12 h-12 flex justify-center items-center md:mr-8 md:ml-6"
          >
            <span className="leading-5 flex font-bold text-lg text-center lowercase">
              <span className="text-blue-400">Good</span>
              <span className="text-blue-600">Brews</span>
            </span>
          </Link>
          <nav className="space-x-2 hidden md:block h-full">
            <Link
              to="/"
              className="hover:border-b-4 border-blue-600 px-3 pb-7 h-full font-medium uppercase text-sm"
            >
              Breweries
            </Link>
            <Link
              to="/about"
              className="hover:border-b-4 border-blue-600 px-3 pb-7 h-full font-medium uppercase text-sm"
            >
              About
            </Link>
            <Link
              to="/news"
              className="hover:border-b-4 border-blue-600 px-3 pb-7 h-full font-medium uppercase text-sm"
            >
              News
            </Link>
          </nav>
        </div>
        <div className="w-1/3 md:w-1/4 flex justify-end space-x-2 text-sm">
          <Link to="/login" className="hidden md:block border rounded px-5 py-2 whitespace-nowrap hover:bg-gray-100">Login</Link>
          <Link to="/login" className="hidden md:block border rounded px-5 py-2 whitespace-nowrap hover:bg-blue-700 bg-blue-600 text-white">Sign Up</Link>
          <button
            className="w-8 h-8 hover:bg-gray-100 rounded flex justify-center items-center md:hidden"
            onClick={() => props.displaySidebar()}
          >
            <Person strokeWidth={1.5} size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
