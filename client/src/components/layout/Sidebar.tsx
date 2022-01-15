interface SidebarProps {
  hideSidebar: Function;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div>
      <div
        className="w-full bg-white fixed z-30 top-0 left-0 bottom-0 border-r"
        style={{ maxWidth: "90%" }}
      ></div>
      <div
        className="fixed top-0 left-0 bottom-0 right-0 bg-black z-20 opacity-10"
        onClick={() => props.hideSidebar()}
      ></div>
    </div>
  );
};

export default Sidebar;
