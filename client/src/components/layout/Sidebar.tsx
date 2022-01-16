import { Cross } from "akar-icons";
import { Link } from "react-router-dom";
interface SidebarProps {
  hideSidebar: Function;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div>
      <div
        className="w-full bg-white fixed z-30 top-0 left-0 bottom-0 border-r"
        style={{ maxWidth: "50%" }}
      >
        <div
          onClick={() => props.hideSidebar()}
          className="w-full h-20 p-2 flex justify-end items-center"
        >
          <button className="h-8 w-8 hover:bg-gray-100 rounded flex justify-center items-center">
            <Cross strokeWidth={2} size={24} />
          </button>
        </div>
        <nav className="px-4 flex flex-col space-y-4">
          <Link to="/" className="hover:text-blue-600 text-lg font-medium">
            Breweries
          </Link>
          <Link to="/about" className="hover:text-blue-600 text-lg font-medium">
            About
          </Link>
          <Link to="/news" className="hover:text-blue-600 text-lg font-medium">
            News
          </Link>
          <Link to="/login" className="hover:text-blue-600 text-lg font-medium">
            Login
          </Link>
          <Link to="/register" className="hover:text-blue-600 text-lg font-medium">
            Sign Up
          </Link>
        </nav>
      </div>
      <div
        onClick={() => props.hideSidebar()}
        className="fixed top-0 left-0 bottom-0 right-0 bg-black z-20 opacity-10"
      ></div>
    </div>
  );
};

export default Sidebar;
