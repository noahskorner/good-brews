import useWindowSize from "../composables/useWindowSize";
import Map from "../components/layout/Map";
import Searchbar from "../components/ui/Searchbar";

const Breweries = () => {
  const { height } = useWindowSize();
  return (
    <div
      className="w-full h-full flex"
      style={{ height: `calc(${height}px - 5rem` }}
    >
      <div className="w-full md:w-1/2 h-full overflow-y-auto flex justify-center p-4">
        <Searchbar />
      </div>
      <div className="hidden md:block w-1/2 h-full">
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
};

export default Breweries;
