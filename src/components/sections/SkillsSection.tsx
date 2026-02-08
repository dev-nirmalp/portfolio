"use client";

import { useCallback } from "react";
import { useNavigation } from "@/context/NavigationContext";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  const { animatingSection, registerSectionRef } = useNavigation();
  const isAnimating = animatingSection === "SKILLS";

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      registerSectionRef("SKILLS", el);
    },
    [registerSectionRef]
  );

  return (
    <section
      className={`buttonSection skill${isAnimating ? " start-anim" : ""}`}
      data-text="SKILLS"
      ref={setRef}
    >
      <div className="container">
        <SectionTitle
          prefix="My"
          highlight="Skills"
          subtitlePrefix="Check on my"
          subtitleHighlight=" Skills"
        />
        <div className="skillContent">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
