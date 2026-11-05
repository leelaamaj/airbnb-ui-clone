export const LoadingState = ({ label = 'Finding your next stay…' }: { label?: string }) => (
  <div
    role="status"
    className="flex min-h-64 flex-col items-center justify-center gap-4 py-16 text-sm text-neutral-500"
  >
    <span className="size-8 rounded-full border-2 border-neutral-200 border-t-coral motion-safe:animate-spin" />
    {label}
  </div>
);
