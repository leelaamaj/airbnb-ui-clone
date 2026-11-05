'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './Icon';
export const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-6 md:h-24 md:px-10 lg:px-16">
        <Link href="/" aria-label="Airbnb study home" className="flex items-center gap-2 text-coral">
          <svg
            viewBox="0 0 32 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-9 w-8"
            aria-hidden="true"
          >
            <path d="M16 3c-3 0-5 4-7 9L2 28c-3 9 8 8 14 0 6 8 17 9 14 0l-7-16c-2-5-4-9-7-9Zm0 25c-9-9-8-15 0-15s9 6 0 15Z" />
          </svg>
          <span className="hidden text-2xl font-bold tracking-tight md:inline">airbnb</span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm md:gap-9 md:text-base">
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className={`border-b-2 py-3 ${pathname === '/' ? 'border-ink font-semibold' : 'border-transparent text-neutral-500 hover:text-ink'}`}
          >
            Explore
          </Link>
          <Link
            href="/catalog"
            aria-current={pathname === '/catalog' ? 'page' : undefined}
            className={`border-b-2 py-3 ${pathname === '/catalog' ? 'border-ink font-semibold' : 'border-transparent text-neutral-500 hover:text-ink'}`}
          >
            All stays
          </Link>
        </nav>
        <details className="relative">
          <summary
            aria-label="Open user menu"
            className="flex cursor-pointer list-none items-center gap-3 rounded-full border border-neutral-300 px-3 py-3 md:px-4 hover:shadow-md"
          >
            <Icon name="menu" />
            <Icon name="user" />
          </summary>
          <div className="absolute right-0 z-40 mt-3 w-64 rounded-2xl border border-neutral-200 bg-white p-5 text-sm shadow-xl">
            A place to practice.
            <p className="mt-2 text-neutral-500">Student interface study. All stays and bookings are fictional.</p>
          </div>
        </details>
      </div>
    </header>
  );
};
