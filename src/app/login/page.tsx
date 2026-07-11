"use client";
import Link from "next/link";
import { useState } from "react";
import { FormField } from "@/components/forms/FormField";
import { FormWrapper } from "@/components/forms/FormWrapper";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");

  const isEmailError = true;
  const emailError = isEmailError ? "Please enter correct email" : undefined;

  return (
    <main>
      <div className="h-svh flex items-center justify-center">
        <FormWrapper
          header="Login"
          href="/register"
          subHeading="Welcome Back"
          label="Don't have an account?"
        >
          <form className="space-y-6">
            <FormField
              label="Email"
              htmlFor="email"
              required
              error={emailError}
            >
              <Input
                required
                id="email"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                aria-invalid={!!emailError}
                placeholder="john.doe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby={emailError ? "email-error" : undefined}
              />
            </FormField>

            <FormField label="Password" htmlFor="password" required error="">
              <Input
                required
                id="password"
                name="password"
                type="password"
                value=""
                onChange={() => {}}
                placeholder="******"
                autoComplete="current-password"
              />
            </FormField>

            <div className="text-end">
              <Link
                href="/forgot-password"
                className="text-sm hover:underline underline-offset-2"
              >
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              className="mb-5 w-full p-2 rounded-lg bg-primary hover:brightness-110 text-white cursor-pointer"
            >
              Submit
            </button>
          </form>
        </FormWrapper>
      </div>
    </main>
  );
}
