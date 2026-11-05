import { Icon } from './Icon';
export const MapPlaceholder = ({ message = 'Explore the neighborhood' }: { message?: string }) => (
  <div
    role="status"
    className="flex h-[440px] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-neutral-100 p-6 text-center text-neutral-500"
  >
    <Icon name="pin" className="size-8" />
    <p className="font-semibold text-ink">Map</p>
    <p className="text-sm">{message}</p>
  </div>
);
