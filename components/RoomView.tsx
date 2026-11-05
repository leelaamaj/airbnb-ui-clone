'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { rooms } from '@/lib/listings';
import type { Room } from '@/types/listing';
import { LoadingState } from './LoadingState';
import { PhotoGallery } from './PhotoGallery';
import { RoomHeader } from './RoomHeader';
import { HostInfo } from './HostInfo';
import { Amenities } from './Amenities';
import { BookingCard } from './BookingCard';
import { Icon } from './Icon';
export const RoomView = ({ id }: { id: string }) => {
  const [room, setRoom] = useState<Room | undefined>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRoom(rooms.find((item) => item.id === id));
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);
  return (
    <main id="main-content" className="mx-auto max-w-[1250px] px-6 pt-6 md:px-10 lg:px-16">
      <Link
        href="/catalog"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
      >
        <Icon name="back" className="size-4" />
        Back to all stays
      </Link>
      {loading ? (
        <LoadingState label="Getting your room ready…" />
      ) : !room ? (
        <div className="py-20">
          <h1 className="text-2xl font-semibold">This stay couldn’t be found</h1>
          <p className="mt-3 text-neutral-500">Try another home from the catalog.</p>
        </div>
      ) : (
        <>
          <PhotoGallery images={room.images} title={room.title} />
          <div className="mt-8 grid items-start gap-9 md:grid-cols-[1.25fr_1fr] md:gap-12 lg:gap-20">
            <div>
              <RoomHeader room={room} />
              <HostInfo host={room.host} />
              <section className="py-7">
                <h2 className="text-xl font-semibold">A place to make yourself at home</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{room.description}</p>
              </section>
              <Amenities items={room.amenities} />
            </div>
            <BookingCard room={room} />
          </div>
        </>
      )}
    </main>
  );
};
