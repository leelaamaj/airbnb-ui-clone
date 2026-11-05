'use client';
import Link from 'next/link';
import { useState } from 'react';
import { divIcon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import type { Listing } from '@/types/listing';
import { money } from '@/lib/search';
import { MapPlaceholder } from './MapPlaceholder';
import 'leaflet/dist/leaflet.css';

const ListingMap = ({ listings }: { listings: Listing[] }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return <MapPlaceholder message="The map is unavailable. You can still explore every stay in the list." />;
  return (
    <MapContainer
      center={[34.08, -118.1]}
      zoom={7}
      scrollWheelZoom={false}
      className="z-0 h-[440px] w-full overflow-hidden rounded-2xl font-sans"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        eventHandlers={{ tileerror: () => setFailed(true) }}
      />
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={listing.coordinates}
          title={`${listing.location}, ${money(listing.price)}`}
          alt={`${listing.title}, ${money(listing.price)} per night`}
          icon={divIcon({
            className: 'bg-transparent',
            iconSize: [64, 32],
            iconAnchor: [32, 16],
            html: `<span class="flex h-8 items-center justify-center rounded-full border border-neutral-200 bg-white px-3 text-xs font-bold text-ink shadow-md">${money(listing.price)}</span>`,
          })}
        >
          <Popup>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">{listing.location}</p>
              <p>{money(listing.price)} / night</p>
              <Link href={`/rooms/${listing.id}`} className="font-semibold text-coral underline">
                View {listing.title}
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default ListingMap;
