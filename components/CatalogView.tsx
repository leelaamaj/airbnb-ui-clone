'use client';
import { useState } from 'react';
import { rooms } from '@/lib/listings';
import { sortListings } from '@/lib/search';
import type { SortOrder } from '@/types/listing';
import { ResultsHeader } from './ResultsHeader';
import { ListingGrid } from './ListingGrid';
import { MapPanel } from './MapPanel';
export const CatalogView = () => {
  const [sort, setSort] = useState<SortOrder>('ascending');
  const listings = sortListings(rooms, sort);
  return (
    <main id="main-content" className="mx-auto max-w-[1440px] px-6 pt-8 md:px-10 lg:px-16">
      <ResultsHeader count={listings.length} sort={sort} onSort={setSort} />
      <div className="grid items-start gap-8 md:grid-cols-[1.15fr_1fr]">
        <ListingGrid listings={listings} compact />
        <section aria-label="Stay locations" className="min-w-0 md:sticky md:top-6">
          <MapPanel listings={listings} />
        </section>
      </div>
    </main>
  );
};
