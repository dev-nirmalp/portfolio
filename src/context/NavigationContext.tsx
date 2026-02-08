"use client";

import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";

export type SectionName = "HOME" | "SKILLS" | "ABOUT" | "PORTFOLIO" | "CONTACT";

interface NavigationContextValue {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  navigateToSection: (section: SectionName) => void;
  breakerVisible: boolean;
  animatingSection: SectionName | null;
  registerSectionRef: (section: SectionName, el: HTMLElement | null) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [breakerVisible, setBreakerVisible] = useState(false);
  const [animatingSection, setAnimatingSection] = useState<SectionName | null>(null);
  const sectionRefs = useRef<Record<SectionName, HTMLElement | null>>({
    HOME: null, SKILLS: null, ABOUT: null, PORTFOLIO: null, CONTACT: null,
  });

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const registerSectionRef = useCallback((section: SectionName, el: HTMLElement | null) => {
    sectionRefs.current[section] = el;
  }, []);

  const navigateToSection = useCallback((section: SectionName) => {
    setAnimatingSection(null);
    setBreakerVisible(false);

    setTimeout(() => {
      setAnimatingSection(section);
      setIsMenuOpen(false);
      setBreakerVisible(true);
    }, 100);

    setTimeout(() => {
      sectionRefs.current[section]?.scrollIntoView({ behavior: "auto" });
    }, 500);

    setTimeout(() => {
      setBreakerVisible(false);
    }, 1600);
  }, []);

  return (
    <NavigationContext.Provider value={{
      isMenuOpen, openMenu, closeMenu,
      navigateToSection, breakerVisible, animatingSection, registerSectionRef,
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}
