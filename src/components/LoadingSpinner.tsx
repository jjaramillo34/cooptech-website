"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

const LoadingSpinner = ({ size = 24, className }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center">
      <Loader2
        className={cn("animate-spin text-primary", className)}
        size={size}
      />
    </div>
  );
};

export default LoadingSpinner; 