import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassname = (techName: string) => {
  const normalizedName = techName
    .toLowerCase()
    .replace(/[ .]/g, "")
    .toLowerCase();

  return `${techMap?.[normalizedName] || "devicon-devicon-plain"} colored`;
};
