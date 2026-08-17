"use client";

import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  locale: string;
}

export function LanguageSwitcher({
  locale,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(nextLocale: "fr" | "ar") {
    const segments = pathname.split("/");

    segments[1] = nextLocale;

    router.push(segments.join("/"));
  }

  const isFrench = locale === "fr";

  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => changeLanguage("fr")}
        className={[
          "rounded-full px-3 py-1.5 text-sm font-medium transition",
          isFrench
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100",
        ].join(" ")}
      >
        FR
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("ar")}
        className={[
          "rounded-full px-3 py-1.5 text-sm font-medium transition",
          !isFrench
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100",
        ].join(" ")}
      >
        العربية
      </button>
    </div>
  );
}