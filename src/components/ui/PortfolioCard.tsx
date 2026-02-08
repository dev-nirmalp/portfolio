import type { Project } from "@/data/projects";

export default function PortfolioCard({ name, tech, image, url, className }: Project) {
  return (
    <div className={`portfolio ${className}`}>
      <div className="portfolio-image">
        <img src={image} alt={name} />
      </div>
      <div className="portfolio-text">
        <div className="portfolio-text-wrapper">
          <h2>{name}</h2>
          <h5>{tech}</h5>
          <div className="button">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span className="projectButton">
                <span className="index">
                  {" "}View Project<i className="gg-arrow-right"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
