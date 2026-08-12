export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white dark:bg-aura-ink">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border border-aura-orchid/30" />
        <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-aura-purple border-r-aura-orchid" />
        <div className="absolute inset-6 rounded-full bg-aura-gradient shadow-aura" />
      </div>
    </div>
  );
}
