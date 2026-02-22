import { Outlet, useLocation, type Location } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const RootLayout = () => {
  const location: Location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location.key]);

  return (
    <>
      <Header />
      {/* <main>
        <Outlet />
      </main>
      <Footer /> */}
    </>
  );
};

export default RootLayout;
