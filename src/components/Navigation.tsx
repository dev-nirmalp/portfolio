"use client";

import { useNavigation } from "@/context/NavigationContext";

export default function Navigation() {
  const { openMenu } = useNavigation();

  return (
    <nav className="navigation">
      <div className="nav_header">
        <div className="logo">
          <a href="#">
            <img src="/images/logo1.png" alt="logo" />
          </a>
        </div>
        <div className="menu" onClick={openMenu}>
          <div className="menuOpen">
            <div className="openLine"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
