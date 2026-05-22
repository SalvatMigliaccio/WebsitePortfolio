import { useState, useEffect, useRef } from 'react';

/**
 * Returns the id of the section currently in the viewport center.
 * @param {string[]} sectionIds - ordered list of section ids
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observers = new Map();

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observerRef.current.observe(el);
        observers.set(id, el);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds]);

  return activeId;
}
