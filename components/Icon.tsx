const paths: Record<string, string> = {
  search: 'M21 21l-5-5m2-6a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z',
  arrow: 'M5 12h14m-6-6 6 6-6 6', back: 'M19 12H5m6-6-6 6 6 6',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
  star: 'm12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z',
  home: 'm3 10 9-7 9 7v11h-7v-7h-4v7H3V10Z',
  beach: 'M3 11a9 9 0 0 1 18 0H3Zm9-9v18m-5 1h10M8 11c0-5 2-8 4-8s4 3 4 8',
  design: 'm12 3 9 9-9 9-9-9 9-9Zm0 0v18M3 12h18',
  cabin: 'm2 12 10-9 10 9M5 10v11h14V10M10 21v-7h4v7',
  leaf: 'M20 3C9 2 3 7 5 15c8 6 16-1 15-12ZM3 22 15 9',
  city: 'M3 21V7h8v14m0 0V3h10v18M6 10h2m-2 4h2m7-7h2m-2 4h2m-2 4h2M2 21h20',
  menu: 'M4 6h16M4 12h16M4 18h16',
  user: 'M20 21a8 8 0 0 0-16 0m13-14a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z',
  globe: 'M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0ZM3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z',
  wifi: 'M2 8a17 17 0 0 1 20 0M5 12a12 12 0 0 1 14 0m-11 4a7 7 0 0 1 8 0m-4 4h.01',
  check: 'm5 12 4 4L19 6',
  pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  minus: 'M5 12h14', plus: 'M5 12h14m-7-7v14',
};
export const Icon = ({ name, className = 'size-5' }: { name: string; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}><path d={paths[name] ?? paths.check} /></svg>
);
