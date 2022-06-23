import FeatureHeader from "./FeaturesHeader";
import FeaturesBody from "./FeatureBody";

import "./feature.scss";

function FeatureSection() {
  return (
    <section className="feature">
      <FeatureHeader />
      <FeaturesBody />
    </section>
  );
}

export default FeatureSection;
