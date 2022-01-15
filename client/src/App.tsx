import useSidebar from "./composables/useSidebar";
import useWindowSize from "./composables/useWindowSize";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

interface AppProps {
  children?: JSX.Element | JSX.Element[];
}

const App = (props: AppProps) => {
  const { width, height } = useWindowSize();
  const appStyle = { width: `${width}px`, height: `${height}px` };
  const { showSidebar, displaySidebar, hideSidebar } = useSidebar();

  return (
    <div
      className="App font-primary bg-white overflow-hidden"
      style={appStyle}
    >
      <Header displaySidebar={displaySidebar} />
      {showSidebar && width && width < 640 && (
        <Sidebar hideSidebar={hideSidebar} />
      )}
      {props.children}
    </div>
  );
};

export default App;
