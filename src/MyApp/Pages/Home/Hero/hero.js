import HeroImage from "./heroImage";
import HeroText from "./heroText";

import "./hero.scss";

function HeroSection() {
  return (
    <section className="hero">
      <HeroText />
      <HeroImage />
    </section>
  );
}

export default HeroSection;
