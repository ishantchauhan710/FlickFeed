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
      <div className="flex items-center space-x-2 h-10 rounded-sm border border-input bg-background px-3 py-2">
        {startIcon && (
          <div className="flex items-center justify-center size-5 text-muted">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "w-full text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
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
