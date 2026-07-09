import Link from "next/link";
import Image from "next/image";
import { MailIcon } from "lucide-react";

export const TwoColumnHero = () => {
  return (
    <section id="home" className="bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 px-6 py-24 lg:flex-row lg:py-32">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <Image src="/vercel.svg" alt="Hero Logo" width={50} height={50} />

          <p className="mt-8 max-w-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            aspernatur animi. Delectus reiciendis et quod rem aliquam adipisci,
            a numquam?
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="rounded-md bg-secondary border border-transparent px-8 py-3 font-medium transition-colors hover:bg-primary hover:text-white"
            >
              Join Now
            </Link>

            <Link
              href="#"
              className="rounded-md px-8 py-3 font-medium text-white border border-white transition-colors hover:border-color hover:text-muted-foreground"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src="/vercel.svg"
            alt="Hero Graphic"
            width={400}
            height={400}
            className="h-auto w-full max-w-md"
          />
        </div>
      </div>

      {/* Sponsors */}
      <div className="hidden bg-primary-100 py-10 lg:block">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-16">
            <MailIcon className="size-12" />
            <MailIcon className="size-12" />
            <MailIcon className="size-12" />
          </div>
        </div>
      </div>
    </section>
  );
};
