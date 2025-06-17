import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "cities";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

          // Variants
          variant === "default" &&
            "bg-escapigo-orange text-white hover:bg-opacity-90",
          variant === "outline" &&
            "border border-escapigo-orange bg-transparent text-escapigo-orange hover:bg-escapigo-orange hover:text-white",
          variant === "ghost" &&
            "bg-transparent text-escapigo-orange hover:bg-muted",
          variant === "link" &&
            "bg-transparent text-escapigo-orange underline-offset-4 hover:underline",
          variant === "cities" &&
            "bg-escapigo-blurwhite border border-[#FFFFFF66] rounded-md text-white",

          // Sizes
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-8 px-3 text-sm",
          size === "lg" && "h-12 px-6 text-lg",
          size === "icon" && "h-10 w-10",

          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
