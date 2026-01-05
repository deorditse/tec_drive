// Gallery.tsx
import * as cls from "./Gallery.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MySection } from "@/shared/ui/Section";
import img1 from "@/shared/assets/images/gallery/1.png";
import img2 from "@/shared/assets/images/gallery/2.png";

import img3 from "@/shared/assets/images/gallery/3.png";
import img5 from "@/shared/assets/images/gallery/5.jpg";
import { handleContactUsTelegram } from "@/shared/lib/hooks/сontact_us";

import img4 from "@/shared/assets/images/4.png";
// import img5 from "@/shared/assets/images/5.png";

import { ButtonSize, ButtonTheme, MyButton } from "@/shared/ui/Buttons/Button";

gsap.registerPlugin(ScrollTrigger);

const imageSources = [img1, img2, img3, img5];

const Gallery = memo(({ className }: { className?: string }) => {
    const { t } = useTranslation();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const wrapper = wrapperRef.current;
        const button = buttonRef.current;
        if (!wrapper || !button) return;

        const images = wrapper.querySelectorAll("img");
        const scrollStep = 200;

        const cols = 4; // число колонок (по ширине)
        const rows = Math.ceil(images.length / cols);

        const gapX = window.innerWidth / (cols + 1);
        const gapY = window.innerHeight / (rows + 1);

        images.forEach((img, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);

            // Центр каждой карточки
            const x = (col + 1) * gapX - window.innerWidth / 2;
            const y = (row + 1) * gapY - window.innerHeight / 2;

            const rotation = (Math.random() - 0.5) * 40;

            gsap.fromTo(
                img,
                {
                    opacity: 0,
                    scale: 0.7,
                    x: 0,
                    y: 0,
                    rotation: 0,
                },
                {
                    opacity: 1,
                    scale: 1,
                    x,
                    y,
                    rotation,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: `top+=${index * scrollStep} 1%`,
                        end: `top+=${(index + 1) * scrollStep} center`,
                        scrub: true,
                    },
                }
            );
        });

        // Кнопка по центру, только в пределах галереи
        gsap.fromTo(
            button,
            { autoAlpha: 0 },
            {
                autoAlpha: 1,
                scrollTrigger: {
                    trigger: wrapper,
                    start: "center center",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <MySection
            marginTop
            // marginRight={false}
            // marginLeft={false}
            // isWidthLimitation={false}
            id="business"
            title="Решения для бизнеса"
            ref={wrapperRef}
            className={classNames(cls.Gallery, {}, [className])}
        >
            <MyButton
                size={ButtonSize.XL}
                theme={ButtonTheme.WHITE}
                className={cls.centerButton}
                ref={buttonRef}
                onClick={handleContactUsTelegram}
            >
                Связаться с нами
            </MyButton>

            {imageSources.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`img-${index}`}
                    className={cls.image}
                />
            ))}
        </MySection>
    );
});

export default Gallery;
