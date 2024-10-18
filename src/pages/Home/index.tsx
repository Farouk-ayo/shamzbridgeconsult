import SplashScreenManager from "../../components/SplashScreenManager";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

const Home = () => {
  return (
    <>
      {" "}
      <SplashScreenManager>
        <Hero />
        <About />
        <Services />
        <Testimonial />
      </SplashScreenManager>
    </>
  );
};
export default Home;
