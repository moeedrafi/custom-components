import Link from "next/link";

interface FormWrapperProps {
  header: string;
  subHeading: string;
  href?: string;
  label?: string;
  children: React.ReactNode;
}

export const FormWrapper = ({
  children,
  header,
  subHeading,
  label,
  href,
}: FormWrapperProps) => {
  return (
    <section
      aria-labelledby="form-title"
      className="bg-bg p-4 rounded-lg w-100 border border-color shadow-md"
    >
      {/* Header */}
      <header className="w-full flex flex-col gap-y-3 items-center justify-center">
        <h1 id="form-title" className="text-3xl font-semibold">
          🔐 {header}
        </h1>
        <p className="text-gray-400 text-sm">{subHeading}</p>
      </header>

      {/* Content */}
      <div className="mt-5">{children}</div>

      {/* Footer */}
      {href && label && (
        <footer className="w-full text-center text-sm font-medium">
          <Link
            href={href}
            aria-label={`Go to ${label}`}
            className="hover:underline underline-offset-2"
          >
            {label}
          </Link>
        </footer>
      )}
    </section>
  );
};
