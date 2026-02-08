"use client";

import { useNavigation, type SectionName } from "@/context/NavigationContext";

const NAV_ITEMS: SectionName[] = ["HOME", "SKILLS", "ABOUT", "PORTFOLIO", "CONTACT"];

export default function MobileMenu() {
  const { isMenuOpen, closeMenu, navigateToSection } = useNavigation();

  return (
    <section
      id="menuList"
      className="menuList"
      style={{
        transform: isMenuOpen ? "translateY(0%)" : "translateY(-200%)",
        transition: "0.4s",
      }}
    >
      <nav className="navigation">
        <div className="nav_header">
          <div className="logo">
            <a href="#">
              <img src="/images/logo1.png" alt="logo" />
            </a>
          </div>
          <div className="menu" onClick={closeMenu}>
            <div className="closeLine"></div>
          </div>
        </div>
      </nav>
      <div className="navLinks">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li
              key={item}
              className="buttons"
              data-text={item}
              onClick={() => navigateToSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
