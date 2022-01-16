export interface BreweryType {
  obdb_id: string;
  name: string;
  brewery_type?: string;
  street?: string;
  address_2?: string;
  address_3?: string;
  city: string;
  state?: string;
  county_province?: string;
  postal_code: string;
  phone?: string;
  website_url?: string;
  country: string;
  longitude?: number;
  latitude?: number;
  tags?: string;
}
