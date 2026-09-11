interface ArrowIconProps {
  className?: string;
  color?: string;
}

export function ArrowIcon({ className, color = 'currentColor' }: ArrowIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 56 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M11.9108 41.4985L43.191 15.2513"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0744 12.4883L44.0854 14.5015L42.0722 37.5124"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
