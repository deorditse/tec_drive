import * as cls from "./Header.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ButtonTheme, MyButton } from "@/shared/ui/Buttons/Button";
import { MyText, TextAlign, TextSize } from "@/shared/ui/Text";
import { MySection } from "@/shared/ui/Section";

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps {
    className?: string;
}

const Header = memo((props: HeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null); // Оборачиваем iframe

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 1, y: 0 },
                {
                    opacity: 0,
                    y: -400,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }

        if (videoRef.current) {
            gsap.fromTo(
                videoRef.current,
                { opacity: 1 },
                {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    const videoHref = "https://youtu.be/8SxmzDSJymA?feature=shared";

    const handleWatchVideo = () => {
        window.open(videoHref, "_blank");
    };

    return (
        <MySection
            marginLeft={false}
            marginRight={false}
            className={cls.Header}
        >
            <div
                ref={wrapperRef}
                className={classNames(cls.Header, {}, [className])}
            >
                <div ref={videoRef} className={cls.videoWrapper}>
                    {/* <video autoPlay muted loop playsInline>
                        <source src={videoHeader} type="video/mp4" />
                    </video> */}

                    {/* <video
                        src={videoHeader}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ height: "inherit" }}
                    /> */}

                    <div ref={contentRef} className={cls.contentOverlay}>
                        <MyText
                            size={TextSize.H1}
                            heading="Разработка ботов с AI"
                        />

                        <MyText
                            align={TextAlign.CENTER}
                            text={
                                <>
                                    Создаем умные решения для бизнеса с помощью
                                    современных технологий
                                </>
                            }
                        />
                        <MyButton
                            theme={ButtonTheme.BLUE}
                            onClick={handleWatchVideo}
                            className={cls.watchVideoButton}
                        >
                            Смотреть видео
                        </MyButton>
                    </div>
                </div>
            </div>
        </MySection>
    );
});

export default Header;
