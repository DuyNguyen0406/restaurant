import { MouseEventHandler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Image1 from "@/assets/images/menu/menu-home.png";
import Image2 from "@/assets/images/menu/menu-main.png";
import Image3 from "@/assets/images/menu/menu-about-us.png";
import Image4 from "@/assets/images/menu/menu-book-table.png";

import { Button } from "../ui";
import { Close } from "../icons";

export type MobileMenuProps = {
  visible: boolean;
  onClose: () => void;
};

export function Menu({ visible, onClose }: MobileMenuProps) {
  type MenuKey = "home" | "menus" | "about" | "contact";
  const [hoveredItem, setHoveredItem] = useState<MenuKey | null>(null);

  const handleScrollToSection: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    document
      .querySelector("#footer-nav")
      ?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  const backgroundImages: Record<MenuKey, string> = {
    home: Image1,
    menus: Image2,
    about: Image3,
    contact: Image4,
  };

  const backgroundImage = hoveredItem ? backgroundImages[hoveredItem] : "";

  return (
    <div
      aria-hidden={!visible}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
      className={twMerge(
        "fixed inset-0 z-50 flex flex-col justify-between backdrop-blur-md transition-transform duration-200 ",
        !visible ? "translate-x-full" : "translate-x-0"
      )}
    >
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-3xl font-bold text-gray-700 hover:text-black"
        >
          <Close />
        </button>
      </div>
      <div className="content-grid flex-1 pt-8">
        <nav
          aria-label="mobile"
          className="col-content flex h-full flex-col justify-center"
        >
          <ul>
            <li>
              <Link
                to="#Home"
                className="block py-4 text-center text-lg font-medium"
                onClick={handleScrollToSection}
                onMouseEnter={() => setHoveredItem("home")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/our-work"
                className="block py-4 text-center text-lg font-medium"
                onClick={onClose}
                onMouseEnter={() => setHoveredItem("menus")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Our Menus
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="block py-4 text-center text-lg font-medium"
                onClick={onClose}
                onMouseEnter={() => setHoveredItem("about")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                About Us
              </Link>
            </li>
            <li>
              <span className="block py-4 text-center text-lg font-medium">
                <Button asChild>
                  <Link
                    onMouseEnter={() => setHoveredItem("contact")}
                    onMouseLeave={() => setHoveredItem(null)}
                    to="/contact-us"
                    onClick={onClose}
                  >
                    Book a Table
                  </Link>
                </Button>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
