import Link from "next/link";
import { cn } from "@/lib/cn";

const variantStyles = {
  primary:
    "bg-primary text-on-dark hover:bg-primary-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-secondary text-on-dark hover:bg-secondary-dark shadow-sm hover:shadow-md",
  outline:
    "border border-border text-ink hover:bg-surface hover:border-primary/30",
  ghost: "text-slate hover:text-ink hover:bg-surface",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  icon,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
