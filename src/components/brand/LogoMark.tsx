import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  iconClassName?: string;
}

export default function LogoMark({ className, iconClassName }: LogoMarkProps) {
  return (
    <div
      className={cn(
        "w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("w-5 h-5", iconClassName)}
        aria-hidden="true"
      >
        <path d="m3 3 7 7-7 7" />
        <path d="m13 3 7 7-7 7" />
      </svg>
    </div>
  );
}
