'use client';
import { useState } from 'react';
import type { Room } from '@/types/listing';
import { money } from '@/lib/search';
import { GuestCounter } from './GuestCounter';
import { Icon } from './Icon';
export const BookingCard = ({ room }: { room: Room }) => {
  const [guests, setGuests] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  return (
    <section aria-label="Book your stay" className="rounded-2xl border border-neutral-200 p-6 shadow-[0_6px_25px_#0000000b] md:sticky md:top-6">
      <div className="mb-6 flex items-center justify-between gap-3"><p><span className="text-2xl font-semibold">{money(room.price)}</span> <span className="text-sm text-neutral-500">/ night</span></p><span className="flex items-center gap-1 text-xs"><Icon name="star" className="size-3 fill-current" />{room.rating}</span></div>
      <GuestCounter value={guests} max={room.maxGuests} onChange={value => { setGuests(value); setConfirmed(false); }} />
      <button type="button" onClick={() => setConfirmed(true)} className="mt-5 w-full rounded-xl bg-coral px-5 py-4 font-semibold text-white hover:bg-[#c91450]">Reserve</button>
      <p className="mt-4 text-center text-xs text-neutral-500">You won’t be charged</p>
      {confirmed && <p role="status" className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">Demo confirmed for {guests} {guests === 1 ? 'guest' : 'guests'}. No real reservation was made.</p>}
      <p className="mt-5 border-t border-neutral-100 pt-4 text-center text-[11px] text-neutral-400">Fictional stay · Class project</p>
    </section>
  );
};
