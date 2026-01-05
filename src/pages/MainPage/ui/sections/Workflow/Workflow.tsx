import * as cls from "./Workflow.module.scss";
import { memo, useMemo, useRef, useEffect } from "react";
import { getWorkflows } from "./selectors/getWorkflows";
import { MyText, TextSize } from "@/shared/ui/Text";
import { MySection } from "@/shared/ui/Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Workflow = memo(({ className }: { className?: string }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const workflows = useMemo(() => getWorkflows(), []);

    useEffect(() => {
        if (!trackRef.current || !sectionRef.current) return;

        const slides = trackRef.current.querySelectorAll(`.${cls.step}`);
        if (!slides.length) return;

        let totalWidth = 0;
        slides.forEach((slide) => {
            totalWidth += slide.getBoundingClientRect().width + 100;
        });

        const scrollLength = totalWidth - window.innerWidth;

        gsap.to(trackRef.current, {
            x: -scrollLength,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "center center",
                end: `+=${totalWidth}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        });

        ScrollTrigger.refresh();
    }, [workflows]);

    return (
        <div ref={sectionRef} className={cls.workflowSection}>
            <MySection ref={trackRef} className={cls.slider}>
                {workflows.map((workflow, index) => (
                    <div key={index} className={cls.step}>
                        <div className={cls.slide}>
                            <div className={cls.heading}>
                                <div className={cls.cardTitle}>
                                    <span className={cls.bgNumber}>
                                        {index + 1}
                                    </span>
                                    <MyText
                                        size={TextSize.H2}
                                        heading={workflow.title}
                                    />
                                </div>
                            </div>
                            <MyText
                                size={TextSize.H2}
                                text={workflow.description}
                            />
                        </div>

                        {index !== workflows.length - 1 && (
                            <div className={cls.arrow}>
                                <svg
                                    viewBox="0 0 100 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={cls.arrowSvg}
                                >
                                    <line
                                        x1="0"
                                        y1="12"
                                        x2="90"
                                        y2="12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <polygon
                                        points="90,6 100,12 90,18"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </MySection>
        </div>
    );
});
export default Workflow;
