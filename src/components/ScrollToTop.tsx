import { ArrowUp } from "lucide-react";
import { useScrolled } from "../hooks/useActiveSection";

export default function ScrollToTop() {
  const visible = useScrolled(620);
  if (!visible) return null;
  return (
    <button
      className="scroll-to-top"
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp size={18} />
    </button>
  );
}
