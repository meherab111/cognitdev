import { Outlet, useLocation, type Location } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import ReactLenis, { useLenis } from "lenis/react";
import type Lenis from "lenis";

const RootLayout = () => {
  const location: Location = useLocation();

  const lenis: Lenis | undefined = useLenis();
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.key, lenis]);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default RootLayout;
