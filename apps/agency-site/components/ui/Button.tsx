import Link from "next/link";
import { ReactNode } from "react";
import { ArrowIcon } from "./ArrowIcon";

export interface ButtonProps {
  variant?: "primary" | "onDark" | "ghost";
  size?: "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center font-medium rounded-pill min-h-11 transition-[background-color,color,transform,opacity] duration-[var(--dur-base)] ease-[var(--ease-arrow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-oasis-green text-paper hover:bg-[#15503f] focus-visible:ring-oasis-green focus-visible:ring-offset-paper",
  onDark:
    "bg-paper/90 text-ink backdrop-blur-md hover:bg-paper focus-visible:ring-paper focus-visible:ring-offset-ink",
  ghost:
    "text-current underline underline-offset-[6px] decoration-1 decoration-current/40 hover:decoration-current rounded-none min-h-0 px-0 py-0 focus-visible:ring-oasis-green focus-visible:ring-offset-paper",
};

const sizes = {
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
};

const circle = {
  primary: "bg-paper text-oasis-green",
  onDark: "bg-ink text-paper",
  ghost: "bg-current text-paper",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  arrow = false,
  className = "",
  children,
}: ButtonProps) {
  const withArrow = arrow && variant !== "ghost";
  const styles = [
    base,
    variants[variant],
    withArrow ? `btn-arrow ${size === "lg" ? "text-lg [--icon:44px]" : "text-base [--icon:36px]"}` : sizes[variant === "ghost" ? "md" : size],
    variant === "ghost" ? "gap-2" : "",
    className,
  ].join(" ");

  const inner = withArrow ? (
    <>
      <span>{children}</span>
      <span className={`btn-arrow__circle ${circle[variant]}`}>
        <ArrowIcon />
        <ArrowIcon className="is-hover" />
      </span>
    </>
  ) : variant === "ghost" && arrow ? (
    <>
      <span>{children}</span>
      <ArrowIcon className="w-4 h-4" />
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={styles} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {inner}
    </button>
  );
}
