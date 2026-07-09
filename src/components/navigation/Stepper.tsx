import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepChange?: (step: number) => void;
}

export const Stepper = ({ steps, currentStep, onStepChange }: StepperProps) => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0">
        {steps.map((step, index) => {
          const completed = currentStep > index + 1;
          const active = currentStep === index + 1;

          return (
            <div
              key={step}
              className="flex sm:flex-1 items-center last:flex-none"
            >
              <button
                className="flex items-center gap-3"
                onClick={() => onStepChange?.(index + 1)}
              >
                <div
                  className={cn(
                    "size-12 shrink-0 rounded-full border-2 grid place-items-center font-medium text-white",
                    completed && "bg-secondary border-secondary",
                    active && "bg-light border-secondary",
                  )}
                >
                  <span
                    className={cn(
                      "col-start-1 row-start-1 transition-all duration-300",
                      completed
                        ? "opacity-0 scale-50 rotate-90"
                        : "opacity-100 scale-100 rotate-0",
                    )}
                  >
                    {index + 1}
                  </span>

                  <CheckIcon
                    className={cn(
                      "size-7 col-start-1 row-start-1 transition-all duration-300",
                      completed
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-50 -rotate-90",
                    )}
                  />
                </div>

                <div className="text-left">
                  <p className="font-medium">Step {index + 1}</p>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              </button>

              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-4 bg-white" />
              )}
            </div>
          );
        })}
      </div>

      <div>{currentStep} step Content</div>
    </>
  );
};
