import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
