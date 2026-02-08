import type { Service } from "@/data/services";

export default function ServiceCard({ title, company, description, image, className }: Service) {
  return (
    <div className={`${className} service`}>
      <div className="service-img">
        <img src={image} className="colorBg" alt={title} />
      </div>
      <div className="service-description">
        <h2>
          {title}
          <label>{company}</label>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
