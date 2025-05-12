export function Close({
  size = 40,
  className = "fill-black",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      className={className}
      aria-hidden="true"
    >
      <rect
        width="80"
        height="8"
        x="10"
        y="46"
        rx="5"
        className="origin-center rotate-45 transition-all"
      />
      <rect
        width="80"
        height="8"
        x="10"
        y="46"
        rx="5"
        className="origin-center -rotate-45 transition-all"
      />
    </svg>
  );
}
