import { Person, ThreeLineHorizontal } from "akar-icons";
import { Link } from "react-router-dom";

interface HeaderProps {
  displaySidebar: Function;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="w-full h-20 flex justify-center items-center px-2 bg-white border-b">
      <div className="w-full flex justify-between items-center ">
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
            className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-600 mx-2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="beer"
              className="h-7 pl-1 text-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"
              ></path>
            </svg>
          </Link>
          <nav className="space-x-2 hidden md:block h-full">
            <Link
              to="/"
              className="hover:bg-gray-100 px-3 py-2 rounded h-full font-medium"
            >
              Breweries
            </Link>
            <Link
              to="/about"
              className="hover:bg-gray-100 px-3 py-2 rounded h-full font-medium"
            >
              About
            </Link>
            <Link
              to="/news"
              className="hover:bg-gray-100 px-3 py-2 rounded h-full font-medium"
            >
              News
            </Link>
          </nav>
        </div>
        <div className="w-1/3 md:w-1/4 flex justify-end space-x-2 text-sm">
          <Link
            to="/login"
            className="hidden md:block border rounded px-5 py-2 whitespace-nowrap hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            to="/login"
            className="hidden md:block border rounded px-5 py-2 whitespace-nowrap hover:bg-blue-700 bg-blue-600 text-white"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="w-8 h-8 hover:bg-gray-100 rounded flex justify-center items-center md:hidden"
          >
            <Person strokeWidth={1.5} size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
