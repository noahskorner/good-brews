interface SidebarProps {
  hideSidebar: Function;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div>
      <div className="w-full max-w-xs bg-white fixed z-20 top-0 left-0 bottom-0 border-r"></div>
      <div
        className="fixed top-0 left-0 bottom-0 right-0 bg-black z-10 opacity-20"
        onClick={() => props.hideSidebar()}
      ></div>
    </div>
  );
};

export default Sidebar;
