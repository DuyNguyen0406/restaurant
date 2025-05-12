import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";
import cn from "@/utils/cn";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="relative min-h-dvh">
      <Header />
      <main
        id="main-content"
        className={cn("content-grid", pathname !== "/" && "pt-header")}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
