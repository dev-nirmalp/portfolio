import type { Skill } from "@/data/skills";

export default function SkillCard({ image, category, title, description }: Skill) {
  return (
    <div className="skills">
      <a href="#">
        <div className="img">
          <img src={image} alt={category} />
          <div className="skillDate">{category}</div>
        </div>
        <div className="skillText">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
