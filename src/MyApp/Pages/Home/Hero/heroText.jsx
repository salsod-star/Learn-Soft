import Button from "../../../components/button";

function HeroText() {
  return (
    <div className="hero-content">
      <h1 className="hero-heading">Your daily dose of the WEB.</h1>
      <p className="hero-para">
        You don't have to waste more time on learning things you can spend just
        few minutes to fully grasp. Your time is precious and your mood to learn
        more is important. Let's get you started.
      </p>
      <Button text="Get started &rarr;" />
    </div>
  );
}

export default HeroText;
