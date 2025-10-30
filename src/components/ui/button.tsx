import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  href?: string;
  target?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  download?: boolean | string;
}

export function Button({
  children,
  className,
  variant = "default",
  size = "default",
  href,
  target,
  onClick,
  disabled,
  type = "button",
  download,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
      "border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
      "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
      "text-primary underline-offset-4 hover:underline": variant === "link",
      "h-10 py-2 px-4": size === "default",
      "h-9 px-3": size === "sm",
      "h-11 px-8": size === "lg",
      "h-10 w-10": size === "icon",
    },
    className
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        target={target}
        className={baseStyles}
        download={download}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
} 