type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, accent, subtitle }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}{accent ? <> <span>{accent}</span></> : null}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
