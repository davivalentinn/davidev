import { useEffect } from "react";

interface UseRevealOptions {
  selector?: string;
  threshold?: number;
}

export function useReveal({
  selector = ".reveal, .line-reveal",
  threshold = 0.3,
}: UseRevealOptions = {}): void {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
}
