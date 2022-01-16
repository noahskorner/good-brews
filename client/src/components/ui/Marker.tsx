import { useState } from "react";
import { BreweryInterface } from "../../interfaces/global";

interface MarkerProps extends BreweryInterface {
  lat: number;
  lng: number;
  setCurrentBrewery: Function;
}
const Marker = (props: MarkerProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onClick={() => props.setCurrentBrewery(props.obdb_id)}
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="w-10 h-10 bg-yellow-400 rounded-full text-yellow-800 flex justify-center items-center shadow hover:cursor-pointer relative"
    >
      {/* Marker */}
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="beer"
        className="h-6 pl-1"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"
        ></path>
      </svg>
      {/* Tooltip */}
      {showTooltip && (
        <div className="w-64 bg-white border shadow absolute z-10 bottom-full mb-2 text-black p-4 rounded">
          <h6 className="font-medium text-sm">{props.name}</h6>
          <p className="text-xs text-gray-500">
            {props.street}&nbsp;
            {props.address_2 && `${props.address_2} `}
            {props.address_3 && `${props.address_3} `}
          </p>
          <p className="text-xs text-gray-500 mb-2">
            {props.city},&nbsp;
            {props.state}&nbsp;
            {props.postal_code}&nbsp;
          </p>
          <span className="py-1 px-2 bg-blue-600 text-white rounded capitalize">
            {props.brewery_type}
          </span>
        </div>
      )}
    </div>
  );
};

export default Marker;
