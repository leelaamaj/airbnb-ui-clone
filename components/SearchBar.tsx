import { Icon } from './Icon';
export const SearchBar = ({ value, onChange, disabled = false }: { value: string; onChange: (value: string) => void; disabled?: boolean }) => (
  <div className="relative mx-auto w-full max-w-xl">
    <label htmlFor="stay-search" className="sr-only">Search stays by title or location</label>
    <Icon name="search" className="pointer-events-none absolute left-5 top-5 size-5 text-neutral-500" />
    <input id="stay-search" type="search" placeholder="Where would you love to go?" value={value} onChange={event => onChange(event.target.value)} disabled={disabled} className="h-16 w-full rounded-full border border-neutral-300 bg-white pr-6 pl-14 text-sm shadow-[0_4px_18px_#00000009] transition-shadow hover:shadow-md disabled:bg-neutral-50 md:text-base" />
  </div>
);
