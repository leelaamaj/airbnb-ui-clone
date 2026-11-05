import { categories } from '@/lib/listings';
import type { Category } from '@/types/listing';
import { Icon } from './Icon';
const icons = ['home', 'beach', 'design', 'cabin', 'leaf', 'city'];
export const CategoryFilter = ({
  active,
  onChange,
  disabled,
}: {
  active: Category;
  onChange: (value: Category) => void;
  disabled: boolean;
}) => (
  <div
    aria-label="Stay categories"
    className="flex gap-8 overflow-x-auto border-b border-neutral-200 pt-7 md:justify-center md:gap-12"
  >
    {categories.map((category, index) => (
      <button
        key={category}
        type="button"
        onClick={() => onChange(category)}
        disabled={disabled}
        aria-pressed={active === category}
        className={`flex shrink-0 flex-col items-center gap-2 border-b-2 px-1 pt-2 pb-4 text-xs font-semibold transition-colors ${active === category ? 'border-ink text-ink' : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-ink'}`}
      >
        <Icon name={icons[index]} className="size-6" />
        {category}
      </button>
    ))}
  </div>
);
