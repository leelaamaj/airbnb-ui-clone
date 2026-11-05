import { Icon } from './Icon';
export const Amenities = ({ items }: { items: string[] }) => (
  <section className="border-t border-neutral-200 pt-7"><h2 className="text-xl font-semibold">What this place offers</h2><ul className="mt-6 grid grid-cols-1 gap-5 min-[375px]:grid-cols-2">{items.map((item, index) => <li key={item} className="flex items-center gap-3 text-sm"><Icon name={index === 0 ? 'wifi' : index === 5 ? 'leaf' : 'check'} className="size-6 shrink-0" />{item}</li>)}</ul></section>
);
