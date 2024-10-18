import { Outlet } from "react-router";
import Footer from "../layout/Footer";
import { ScrollRestoration } from "react-router-dom";
import SplashScreenManager from "../components/SplashScreenManager";

const Root = () => {
  return (
    <SplashScreenManager>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </SplashScreenManager>
  );
};
export default Root;
