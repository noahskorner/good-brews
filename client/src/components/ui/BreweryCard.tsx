import { Brewery } from "../../interfaces/global";

const BreweryCard = ({
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
}: Brewery) => {
  return (
    <div className="w-full border rounded p-4 flex hover:shadow">
      <div className="h-20 w-20 md:h-32 md:w-32 lg:h-64 lg:w-64 bg-black rounded hidden"></div>
      <div className="p-2 space-y-2 flex-grow">
        <h6 className="text-md lg:text-xl font-semibold hover:underline">
          {name}
        </h6>
        <p className="text-sm text-gray-500">
          {street}&nbsp;
          {address_2 && `${address_2} `}
          {address_3 && `${address_3} `}
          {city},&nbsp;
          {state}&nbsp;
          {postal_code}&nbsp;
          {country} &nbsp;
        </p>
        <div className="text-xs bg-gray-100 px-3 py-1 inline-block rounded capitalize">
          {brewery_type && brewery_type}
        </div>
        {website_url && (
          <div className="w-full flex justify-end">
            <a
              href={website_url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreweryCard;
