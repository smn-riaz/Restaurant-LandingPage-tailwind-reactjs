import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import Chef from "./Chef";
import Contact from "./Contact";
import ExclusiveItems from "./ExclusiveItems";
import FooterSection from "./FooterSection";
import OurHistory from "./OurHistory";
import PopularMenu from "./PopularMenu";
import TopBanner from "./TopBanner";
import ScrollToTop from "react-scroll-to-top";
import GoTop from "../Components/GoTop";
import SpecialItems from "./SpecialItems";
import Preloader from "../Components/Preloader/Preloader";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <main className="overflow-x-hidden">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <TopBanner />
          <ExclusiveItems />
          <OurHistory />
          <SpecialItems />
          <PopularMenu />
          <Chef />
          <Blog />
          <Contact />
          <FooterSection />
          <ScrollToTop color="#D03801" smooth component={<GoTop />} />
        </div>
      )}
    </main>
  );
};

export default LandingPage;
