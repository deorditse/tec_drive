import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cls from "./Background.module.scss";

gsap.registerPlugin(ScrollTrigger);

const BackgroundBlob = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const left = leftRef.current;
        const right = rightRef.current;
        if (!left || !right) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "center center",
                end: "bottom bottom",
                scrub: true,
            },
        });

        tl.to(left, {
            "--blob-radius": "70% 30% 80% 20% / 60% 40% 30% 70%",
            x: -200,
            y: 300,
            scale: 1.8,
            ease: "sine.inOut",
        }).to(left, {
            "--blob-radius": "40% 60% 30% 70% / 50% 50% 70% 30%",
            x: 0,
            y: -100,
            scale: 1.2,
            ease: "sine.inOut",
        });

        tl.to(
            right,
            {
                "--blob-radius": "30% 70% 50% 50% / 60% 40% 30% 70%",
                x: 200,
                y: -200,
                scale: 2,
                ease: "sine.inOut",
            },
            "<"
        ).to(
            right,
            {
                "--blob-radius": "50% 50% 70% 30% / 30% 70% 40% 60%",
                x: -100,
                y: 200,
                scale: 1.3,
                ease: "sine.inOut",
            },
            "<"
        );

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    }, []);
    return (
        <div className={cls.BackgroundContainer}>
            <div ref={leftRef} className={`${cls.blob} ${cls.topLeftBlob}`} />
            <div
                ref={rightRef}
                className={`${cls.blob} ${cls.bottomRightBlob}`}
            />
        </div>
    );
};

export default BackgroundBlob;
