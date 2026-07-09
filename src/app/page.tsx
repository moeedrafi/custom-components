import { Footer } from "@/components/footer/Footer";
import { CenteredHero } from "@/components/hero/CenteredHero";
import { TwoColumnHero } from "@/components/hero/TwoColumnHero";
import { SimpleNavbar } from "@/components/navbar/SimpleNavbar";

export default function Home() {
  return (
    <main>
      <SimpleNavbar />
      <CenteredHero />
      <TwoColumnHero />
      <Footer />
    </main>
  );
}
