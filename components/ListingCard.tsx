'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { money } from '@/lib/search';
import type { Listing } from '@/types/listing';
import { Icon } from './Icon';
export const ListingCard = ({ listing }: { listing: Listing }) => {
  const [saved, setSaved] = useState(false);
  return (
    <article data-testid="listing-card" data-price={listing.price} className="group relative min-w-0">
      <Link href={`/rooms/${listing.id}`} className="block rounded-2xl" aria-label={`${listing.title}, ${listing.location}, ${money(listing.price)} per night`}>
        <div className="relative aspect-[1.08] overflow-hidden rounded-2xl bg-neutral-100">
          <Image src={listing.images[0]} alt={`Placeholder interior for ${listing.title}`} fill sizes="(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold shadow-sm">Guest favorite</span>
        </div>
        <div className="mt-3 flex items-start justify-between gap-3 text-sm"><h2 className="font-semibold">{listing.location}</h2><span className="flex shrink-0 items-center gap-1"><Icon name="star" className="size-3 fill-current" />{listing.rating.toFixed(2)}</span></div>
        <p className="mt-1 truncate text-sm text-neutral-500">{listing.title}</p>
        <p className="mt-1 text-sm text-neutral-500">{listing.beds} {listing.beds === 1 ? 'bed' : 'beds'} · Up to {listing.maxGuests} guests</p>
        <p className="mt-2 text-sm"><span className="font-semibold">{money(listing.price)}</span> <span className="text-neutral-600">/ night</span></p>
      </Link>
      <button type="button" aria-label={`${saved ? 'Unsave' : 'Save'} ${listing.title}`} aria-pressed={saved} onClick={() => setSaved(!saved)} className={`absolute top-2 right-2 flex size-11 items-center justify-center rounded-full ${saved ? 'bg-white text-coral' : 'bg-black/20 text-white hover:bg-black/40'}`}><Icon name="heart" className={`size-6 ${saved ? 'fill-current' : ''}`} /></button>
    </article>
  );
};
