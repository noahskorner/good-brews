import { Search } from "akar-icons";
import { KeyboardEvent } from "react";
import ZipInput from "./ZipInput";

interface SearchbarProps {
  search: Function;
  setName: Function;
  setZip: Function;
}

const Searchbar = ({ search, setName, setZip }: SearchbarProps) => {
  const handleEnterKeypress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    <div className="w-full max-w-3xl space-y-2">
      <div
        className="w-full h-12 rounded shadow-lg border flex justify-between"
        onKeyDown={(event) => handleEnterKeypress(event)}
      >
        {/* Inputs */}
        <div className="w-full flex justify-between items-center">
          {/* Brewery Name */}
          <div className="w-full p-2">
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder="Brewery name"
              type="text"
              name="breweryName"
              className="w-full h-8 px-2 rounded"
            />
          </div>
          <div className="h-7 bg-gray-300" style={{ width: "3px" }}></div>
          <ZipInput search={search} setZip={setZip} />
        </div>
        {/* Search Button */}
        <button
          onClick={() => search()}
          className="w-12 bg-blue-600 text-white flex justify-center items-center rounded-r border-blue-600 flex-shrink-0"
          style={{ margin: "-1px" }}
        >
          <Search strokeWidth={2} size={20} />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
