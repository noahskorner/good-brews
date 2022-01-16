import { useEffect, useState } from "react";
import { BreweryInterface } from "../../interfaces/global";
import { getBrewery } from "../../services/api";
import Map from "./Map";

interface BreweryProps {
  id: string | null;
  setCurrentBrewery: Function;
}

const Brewery = ({ id, setCurrentBrewery }: BreweryProps) => {
  const [brewery, setBrewery] = useState<BreweryInterface | null>(null);

  const loadBrewery = async (id: string) => {
    try {
      const response = await getBrewery(id);
      setBrewery(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) loadBrewery(id);
  }, [id]);

  return (
    <div className="flex justify-center items-start fixed top-0 left-0 right-0 bottom-0 z-10 p-4">
      {/* Modal */}
      {brewery && (
        <div className="w-full max-w-5xl rounded relative z-10 bg-white flex flex-col md:flex-row-reverse justify-between">
          {/* Map */}
          <div className="w-full md:w-1/2 rounded-r h-64 md:h-auto">
            <Map
              breweries={[brewery]}
              setCurrentBrewery={setCurrentBrewery}
            ></Map>
          </div>
          {/* Brewery */}
          <div className="w-full md:w-1/2 space-y-2 bg-white flex justify-center items-start flex-col py-8 md:py-32 px-6 rounded-l">
            <h1 className="text-2xl md:text-4xl font-semibold">
              {brewery.name}
            </h1>
            <p className="text-lg text-gray-500 font-light">
              {brewery.street}&nbsp;
              {brewery.address_2 && `${brewery.address_2} `}
              {brewery.address_3 && `${brewery.address_3} `} {brewery.city}
              ,&nbsp;
              {brewery.state}&nbsp;
              {brewery.postal_code}&nbsp;
            </p>
            <div className="bg-gray-100 capitalize px-4 py-2 inline-block rounded">
              {brewery.brewery_type}
            </div>
            {brewery.website_url && (
              <a
                href={brewery.website_url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-4 py-2"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      )}
      {/* Modal Background */}
      <div
        onClick={() => setCurrentBrewery(null)}
        className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10"
      ></div>
    </div>
  );
};

export default Brewery;
