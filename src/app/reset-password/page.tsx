"use client";
import { useState } from "react";
import { OTPInput } from "@/components/forms/OTPInput";
import { TextInput } from "@/components/forms/TextInput";
import { FormField } from "@/components/forms/FormField";
import { FormWrapper } from "@/components/forms/FormWrapper";

export default function ResetPasswordPage() {
  const [otp, setOtp] = useState<string>("");
  const [step, setStep] = useState<"otp" | "password">("otp");

  const handleOTPSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(otp);

    const valid = true; // response from backend

    if (valid) {
      setStep("password");
    }
  };

  const handleResetPasswordSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main>
      <div className="h-svh flex items-center justify-center">
        <FormWrapper
          href="/login"
          label="Go back to login?"
          header="Reset Password"
          subHeading={
            step === "otp"
              ? "Enter OTP code sent to your email"
              : "Enter your new password"
          }
        >
          {step === "otp" ? (
            <form className="flex flex-col gap-6" onSubmit={handleOTPSubmit}>
              <OTPInput length={6} value={otp} onChange={setOtp} />

              <button
                type="submit"
                className="mb-5 w-full p-2 rounded-lg bg-primary hover:brightness-110 text-white cursor-pointer"
              >
                Submit
              </button>
            </form>
          ) : (
            <form
              className="flex flex-col gap-6"
              onSubmit={handleResetPasswordSubmit}
            >
              <FormField
                label="New Password"
                htmlFor="newPassword"
                required
                error=""
              >
                <TextInput
                  required
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value=""
                  onChange={() => {}}
                  placeholder="******"
                  autoComplete="new-password"
                />
              </FormField>

              <FormField
                label="Confirm Password"
                htmlFor="confirmPassword"
                required
                error=""
              >
                <TextInput
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value=""
                  onChange={() => {}}
                  placeholder="******"
                  autoComplete="new-password"
                />
              </FormField>

              <button
                type="submit"
                className="mb-5 w-full p-2 rounded-lg bg-primary hover:brightness-110 text-white cursor-pointer"
              >
                Submit
              </button>
            </form>
          )}
        </FormWrapper>
      </div>
    </main>
  );
}
