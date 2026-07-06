import { useRef } from "react";
import { cn } from "@/lib/utils";
import { TextInput } from "./TextInput";

interface OTPInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "maxLength"
> {
  length: number;
  value: string;
  inputClassName?: string;
  onChange: (value: string) => void;
}

export const OTPInput = ({
  length,
  value,
  onChange,
  className,
  inputClassName,
  ...inputProps
}: OTPInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const getOtpArray = () => Array.from({ length }, (_, i) => value[i] ?? "");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const digit = e.target.value.replace(/\D/g, "");
    const otp = getOtpArray();
    otp[index] = digit;
    const newOtp = otp.join("");
    onChange(newOtp);

    // If a digit was entered, focus the next input
    if (digit && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const otp = getOtpArray();

    // if field is empty move to prev else browser empties it
    if (otp[index] === "") {
      e.preventDefault();
      if (index > 0) inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedOtp = e.clipboardData
      .getData("text/plain")
      .replace(/\D/g, "")
      .slice(0, length);

    onChange(pastedOtp);

    // focus the next empty input
    const nextIndex = Math.min(pastedOtp.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={cn("flex items-center gap-3 m-auto", className)}>
      {Array.from({ length }).map((_, index) => (
        <TextInput
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          {...inputProps}
          value={value[index] ?? ""}
          maxLength={1}
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          aria-label={`OTP digit ${index + 1}`}
          className={cn("w-10 text-center text-lg", inputClassName)}
          onPaste={(e) => handlePaste(e)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              handleBackspace(e, index);
            }
          }}
        />
      ))}
    </div>
  );
};
