import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import useSidebar from "./composables/useSidebar";
import useWindowSize from "./composables/useWindowSize";

const App = () => {
  const { width, height } = useWindowSize();
  const appStyle = { width: `${width}px`, height: `${height}px` };
  const { showSidebar, displaySidebar, hideSidebar } = useSidebar();

  return (
    <div
      className="App font-primary w-100 h-100 bg-white text-gray-800"
      style={appStyle}
    >
      <Header displaySidebar={displaySidebar} />
      {showSidebar && width && width < 640 && (
        <Sidebar hideSidebar={hideSidebar} />
      )}
    </div>
  );
};

export default App;
