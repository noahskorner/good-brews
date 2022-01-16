import { BreweryType } from "../../interfaces/global";

interface BreweryCardProps extends BreweryType {
  setCurrentBrewery: Function;
}

const BreweryCard = ({
  obdb_id,
  name,
  street,
  address_2,
  address_3,
  city,
  state,
  postal_code,
  country,
  brewery_type,
  website_url,
  setCurrentBrewery,
}: BreweryCardProps) => {
  return (
    <button
      className="w-full border rounded p-4 flex hover:shadow text-left"
      onClick={() => setCurrentBrewery(obdb_id)}
    >
      <div className="p-2 space-y-2 flex-grow">
        {/* Name */}
        <h6 className="text-md lg:text-xl font-semibold hover:underline">
          {name}
        </h6>
        {/* Address */}
        <p className="text-sm text-gray-500">
          {street}&nbsp;
          {address_2 && `${address_2} `}
          {address_3 && `${address_3} `}
          {city},&nbsp;
          {state}&nbsp;
          {postal_code}&nbsp;
          {country} &nbsp;
        </p>
        {/* Type */}
        <div className="text-xs bg-gray-100 px-3 py-1 inline-block rounded capitalize">
          {brewery_type && brewery_type}
        </div>
        {/* Webiste */}
        {website_url && (
          <div className="w-full flex justify-end">
            <a
              href={website_url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm px-5 py-2"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </button>
  );
};

export default BreweryCard;
