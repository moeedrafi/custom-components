"use client";
import Link from "next/link";
import { useState } from "react";
import { Label } from "@/components/forms/Label";
import { TextInput } from "@/components/forms/TextInput";
import { FormWrapper } from "@/components/forms/FormWrapper";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");

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
            <div className="flex flex-col gap-1">
              <Label label="Email" htmlFor="email" />
              <TextInput
                id="email"
                name="email"
                type="email"
                value={email}
                aria-invalid="true"
                placeholder="john.doe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label label="Password" htmlFor="password" />
              <TextInput
                id="password"
                name="password"
                type="password"
                value=""
                onChange={() => {}}
                placeholder="******"
              />
            </div>

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
