import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export const useInView = <T extends HTMLElement = HTMLDivElement>(
  options?: UseInViewOptions
): { ref: RefObject<T | null>; isInView: boolean } => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const { once, root, rootMargin = '150px 0px', threshold = 0.05 } = options || {};

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsInView(isIntersecting);

        if (isIntersecting && once) {
          observer.unobserve(entry.target);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
};
