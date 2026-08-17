"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  AlertCircle,
  Eye,
  EyeOff,
  LockKeyhole,
  LogIn,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface LoginFormProps {
  usernameLabel: string;
  passwordLabel: string;
  forgotPasswordLabel: string;
  loginLabel: string;
  rememberLabel: string;
  showPasswordLabel: string;
  hidePasswordLabel: string;
  invalidCredentialsMessage: string;
  loginErrorMessage: string;
}

export function LoginForm({
  usernameLabel,
  passwordLabel,
  forgotPasswordLabel,
  loginLabel,
  rememberLabel,
  showPasswordLabel,
  hidePasswordLabel,
  invalidCredentialsMessage,
  loginErrorMessage,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(null);
    setIsLoading(true);

    try {
      /*
       * Authentication API will be connected here later.
       *
       * Example future request:
       *
       * const response = await fetch("/api/auth/login", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify({
       *     username,
       *     password,
       *   }),
       * });
       */

      // Temporary loading simulation.
      await new Promise((resolve) => setTimeout(resolve, 700));

      /*
       * Temporary interface testing only.
       *
       * We do not authenticate yet because the backend
       * and GPS authentication API have not been created.
       */
    } catch {
      setError(loginErrorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  function handleForgotPassword() {
    /*
     * Forgot-password flow will be implemented later.
     *
     * This will eventually navigate to:
     *
     * /[locale]/forgot-password
     */
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-5"
      noValidate={false}
    >
      {/* Username / ID */}
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          {usernameLabel}
        </label>

        <div className="relative">
          <UserRound
            className="
              pointer-events-none
              absolute
              start-4
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-slate-400
            "
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder={usernameLabel}
            className="ps-12"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          {passwordLabel}
        </label>

        <div className="relative">
          <LockKeyhole
            className="
              pointer-events-none
              absolute
              start-4
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-slate-400
            "
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder={passwordLabel}
            className="px-12"
            required
            disabled={isLoading}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((current) => !current)
            }
            disabled={isLoading}
            className="
              absolute
              end-3
              top-1/2
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-lg
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
            aria-label={
              showPassword
                ? hidePasswordLabel
                : showPasswordLabel
            }
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOff
                className="h-5 w-5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            ) : (
              <Eye
                className="h-5 w-5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div
          role="alert"
          className="
            flex
            items-start
            gap-3
            rounded-xl
            border
            border-red-200
            bg-red-50
            p-3
            text-sm
            text-red-700
          "
        >
          <AlertCircle
            className="mt-0.5 h-5 w-5 shrink-0"
            strokeWidth={1.8}
            aria-hidden="true"
          />

          <p>{error}</p>
        </div>
      )}

      {/* Remember Me + Forgot Password */}
      <div
        className="
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <label
          htmlFor="remember-me"
          className="
            flex
            cursor-pointer
            items-center
            gap-2
            text-sm
            text-slate-600
          "
        >
          <input
            id="remember-me"
            name="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(event) =>
              setRememberMe(event.target.checked)
            }
            disabled={isLoading}
            className="
              h-4
              w-4
              rounded
              border-slate-300
              text-blue-600
              focus:ring-blue-500
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          />

          <span>{rememberLabel}</span>
        </label>

        <button
          type="button"
          onClick={handleForgotPassword}
          disabled={isLoading}
          className="
            text-start
            text-sm
            font-medium
            text-blue-600
            transition
            hover:text-blue-700
            hover:underline
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {forgotPasswordLabel}
        </button>
      </div>

      {/* Login Button */}
      <Button
        type="submit"
        fullWidth
        disabled={isLoading}
        className="h-12"
      >
        {isLoading ? (
          <>
            <span
              className="
                h-4
                w-4
                animate-spin
                rounded-full
                border-2
                border-white/30
                border-t-white
              "
              aria-hidden="true"
            />

            <span>{loginLabel}...</span>
          </>
        ) : (
          <>
            <LogIn
              className="h-5 w-5"
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>{loginLabel}</span>
          </>
        )}
      </Button>
    </form>
  );
}