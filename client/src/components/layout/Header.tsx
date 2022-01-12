import { Person, ThreeLineHorizontal } from "akar-icons";

interface HeaderProps {
  displaySidebar: Function;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="w-full h-16 shadow flex justify-between items-center px-2">
      <div className="w-1/3 sm:hidden">
        <button
          className="w-8 h-8 hover:bg-gray-100 rounded flex justify-center items-center"
          onClick={() => props.displaySidebar()}
        >
          <ThreeLineHorizontal strokeWidth={1.5} size={28} />
        </button>
      </div>
      <div className="w-1/3 sm:w-full flex justify-center sm:justify-start items-center">
        <button className="w-12 h-12 flex justify-center items-center mr-4">
          <p className="tracking-tighter">
            <span className="font-bold text-4xl text-yellow-400 relative">
              g
            </span>
            <span className="font-bold text-4xl text-yellow-600 relative">
              b
            </span>
          </p>
        </button>
        <div className="hidden sm:block">
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-600 hover:border-b-2 border-yellow-600 mx-3 uppercase italic text-sm"
          >
            breweries
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-600 hover:border-b-2 border-yellow-600 mx-3 uppercase italic text-sm"
          >
            about
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-600 hover:border-b-2 border-yellow-600 mx-3 uppercase italic text-sm"
          >
            news
          </a>
        </div>
      </div>
      <div className="w-1/3 sm:w-full flex justify-end">
        <button className="w-8 h-8 hover:bg-gray-100 rounded flex justify-center items-center">
          <Person strokeWidth={1.5} size={22} />
        </button>
      </div>
    </div>
  );
};

export default Header;
