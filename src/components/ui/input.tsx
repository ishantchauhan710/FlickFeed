import * as React from "react";

import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

interface TextFieldProps {
  startIcon?: React.ReactNode;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    TextFieldProps {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, ...props }, ref) => {
    return (
      <div className="flex w-full h-auto items-center space-x-2 rounded-sm border border-input bg-transparent px-3 py-2">
        {startIcon && (
          <div className="flex size-5 items-center justify-center text-muted">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "w-full text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
