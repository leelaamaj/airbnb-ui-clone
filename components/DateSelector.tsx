'use client';
import { DayPicker, type DateRange } from 'react-day-picker';
import { startOfDay } from 'date-fns';

export const DateSelector = ({
  range,
  onSelect,
}: {
  range: DateRange | undefined;
  onSelect: (value: DateRange | undefined) => void;
}) => (
  <fieldset className="mt-5 min-w-0 border-t border-neutral-200 pt-5">
    <legend className="sr-only">Choose check-in and check-out</legend>
    <p className="text-sm font-semibold">Make time for a getaway</p>
    <p aria-live="polite" className="mt-2 text-xs text-neutral-500">
      {range?.from
        ? `${range.from.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} → ${range.to ? range.to.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Choose checkout'}`
        : 'Choose your check-in and check-out dates'}
    </p>
    <DayPicker
      mode="range"
      min={1}
      selected={range}
      onSelect={onSelect}
      disabled={{ before: startOfDay(new Date()) }}
      startMonth={startOfDay(new Date())}
      excludeDisabled
      showOutsideDays={false}
      classNames={{
        root: 'relative mt-4 w-full',
        months: 'w-full',
        month: 'w-full',
        month_caption: 'flex h-11 items-center text-xs font-semibold',
        nav: 'absolute top-0 right-0 flex gap-1',
        button_previous:
          'flex size-10 items-center justify-center rounded-full hover:bg-neutral-100 disabled:opacity-25',
        button_next: 'flex size-10 items-center justify-center rounded-full hover:bg-neutral-100 disabled:opacity-25',
        chevron: 'size-4 fill-current',
        month_grid: 'w-full table-fixed border-collapse',
        weekday: 'h-9 text-[10px] font-normal text-neutral-500',
        day: 'p-0 text-center text-xs',
        day_button:
          'mx-auto flex h-9 w-full max-w-9 items-center justify-center rounded-full hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-coral',
        selected: 'font-semibold',
        range_middle: 'bg-neutral-100 [&>button]:bg-neutral-100 [&>button]:text-ink',
        range_start: 'rounded-l-full [&>button]:bg-ink [&>button]:text-white [&>button]:hover:bg-ink',
        range_end: 'rounded-r-full [&>button]:bg-ink [&>button]:text-white [&>button]:hover:bg-ink',
        today: 'font-bold text-coral',
        disabled: 'opacity-25',
        hidden: 'invisible',
      }}
    />
    {range?.from && (
      <button
        type="button"
        onClick={() => onSelect(undefined)}
        className="mt-3 min-h-9 text-xs font-semibold underline underline-offset-4"
      >
        Clear dates
      </button>
    )}
  </fieldset>
);
