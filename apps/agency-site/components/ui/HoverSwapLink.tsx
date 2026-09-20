import Link from "next/link";

interface HoverSwapLinkProps {
  href: string;
  className?: string;
  active?: boolean;
  onClick?: () => void;
  children: string;
}

export function HoverSwapLink({ href, className = "", active = false, onClick, children }: HoverSwapLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`swap text-base font-medium ${active ? "opacity-100" : "opacity-70 hover:opacity-100"} transition-opacity duration-[var(--dur-fast)] ${className}`}
    >
      <span className="swap__text" data-text={children}>
        {children}
      </span>
    </Link>
  );
}
