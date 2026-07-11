import { Footer } from "@/components/sections/footer/Footer";
import { Pricing } from "@/components/sections/pricing/Pricing";
import { CenteredHero } from "@/components/sections/hero/CenteredHero";
import { SimpleNavbar } from "@/components/navigation/navbar/SimpleNavbar";

export default function Home() {
  return (
    <main>
      <SimpleNavbar />
      <CenteredHero />
      <Pricing />
      <Footer />
    </main>
  );
}
