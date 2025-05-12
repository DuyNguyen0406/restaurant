import { useState, useRef } from "react";

import { Link, Portal } from "@/components/ui";
import Logo from "@/assets/images/logo.png";
import { Menu, MobileMenuTrigger } from "@/components/widget";

function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log("DDDD", setShowMobileMenu);

  return (
    <>
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
        <div className="content-grid ">
          <div className="col-content flex flex-col md:flex-row justify-between items-center text-gray-500 py-[0.9375rem]">
            <div className="flex flex-row items-center gap-x-4 text-[17px] ">
              <p>Mon-Wed: 11a-9p</p>
              <p>Thurs-Sun: 11a-10p</p>
            </div>
            <div className="text-[15px]">
              <p>Via Serlas 546, 6700 St. Moritz, Switzerland</p>
            </div>
          </div>
          <div className="col-content flex flex-row items-center justify-between py-5 border border-b-brown-500 border-t-brown-500">
            <div className=" h-full w-1/5 md:border md:border-r-brown-500 md:flex hidden">
              <Link
                to="/"
                className="self-center text-[13px] text-white"
                aria-label="nongdan.dev homepage"
              >
                BOOK A TABLE
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="self-center"
                aria-label="nongdan.dev homepage"
              >
                <img
                  src={Logo}
                  alt=""
                  className="md:w-[10.625rem] md:h-[3.375rem] w-[8.125rem] h-[2.5625rem]"
                />
              </Link>
            </div>
            <div className="flex items-center justify-end h-full w-1/5 md:border md:border-l-brown-500 gap-x-2">
              <Link
                to="/"
                className="self-center text-[13px] flex flex-row items-center  text-white"
                aria-label="nongdan.dev homepage"
                onClick={() => setShowMobileMenu(false)}
              >
                <p>MENU</p>
              </Link>
              <MobileMenuTrigger
                visible={showMobileMenu}
                setVisible={setShowMobileMenu}
              />
            </div>
          </div>
        </div>
      </header>
      <Portal>
        <Menu
          visible={showMobileMenu}
          onClose={() => setShowMobileMenu(false)}
        />
      </Portal>
    </>
  );
}

export default Header;
