import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";

export const ThreeColumnFooter = () => {
  return (
    <footer className="border-t border-color bg-bg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-14 md:grid-cols-2 md:px-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20 lg:px-20">
        {/* Company */}
        <div>
          <h2 className="text-xl font-bold tracking-tight">FlashcardAI</h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            Helping students learn faster with AI-powered flashcards, quizzes,
            and smart study tools designed to improve retention and make
            learning more enjoyable.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold">Links</h3>

          <nav className="mt-5 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/features"
              className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Features
            </Link>

            <Link
              href="/pricing"
              className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Pricing
            </Link>

            <Link
              href="/flashcards"
              className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              Generate Flashcards
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>

          <ul className="mt-5 space-y-4">
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>

            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <MailIcon className="h-4 w-4 shrink-0" />
              <span>support@flashcardai.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 text-sm md:flex-row md:px-12 lg:px-20">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} FlashcardAI. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy"
              className="text-muted-foreground transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-muted-foreground transition-colors hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-muted-foreground transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
