import type { Room } from '@/types/listing';
import { Icon } from './Icon';
export const RoomHeader = ({ room }: { room: Room }) => (
  <div className="border-b border-neutral-200 pb-7">
    <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{room.title}</h1>
    <p className="mt-3 text-neutral-600">Entire home in {room.location}</p>
    <p className="mt-2 text-sm text-neutral-500">{room.maxGuests} guests · {room.beds} {room.beds === 1 ? 'bed' : 'beds'} · 1 bath</p>
    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm"><Icon name="star" className="size-4 fill-current" /><span className="font-semibold">{room.rating.toFixed(2)}</span><span>·</span><span className="underline underline-offset-2">{room.reviews} reviews</span><span className="ml-2 rounded-full bg-neutral-100 px-3 py-1 text-xs">Guest favorite</span></div>
  </div>
);
