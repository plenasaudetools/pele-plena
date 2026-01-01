
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ScrollParallaxProps {
    children: React.ReactNode;
    offset?: number;
    damping?: number;
    stiffness?: number;
    direction?: 'up' | 'down';
    className?: string;
}

export const ScrollParallax = ({
    children,
    offset = 50,
    damping = 15, // Smoother spring
    stiffness = 200,
    direction = 'up',
    className = ""
}: ScrollParallaxProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const targetOffset = direction === 'up' ? -offset : offset;

    // Create a smoother responsive value
    const responsiveOffset = useTransform(scrollYProgress, [0, 1], [0, targetOffset]);

    // Add physics-based smoothing
    const y = useSpring(responsiveOffset, {
        damping,
        stiffness
    });

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};
