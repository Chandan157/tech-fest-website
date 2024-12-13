import React from "react";
import AboutSection from "../layouts/AboutSection/About";
import ContactSection from "../layouts/ContactSection/Contact";
import EventsSection from "../layouts/EventsSection/Eventsection";
import { HeroSectionMd, HeroSectionSm } from "../layouts/HeroSection/Hero";
import Header from "../layouts/NavBar/Navbar";
import ScheduleSection from "../layouts/ScheduleSection";
import Glimpse from "../layouts/glimpse/Glimpse";
import Footer from "../layouts/Footer/Footer";
import Spline from "@splinetool/react-spline";
// import Test from '../layouts/AboutSection/Test';
// import SpeakerSection from '../layouts/SpeakerSection';
// import SponsorSection from '../layouts/SponsorSection';

const Home = () => {
  return (
    <>
      <div className="bg-primary">
        <div className=" bg-black">
          <Header />
          {/* <Spline
        scene="https://prod.spline.design/rHUSMNd8X6xl1ZcY/scene.splinecode" 
      /> */}
          
        </div>

        {window.innerWidth > 768 ? <HeroSectionMd /> : <HeroSectionSm />}
        <section id="about">
          <AboutSection />
        </section>
        <section id="events">
          <EventsSection />
        </section>
        <ScheduleSection />
        <Glimpse />
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
