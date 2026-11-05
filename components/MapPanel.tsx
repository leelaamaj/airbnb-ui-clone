'use client';
import dynamic from 'next/dynamic';
import type { Listing } from '@/types/listing';
import { MapPlaceholder } from './MapPlaceholder';
const MapUnavailable = () => (
  <MapPlaceholder message="The map is unavailable. You can still explore every stay in the list." />
);
const InteractiveMap = dynamic(() => import('./ListingMap').catch(() => ({ default: MapUnavailable })), {
  ssr: false,
  loading: () => <MapPlaceholder message="Loading the map…" />,
});
export const MapPanel = ({ listings }: { listings: Listing[] }) => <InteractiveMap listings={listings} />;
