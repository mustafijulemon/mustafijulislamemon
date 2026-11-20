import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Scroll-triggered reveal with a safe fallback for browsers without IntersectionObserver. */
export default function Reveal({ children, delay = 0, y = 24, className = "" }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties & { "--reveal-delay": string; "--reveal-distance": string } = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-distance": `${y}px`,
  };

  return (
    <div ref={elementRef} className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
