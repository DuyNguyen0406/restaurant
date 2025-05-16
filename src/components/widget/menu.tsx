import { MouseEventHandler, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Image1 from "@/assets/images/menu/menu-home.png";
import Image2 from "@/assets/images/menu/menu-main.png";
import Image3 from "@/assets/images/menu/menu-about-us.png";
import Image4 from "@/assets/images/menu/menu-book-table.png";
import Logo from "@/assets/images/logo.png";

import { Close } from "../icons";

export type MobileMenuProps = {
  visible: boolean;
  onClose: () => void;
};

export function Menu({ visible, onClose }: MobileMenuProps) {
  type MenuKey = "home" | "menus" | "about" | "contact";
  const [hoveredItem, setHoveredItem] = useState<MenuKey | null>(null);

  const backgroundImages: Record<MenuKey, string> = {
    home: Image1,
    menus: Image2,
    about: Image3,
    contact: Image4,
  };

  const backgroundImage = hoveredItem
    ? backgroundImages[hoveredItem]
    : backgroundImages["home"];

  const menuItems: {
    label: string;
    to: string;
    key: "home" | "menus" | "about" | "contact";
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  }[] = [
    {
      label: "Home",
      to: "/",
      key: "home",
      onClick: onClose,
    },
    { label: "Our Menus", to: "/menu", key: "menus", onClick: onClose },
    { label: "About Us", to: "/about-us", key: "about", onClick: onClose },
    {
      label: "Book a Table",
      to: "/book-a-table",
      key: "contact",
      onClick: onClose,
    },
  ];

  return (
    <div
      aria-hidden={!visible}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
      className={twMerge(
        "fixed content-grid inset-0 z-50 flex flex-col justify-between backdrop-blur-md transition-transform duration-200 bg-cover bg-no-repeat bg-center",
        !visible ? "translate-x-full" : "translate-x-0"
      )}
    >
      <div className="col-content flex flex-col ">
        <div className="flex flex-row justify-between items-center py-4">
          <img
            src={Logo}
            className="md:w-[10.625rem] md:h-[3.375rem] w-[8.125rem] h-[2.5625rem] self-center "
          />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-3xl font-bold text-white"
          >
            <Close />
          </button>
        </div>
        <div className="flex flex-1 flex-col md:flex-row md:pb-20">
          <nav
            aria-label="mobile"
            className="col-content flex-1 flex h-full flex-col justify-center text-white text-[1.75rem] md:text-[2.375rem] font-extralight"
          >
            <ul>
              {menuItems.map(({ label, to, key, onClick }) => (
                <li key={label}>
                  <Link
                    to={to}
                    onClick={onClick}
                    onMouseEnter={() => setHoveredItem(key)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row flex-1 text-[50px] text-white text-end md:text-start items-end justify-center gap-4">
            <div>
              <p className="uppercase text-base mb-5">Contact Us</p>
              <p className="text-[17px]">Tel. (343)454-4364</p>
              <p className="text-[17px]">Mail. reserve@grandrestaurant.com</p>
            </div>
            <div className="">
              <p className="uppercase text-base mb-5">Address</p>
              <p className="text-[17px]">
                Via Serlas 546, 6700 St. Moritz,
                <br /> Switzerland
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
