import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Images from "@/components/Images";
import Announcements from "@/components/Announcements";
import Contact from "@/components/Contact";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";
import Dashboard from "@/components/Dashboard";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { useState } from "react";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <TranslationProvider>
      <div className="min-h-screen">
        <Header onDashboardToggle={() => setShowDashboard(!showDashboard)} />
        {showDashboard ? (
          <Dashboard onClose={() => setShowDashboard(false)} />
        ) : (
          <main>
            <Hero />
            <Images />
            <Announcements />
            <Statistics />
            <Contact />
          </main>
        )}
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default Index;
