import React from "react";
import Nav from "./components/Nav";
import HeroSection from "./templates/HeroSection";
import MetricSection from "./templates/MetricSection";
import AboutSection from "./templates/AboutSection";
import CollaboratorSection from "./templates/CollaboratorSection";
import WorkSection from "./templates/WorkSection";
import ServiceSection from "./templates/ServiceSection";
import PricingSection from "./templates/PricingSection";
import Footer from "./components/Footer";
import UpdatesSection from "./templates/UpdatesSection";
import BackupSection from "./templates/BackupSection";
import TestimonialSection from "./templates/TestimonialSection";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <main class="main" id="top">
        <div class="content">

          {/*Use Effect needed to function */}
          <Nav />

          <div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
            <HeroSection />
            <MetricSection />
            <AboutSection />
            <CollaboratorSection />
            <WorkSection />
            <ServiceSection />

            {/*Use Effect needed to function */}
            <TestimonialSection />
            <PricingSection />

            {/*Use Effect needed to function */}
            <BackupSection />
            <UpdatesSection />
          </div>

          <ScrollToTop />
          <Footer />

        </div>
      </main>
    </>
  );
}

export default App;
