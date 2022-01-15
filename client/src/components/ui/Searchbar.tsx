import { Search, Location } from "akar-icons";

interface SearchbarProps {
  search: Function;
  setName: Function;
  setZip: Function;
  setCurrentLocation: Function;
}

const Searchbar = ({
  search,
  setName,
  setZip,
  setCurrentLocation,
}: SearchbarProps) => {
  return (
    <div className="w-full max-w-3xl h-12 rounded shadow-lg border flex justify-between">
      <div className="w-full flex justify-between items-center">
        <div className="w-full p-2">
          <input
            onChange={(event) => setName(event.target.value)}
            placeholder="Brewery name"
            type="text"
            name="breweryName"
            className="w-full h-8 px-2"
          />
        </div>
        <div className="h-7 bg-gray-300" style={{ width: "3px" }}></div>
        <div className="w-full px-2 flex">
          <input
            onChange={(event) => setZip(event.target.value)}
            placeholder="Zipcode"
            type="text"
            name="zipCode"
            className="w-full h-8 px-2"
          />
          <button
            onClick={() => setCurrentLocation()}
            className="w-8 h-8 hover:bg-gray-100 rounded flex justify-center items-center"
          >
            <Location strokeWidth={2} size={20} />
          </button>
        </div>
      </div>
      <button
        onClick={() => search()}
        className="w-12 bg-blue-600 text-white flex justify-center items-center rounded-r border-blue-600"
        style={{ margin: "-1px" }}
      >
        <Search strokeWidth={2} size={20} />
      </button>
    </div>
  );
};

export default Searchbar;
