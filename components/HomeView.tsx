'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { rooms } from '@/lib/listings';
import { filterListings } from '@/lib/search';
import type { Category, Room } from '@/types/listing';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { ListingGrid } from './ListingGrid';
import { LoadingState } from './LoadingState';
import { Icon } from './Icon';
export const HomeView = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('All homes');
  const [listings, setListings] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => { setListings(rooms); setLoading(false); }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const search = (value: string) => { setQuery(value); setListings(filterListings(rooms, value, category)); };
  const chooseCategory = (value: Category) => { setCategory(value); setListings(filterListings(rooms, query, value)); };
  return (
    <main id="main-content" className="mx-auto max-w-[1440px] px-6 pt-8 md:px-10 md:pt-10 lg:px-16">
      <SearchBar value={query} onChange={search} disabled={loading} />
      <CategoryFilter active={category} onChange={chooseCategory} disabled={loading} />
      <section aria-labelledby="stays-heading" className="pt-8">
        <div className="mb-6 flex items-end justify-between gap-4"><div><h1 id="stays-heading" className="text-2xl font-semibold tracking-tight md:text-3xl">Find your next stay</h1><p className="mt-2 text-sm text-neutral-500">A change of scenery. A place to feel at home.</p></div><span aria-live="polite" className="shrink-0 text-xs text-neutral-500">{loading ? 'Loading…' : `${listings.length} stays`}</span></div>
        {loading ? <LoadingState /> : <ListingGrid listings={listings} />}
      </section>
      <div className="mt-14 flex flex-col items-center gap-4 border-t border-neutral-100 pt-9"><p className="text-sm font-semibold">There’s a stay for every kind of getaway.</p><Link href="/catalog" className="flex items-center gap-3 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white hover:bg-neutral-700">Explore all stays<Icon name="arrow" className="size-4" /></Link></div>
    </main>
  );
};
