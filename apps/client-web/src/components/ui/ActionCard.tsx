import type { LucideIcon } from "lucide-react";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick?: () => void;
  disabled?: boolean;
  destructive?: boolean;
}

export function ActionCard({
  icon: Icon,
  title,
  description,
  onClick,
  disabled = false,
  destructive = false,
}: ActionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "group flex w-full flex-col items-center justify-center",
        "rounded-2xl border bg-white p-6 text-center",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        destructive
          ? "border-red-200 hover:border-red-300 hover:bg-red-50"
          : "border-slate-200 hover:border-blue-200 hover:bg-blue-50/40",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-12 w-12 items-center justify-center rounded-xl",
          "transition-colors duration-200",
          destructive
            ? "bg-red-50 text-red-600 group-hover:bg-red-100"
            : "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
        ].join(" ")}
      >
        <Icon
          className="h-6 w-6"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </span>

      <span className="mt-4 text-base font-semibold text-slate-900">
        {title}
      </span>

      {description && (
        <span className="mt-2 text-sm leading-5 text-slate-500">
          {description}
        </span>
      )}
    </button>
  );
}