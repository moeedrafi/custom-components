import Link from "next/link";
import { cn } from "@/lib/utils";
import { CheckIcon, LinkIcon } from "lucide-react";

type PricingPlan = {
  id: number;
  title: string;
  price: number;
  button: string;
  current: boolean;
  features: string[];
};

const pricings: PricingPlan[] = [
  {
    id: 1,
    title: "Free",
    price: 0,
    button: "Active",
    current: true,
    features: [
      "Limited generations (~200 / month)",
      "General commercial terms",
      "Optional credit top ups",
      "3 concurrent fast jobs",
    ],
  },
  {
    id: 2,
    title: "Standard",
    button: "Upgrade Plan",
    price: 30,
    current: false,
    features: [
      "15h Fast generations",
      "General Commerical terms",
      "Optional credit top ups",
      "3 concurrent fast jobs",
      "Unlimited Relaxed generations",
    ],
  },
  {
    id: 3,
    title: "Pro",
    price: 60,
    button: "Upgrade Plan",
    current: false,
    features: [
      "30h Fast generations",
      "General Commerical terms",
      "Optional credit top ups",
      "12 concurrent fast jobs",
      "Unlimited Relaxed generations",
      "Stealth image generation",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-dark py-16">
      <div className="px-4 md:px-16 lg:px-32">
        {/* HEADING */}
        <div className="text-center mb-12 space-y-4">
          <h3 className="text-text text-2xl md:text-3xl lg:text-4xl font-bold">
            Purchase a subcription
          </h3>
          <p className="text-text font-light">
            Upgrade to gain access to Pro features and generate more faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-lg md:max-w-6xl mx-auto">
          {pricings.map((pricing) => (
            <div
              key={pricing.id}
              className={cn(
                "rounded-2xl border bg-bg p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl",
                pricing.current ? "border-color" : "border-transparent",
              )}
            >
              <h4 className="text-lg">{pricing.title} Plan</h4>

              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold">${pricing.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">
                  / month
                </span>
              </div>

              <button
                className={cn(
                  "mt-6 w-full rounded-lg py-2 font-medium transition hover:opacity-90",
                  pricing.current && "bg-primary",
                  !pricing.current && "bg-light",
                )}
              >
                {pricing.button}
              </button>

              <Link
                href="#"
                className="mt-4 flex items-center justify-center gap-1 text-sm text-muted-foreground"
              >
                Save 20% with annual billing
                <LinkIcon className="size-4" />
              </Link>

              <ul className="mt-8 flex-1 space-y-3">
                {pricing.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="size-4 text-secondary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
