"use client";

import { useCallback } from "react";
import { useNavigation } from "@/context/NavigationContext";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { projects } from "@/data/projects";

export default function PortfolioSection() {
  const { animatingSection, registerSectionRef } = useNavigation();
  const isAnimating = animatingSection === "PORTFOLIO";

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      registerSectionRef("PORTFOLIO", el);
    },
    [registerSectionRef]
  );

  return (
    <section
      className={`buttonSection portfoliosect${isAnimating ? " start-anim" : ""}`}
      data-text="PORTFOLIO"
      ref={setRef}
    >
      <div className="container portfolioContainer">
        <div className="sectionTitle">
          <span className="color"> My </span> Portfolio
          <span className="sectionSubtitle">
            {" "}Some Of My <span className="color"> Works</span>
          </span>
        </div>
        <div className="portfolio-content">
          {projects.map((project) => (
            <PortfolioCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
