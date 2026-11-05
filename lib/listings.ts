import type { Category, Room } from '@/types/listing';
export const categories: Category[] = ['All homes', 'Beach', 'Design', 'Cabins', 'Countryside', 'City'];
const photo = (name: string) => `/images/${name}.jpg`;
const fixtures: [string, string, string, number, number, Category, string, number, number][] = [
  ['coastal-retreat', 'A little closer to the ocean', 'Malibu, California', 245, 4.98, 'Beach', 'coastal', 34.0259, -118.7798],
  ['desert-house', 'Desert light, beautiful design', 'Palm Springs, California', 189, 4.95, 'Design', 'desert', 33.8303, -116.5453],
  ['forest-cabin', 'Your quiet corner of the woods', 'Big Bear, California', 165, 4.92, 'Cabins', 'cabin', 34.2439, -116.9114],
  ['city-loft', 'A sunlit loft above the city', 'Los Angeles, California', 135, 4.89, 'City', 'loft', 34.0522, -118.2437],
  ['garden-hideaway', 'Slow mornings in the garden', 'Ojai, California', 210, 4.97, 'Countryside', 'garden', 34.448, -119.2429],
  ['beach-apartment', 'An easygoing coastal escape', 'Long Beach, California', 155, 4.94, 'Beach', 'bedroom', 33.7701, -118.1937],
  ['design-studio', 'Thoughtfully made, just for two', 'Pasadena, California', 175, 4.96, 'Design', 'loft', 34.1478, -118.1445],
  ['hillside-home', 'Room to breathe in the hills', 'Topanga, California', 280, 4.99, 'Countryside', 'desert', 34.0922, -118.6021],
];
export const rooms: Room[] = fixtures.map(([id, title, location, price, rating, category, image, lat, lng], index) => ({
  id, title, location, price, rating, category,
  images: [photo(image), photo(image === 'bedroom' ? 'coastal' : 'bedroom'), photo('garden')],
  coordinates: [lat, lng], beds: index % 2 + 1, maxGuests: index % 2 ? 2 : 4,
  reviews: 42 + index * 17,
  host: { name: ['Alex', 'Jordan', 'Morgan', 'Taylor'][index % 4], years: index + 2, initials: ['AL', 'JO', 'MO', 'TA'][index % 4] },
  amenities: ['Fast wifi', 'Full kitchen', 'Free parking', 'Air conditioning', 'Dedicated workspace', 'Outdoor space'],
  description: 'Settle into a bright, thoughtfully furnished space with room to unwind. Make a slow breakfast, explore the neighborhood, and come home to a peaceful evening. A simple stay, with all the little comforts that matter.',
}));
