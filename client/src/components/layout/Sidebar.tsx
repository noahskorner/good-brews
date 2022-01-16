import { Cross } from "akar-icons";
import { Link } from "react-router-dom";
interface SidebarProps {
  hideSidebar: Function;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div>
      {/* Sidebar */}
      <div
        className="w-full bg-white fixed z-30 top-0 left-0 bottom-0 border-r"
        style={{ maxWidth: "50%" }}
      >
        {/* Header */}
        <div className="w-full h-20 p-2 flex justify-end items-center">
          <button
            onClick={() => props.hideSidebar()}
            className="icon-btn"
          >
            <Cross strokeWidth={2} size={24} />
          </button>
        </div>
        {/* Navigation */}
        <nav className="px-4 flex flex-col space-y-4">
          <Link to="/" className="sidebar-btn">
            Breweries
          </Link>
          <Link to="/about" className="sidebar-btn">
            About
          </Link>
          <Link to="/news" className="sidebar-btn">
            News
          </Link>
          <Link to="/login" className="sidebar-btn">
            Login
          </Link>
          <Link to="/register" className="sidebar-btn">
            Sign Up
          </Link>
        </nav>
      </div>
      {/* Modal Background */}
      <div
        onClick={() => props.hideSidebar()}
        className="fixed top-0 left-0 bottom-0 right-0 bg-black z-20 opacity-10"
      ></div>
    </div>
  );
};

export default Sidebar;
