import { ShieldCheck } from "lucide-react";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LoginForm } from "@/features/auth/LoginForm";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Tell next-intl which locale is being rendered.
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-md">

          {/* Login Card */}
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">

            {/* Logo */}
            <div className="flex justify-center">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-600
                  text-sm
                  font-bold
                  tracking-wider
                  text-white
                  shadow-sm
                "
              >
                GPS
              </div>
            </div>

            {/* Heading */}
            <div className="mt-6 text-center">
              <h1
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  sm:text-3xl
                "
              >
                {t("common.appName")}
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                {t("auth.login")}
              </p>
            </div>

            {/* Security Indicator */}
            <div
              className="
                mt-6
                flex
                items-center
                gap-3
                rounded-xl
                bg-slate-50
                p-3
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-50
                  text-blue-600
                "
              >
                <ShieldCheck
                  className="h-5 w-5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs leading-5 text-slate-600">
                {t("common.secureAccess")}
              </p>
            </div>

            {/* Login Form */}
            <div className="mt-7">
              <LoginForm
                usernameLabel={t("auth.username")}
                passwordLabel={t("auth.password")}
                forgotPasswordLabel={t("auth.forgotPassword")}
                loginLabel={t("auth.loginButton")}
                rememberLabel={t("auth.rememberMe")}
                showPasswordLabel={t("auth.showPassword")}
                hidePasswordLabel={t("auth.hidePassword")}
                invalidCredentialsMessage={t(
                  "auth.invalidCredentials",
                )}
                loginErrorMessage={t("auth.loginError")}
              />
            </div>

            {/* Language Switcher */}
            <div className="mt-7 flex justify-center">
              <LanguageSwitcher locale={locale} />
            </div>
          </section>

          {/* Footer */}
          <p className="mt-5 text-center text-xs text-slate-400">
            {t("common.platformName")}
          </p>
        </div>
      </div>
    </main>
  );
}