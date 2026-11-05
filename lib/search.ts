import type { Category, Listing, SortOrder } from '../types/listing';
export const filterListings = <T extends Listing>(listings: T[], query: string, category: Category = 'All homes'): T[] => {
  const term = query.trim().toLocaleLowerCase();
  return listings.filter(listing => (category === 'All homes' || listing.category === category) &&
    `${listing.title} ${listing.location}`.toLocaleLowerCase().includes(term));
};
export const sortListings = <T extends Listing>(listings: T[], order: SortOrder): T[] =>
  [...listings].sort((a, b) => order === 'ascending' ? a.price - b.price : b.price - a.price);
export const money = (value: number) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0,
}).format(value);
