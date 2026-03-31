import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes with dynamic logic.
 * Combines clsx for conditional classes and tailwind-merge to avoid conflicts.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
