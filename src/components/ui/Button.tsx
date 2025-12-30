import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-white shadow hover:bg-[var(--primary-dark)]",
        solid:
          "bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] hover:shadow-md",
        destructive:
          "bg-error text-white shadow-sm hover:bg-error/90",
        outline:
          "border-2 border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent)] hover:text-white",
        secondary:
          "bg-[var(--secondary)] text-[var(--primary)] shadow-sm hover:bg-[var(--secondary-dark)]",
        ghost: "text-[var(--accent)] bg-transparent hover:bg-[var(--accent)]/10",
        link: "text-[var(--primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 text-base",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-12 px-8 py-4 text-base md:text-lg",
        icon: "h-9 w-9",
        // Mapping old sizes
        small: "h-9 px-4 py-2 text-sm",
        medium: "h-11 px-6 py-3 text-base",
        large: "h-12 px-8 py-4 text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : (href ? "a" : "button")
    
    const content = (
      <>
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </>
    )

    const finalProps = href ? { ...props, href } : props

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as any}
        {...(finalProps as any)}
      >
        {content}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
