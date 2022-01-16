import { Person, ThreeLineHorizontal } from "akar-icons";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

interface HeaderProps {
  displaySidebar: Function;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="w-full h-20 flex justify-center items-center px-2 bg-white border-b">
      <div className="w-full flex justify-between items-center ">
        {/* Hamburger */}
        <div className="w-1/3 md:hidden">
          <button className="icon-btn" onClick={() => props.displaySidebar()}>
            <ThreeLineHorizontal strokeWidth={1.5} size={28} />
          </button>
        </div>
        {/* Navigation */}
        <div className="w-1/3 md:w-3/4 flex justify-center md:justify-start items-center">
          <Logo />
          <nav className="space-x-2 hidden md:block h-full">
            <Link to="/" className="nav-btn">
              Breweries
            </Link>
            <Link to="/about" className="nav-btn">
              About
            </Link>
            <Link to="/news" className="nav-btn">
              News
            </Link>
          </nav>
        </div>
        {/* Actions */}
        <div className="w-1/3 md:w-1/4 flex justify-end space-x-2 text-sm">
          <Link to="/login" className="btn-secondary hidden md:block px-5 py-2">
            Login
          </Link>
          <Link to="/login" className="btn-primary hidden md:block px-5 py-2">
            Sign Up
          </Link>
          <Link to="/login" className="icon-btn md:hidden">
            <Person strokeWidth={1.5} size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
