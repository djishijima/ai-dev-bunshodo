
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SetupGuide } from "@/components/SetupGuide";

export const SetupGuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-navy-900/80 to-cyan-900/50">
      <NavBar />
      <SetupGuide />
      <Footer />
    </div>
  );
};

export default SetupGuidePage;
