"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MD_UP = "(min-width: 768px)";
const REDUCE_MOTION = "(prefers-reduced-motion: reduce)";

export function CustomCursor() {
    const [active, setActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 36, stiffness: 560, mass: 0.32 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const mq = window.matchMedia(MD_UP);
        const reduceMq = window.matchMedia(REDUCE_MOTION);

        let raf = 0;
        let pendingX = -100;
        let pendingY = -100;

        const cursorRAF = (x: number, y: number) => {
            pendingX = x;
            pendingY = y;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                cursorX.set(pendingX);
                cursorY.set(pendingY);
            });
        };

        const moveCursor = (e: MouseEvent) => {
            if (!mq.matches || reduceMq.matches) return;
            cursorRAF(e.clientX, e.clientY);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const sync = () => {
            const on = mq.matches && !reduceMq.matches;
            setActive(on);
            document.documentElement.classList.toggle("use-custom-cursor", on);
            if (!on) {
                cancelAnimationFrame(raf);
                setIsVisible(false);
            }
        };

        sync();
        mq.addEventListener("change", sync);
        reduceMq.addEventListener("change", sync);
        window.addEventListener("mousemove", moveCursor, { passive: true });
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            mq.removeEventListener("change", sync);
            reduceMq.removeEventListener("change", sync);
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", moveCursor);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.documentElement.classList.remove("use-custom-cursor");
        };
    }, [cursorX, cursorY]);

    if (!active) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-[10000] hidden md:block" aria-hidden="true">
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[10000] h-4 w-4 rounded-full bg-primary mix-blend-difference will-change-transform"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
            />
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-primary/50 will-change-transform"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                    scale: 1.5,
                }}
            />
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[-1] h-32 w-32 rounded-full bg-primary/[0.08] blur-[56px] will-change-transform"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 0.85 : 0,
                }}
            />
        </div>
    );
}
