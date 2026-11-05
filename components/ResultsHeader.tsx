import type { SortOrder } from '@/types/listing';
export const ResultsHeader = ({
  count,
  sort,
  onSort,
}: {
  count: number;
  sort: SortOrder;
  onSort: (value: SortOrder) => void;
}) => (
  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Stays in California</h1>
      <p aria-live="polite" className="mt-2 text-sm text-neutral-500">
        {count} stays · A little escape, your way
      </p>
    </div>
    <label className="flex items-center gap-2 text-xs font-semibold">
      Sort by
      <select
        aria-label="Sort by price"
        value={sort}
        onChange={(event) => onSort(event.target.value as SortOrder)}
        className="max-w-full rounded-full border border-neutral-300 bg-white px-3 py-3 text-xs font-normal"
      >
        <option value="ascending">Price: low to high</option>
        <option value="descending">Price: high to low</option>
      </select>
    </label>
  </div>
);
