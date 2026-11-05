import { money } from '@/lib/search';
export const BookingSummary = ({ nights, price }: { nights: number; price: number }) => (
  <div aria-live="polite" className="mt-4 space-y-3 border-t border-neutral-200 pt-4 text-sm">
    {nights > 0 ? (
      <>
        <div className="flex justify-between gap-2">
          <span>
            {nights} {nights === 1 ? 'night' : 'nights'} × {money(price)}
          </span>
          <span>{money(nights * price)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>{money(nights * price)}</span>
        </div>
      </>
    ) : (
      <p className="text-xs text-neutral-500">Select a checkout after check-in to see your total.</p>
    )}
  </div>
);
