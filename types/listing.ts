export type Category = 'All homes' | 'Beach' | 'Design' | 'Cabins' | 'Countryside' | 'City';
export type SortOrder = 'ascending' | 'descending';
export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  category: Category;
  images: string[];
  coordinates: [number, number];
  beds: number;
  maxGuests: number;
}
export interface Room extends Listing {
  reviews: number;
  host: { name: string; years: number; initials: string };
  amenities: string[];
  description: string;
}
