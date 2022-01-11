import { Person } from "akar-icons";

function Header() {
  return (
    <div className="w-full h-16 shadow flex justify-end">
      <Person strokeWidth={2} size={24} />
    </div>
  );
}

export default Header;
