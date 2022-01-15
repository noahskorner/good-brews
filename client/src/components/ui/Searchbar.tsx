import { Search, Location } from "akar-icons";

const Searchbar = () => {
  return (
    <div className="w-full max-w-3xl h-12 rounded shadow-lg border flex justify-between">
      <div className="w-full flex justify-between items-center">
        <div className="w-full p-2">
          <input
            placeholder="Brewery name"
            type="text"
            name="breweryName"
            className="w-full"
          />
        </div>
        <div className="h-7 bg-gray-300" style={{ width: "3px" }}></div>
        <div className="w-full px-2 flex">
          <input
            placeholder="Zipcode"
            type="text"
            name="zipCode"
            className="w-full"
          />
          <button className="w-8 h-8 hover:bg-gray-100 rounded flex justify-center items-center">
            <Location strokeWidth={2} size={20} />
          </button>
        </div>
      </div>
      <button
        className="w-12 bg-blue-600 text-white flex justify-center items-center rounded-r border-blue-600"
        style={{ margin: "-1px" }}
      >
        <Search strokeWidth={2} size={20} />
      </button>
    </div>
  );
};

export default Searchbar;
