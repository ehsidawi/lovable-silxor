import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "site-button inline-flex items-center justify-center gap-2 whitespace-normal rounded-lg text-sm font-semibold ring-offset-background transition-[background-color,border-color,box-shadow,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "button-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "button-outline border border-border bg-transparent text-foreground hover:border-primary hover:bg-muted",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        institutional: "button-primary text-primary-foreground",
        minimal: "button-outline border border-border hover:border-primary hover:bg-muted",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "min-h-11 px-4 py-2",
        lg: "min-h-12 px-7 py-3",
        icon: "h-11 w-11 shrink-0 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
