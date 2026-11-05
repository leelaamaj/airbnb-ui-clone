import type { Room } from '@/types/listing';
export const HostInfo = ({ host }: { host: Room['host'] }) => (
  <section aria-label="Your host" className="flex items-center gap-4 border-b border-neutral-200 py-6">
    <div
      aria-label="Host avatar placeholder"
      className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#eadfd2] text-sm font-semibold text-[#685747]"
    >
      {host.initials}
    </div>
    <div>
      <h2 className="font-semibold">Hosted by {host.name}</h2>
      <p className="mt-1 text-sm text-neutral-500">Superhost · {host.years} years hosting</p>
    </div>
  </section>
);
