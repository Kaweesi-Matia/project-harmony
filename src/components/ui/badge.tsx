import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/20 text-primary",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        outline: "border-border text-foreground",
        // Status variants
        backlog: "border-transparent bg-status-backlog/20 text-status-backlog",
        todo: "border-transparent bg-status-todo/20 text-status-todo",
        progress: "border-transparent bg-status-progress/20 text-status-progress",
        review: "border-transparent bg-status-review/20 text-status-review",
        done: "border-transparent bg-status-done/20 text-status-done",
        // Priority variants
        urgent: "border-transparent bg-priority-urgent/20 text-priority-urgent",
        high: "border-transparent bg-priority-high/20 text-priority-high",
        medium: "border-transparent bg-priority-medium/20 text-priority-medium",
        low: "border-transparent bg-priority-low/20 text-priority-low",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
