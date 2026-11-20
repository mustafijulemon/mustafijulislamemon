import { Award, Code2, Crown, GraduationCap, Megaphone, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/siteConfig";

function AchievementIcon({ category }: { category: string }) {
  if (category === "CSE · Academic") return <GraduationCap size={19} />;
  if (category === "Competitive Programming") return <Code2 size={19} />;
  if (category === "Debate") return <Megaphone size={19} />;
  if (category === "Leadership") return <Crown size={19} />;
  if (category === "Academic Achievement") return <Award size={19} />;
  return <Trophy size={19} />;
}

export default function Achievements() {
  return (
    <section id="achievements" className="section section-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements &"
          accent="Awards"
          subtitle="Academic performance, competitive programming results, national debate recognition, and student leadership."
        />
        <div className="achievements-grid">
          {achievements.map((item) => (
            <article className="achievement-item" key={item.title}>
              <div className="achievement-icon"><AchievementIcon category={item.category} /></div>
              <div className="achievement-content">
                <p className="achievement-category">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              {item.stat && <strong className="achievement-stat">{item.stat}</strong>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
