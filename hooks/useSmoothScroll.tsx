// hooks/useSmoothScroll.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, 
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
