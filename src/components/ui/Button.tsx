import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "accent" | "outline" | "outline-light" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,filter,background-color,color,border-color] duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white",
  accent: "bg-accent text-ink",
  light: "bg-paper text-ink",
  outline: "border-[1.5px] border-ink/20 text-ink hover:border-ink hover:brightness-100",
  "outline-light": "border-[1.5px] border-paper/30 text-paper hover:border-paper hover:brightness-100",
};

const sizes = {
  md: "min-h-12 px-6 text-[15px]",
  lg: "min-h-14 px-7 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: keyof typeof sizes = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", size = "md", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
