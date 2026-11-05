import type { Listing } from '@/types/listing';
import { ListingCard } from './ListingCard';
export const ListingGrid = ({ listings, compact = false }: { listings: Listing[]; compact?: boolean }) =>
  listings.length ? (
    <div
      className={`grid grid-cols-1 gap-x-6 gap-y-9 md:grid-cols-2 ${compact ? '' : 'lg:grid-cols-3 xl:grid-cols-4'}`}
    >
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  ) : (
    <p role="status" className="rounded-2xl bg-neutral-50 p-10 text-center text-neutral-500">
      No stays found. Try another place or choose All homes.
    </p>
  );
