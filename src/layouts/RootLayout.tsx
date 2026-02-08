import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

const RootLayout = () => {
  const { key } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [key]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
