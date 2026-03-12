import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const buttonVariants = cva(
  "group inline-flex leading-[120%] cursor-pointer items-center rounded-[32px] justify-center gap-2 font-medium transition-all disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-brand text-black hover:bg-black hover:text-white",
        secondary: "bg-white text-black hover:bg-black hover:text-white",
        tertiary: "bg-black text-white hover:bg-white hover:text-black",
        outline: "border border-foreground hover:opacity-70",
        ghost: "hover:bg-gray-100",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "px-6 py-3 text-base",
        md: "px-8 lg:py-5 sm:py-4 py-3.5  lg:text-xl sm:text-lg text-base ",
      },

      thickness: {
        regular: "font-regular",
        semibold: "font-semibold",
        bold: "font-bold",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      thickness: "semibold",
    },
  }
);

const iconSizes = {
  sm: "w-7 h-7",
  md: "w-8 h-8",
};

const iconColors = {
  primary: "text-brand group-hover:text-black",
  secondary: "text-white group-hover:text-black",
  tertiary: "text-black group-hover:text-white",
  outline: "text-background ",
  ghost: "text-foreground",
  danger: "text-red-600 group-hover:text-white",
};

function Button({
  className,
  variant,
  size,
  thickness,
  fullWidth,
  icon,
  href,
  children,
  ...props
}) {
  const classes = cn(
    buttonVariants({ variant, size, fullWidth, thickness }),
    className
  );

  const content = (
    <>
      {children}

      <span
        className={cn(
          "flex items-center justify-center rounded-full bg-current transition-colors",
          iconSizes[size]
        )}
      >
        <GoArrowUpRight
          className={cn(
            "w-4 h-4 group-hover:rotate-45 transition-transform duration-300 delay-75",
            iconColors[variant]
          )}
        />
      </span>
    </>
  );

  // Render LINK if href exists
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  // Otherwise render BUTTON
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;
