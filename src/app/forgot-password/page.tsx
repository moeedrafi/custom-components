"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { FormField } from "@/components/forms/FormField";
import { FormWrapper } from "@/components/forms/FormWrapper";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>("");

  const isEmailError = true;
  const emailError = isEmailError ? "Please enter correct email" : undefined;

  return (
    <main>
      <div className="h-svh flex items-center justify-center">
        <FormWrapper
          header="Forgot Password"
          href="/login"
          subHeading="Enter your email"
          label="Go back?"
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
