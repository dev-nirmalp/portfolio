interface SectionTitleProps {
  prefix: string;
  highlight: string;
  subtitlePrefix: string;
  subtitleHighlight: string;
}

export default function SectionTitle({ prefix, highlight, subtitlePrefix, subtitleHighlight }: SectionTitleProps) {
  return (
    <div className="sectionTitle">
      {prefix} <span className="color">{highlight}</span>
      <span className="sectionSubtitle">
        {subtitlePrefix} <span className="color">{subtitleHighlight}</span>
      </span>
    </div>
  );
}
