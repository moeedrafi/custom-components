import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-bg py-16 border-t border-color">
      <div className="mx-auto flex flex-col md:flex-row w-5/6 gap-14 md:gap-16">
        {/* Left */}
        <div className="basis-1/2">
          <Image
            src="/vercel.svg"
            alt="logo"
            width={50}
            height={50}
            className="h-12 w-12"
          />

          <p className="mt-6 max-w-md leading-7 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            perspiciatis earum recusandae aliquid alias soluta ut nulla ipsa
            ratione. Saepe ullam deleniti et quaerat libero officiis culpa
            consequuntur impedit est.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            © Evogym. All rights reserved.
          </p>
        </div>

        {/* Center */}
        <div className="basis-1/4">
          <h4 className="text-lg font-semibold text-white">Links</h4>
          <div className="mt-6 space-y-4">
            <p className="cursor-pointer text-muted-foreground transition-colors hover:text-text">
              Massa orci senectus
            </p>

            <p className="cursor-pointer text-muted-foreground transition-colors hover:text-text">
              Et gravida id et etiam
            </p>

            <p className="cursor-pointer text-muted-foreground transition-colors hover:text-text">
              Ullamcorper vivamus
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="basis-1/4">
          <h4 className="text-lg font-semibold text-white">Contact Us</h4>

          <div className="mt-6 space-y-4">
            <p className="leading-7 text-gray-400">
              Tempus metus mattis risus volutpat egestas.
            </p>

            <p className="font-medium text-white">(333) 425-6825</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
