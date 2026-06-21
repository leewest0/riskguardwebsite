import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { DashboardMockup } from "./_components/DashboardMockup";
import { ToolLogos } from "./_components/ToolLogos";
import { FrameworkLogos } from "./_components/FrameworkLogos";
import { Features } from "./_components/Features";
import { Frameworks } from "./_components/Frameworks";
import { Stats } from "./_components/Stats";
import { FinalCTA } from "./_components/FinalCTA";
import { Footer } from "./_components/Footer";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <DashboardMockup />
        <ToolLogos />
        <FrameworkLogos />
        <Features />
        <Frameworks />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
