import Link from 'next/link';
import { Icon } from './Icon';
export const Footer = () => (
  <footer className="mt-16 border-t border-neutral-200 bg-neutral-50 px-6 py-8 text-xs text-neutral-600 md:px-10 lg:px-16">
    <div className="mx-auto flex max-w-[1312px] flex-col justify-between gap-5 md:flex-row">
      <p>© 2026 · A 4Geeks interface study. Not affiliated with Airbnb.</p>
      <div className="flex items-center gap-5">
        <Link href="/">Explore</Link>
        <Link href="/catalog">All stays</Link>
        <span className="flex items-center gap-2">
          <Icon name="globe" className="size-4" />
          English (US) · USD
        </span>
      </div>
    </div>
  </footer>
);
