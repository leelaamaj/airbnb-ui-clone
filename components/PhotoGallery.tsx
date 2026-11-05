'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from './Icon';
export const PhotoGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [index, setIndex] = useState(0);
  const cycle = (step: number) => setIndex((current) => (current + step + images.length) % images.length);
  return (
    <section aria-label="Room photos" className="relative overflow-hidden rounded-2xl bg-neutral-100">
      <div className="relative aspect-[1.1] md:aspect-[2.2]">
        <Image
          priority
          src={images[index]}
          alt={`${title}, placeholder photo ${index + 1}`}
          fill
          sizes="(min-width:1280px) 1152px, 100vw"
          className="object-cover"
        />
      </div>
      <button
        type="button"
        onClick={() => cycle(-1)}
        aria-label="Previous photo"
        className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow hover:bg-white"
      >
        <Icon name="back" />
      </button>
      <button
        type="button"
        onClick={() => cycle(1)}
        aria-label="Next photo"
        className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow hover:bg-white"
      >
        <Icon name="arrow" />
      </button>
      <p
        aria-live="polite"
        className="absolute right-4 bottom-4 rounded-lg bg-black/65 px-3 py-1.5 text-xs font-semibold text-white"
      >
        {index + 1} / {images.length}
      </p>
    </section>
  );
};
