// src/pages/NotFoundPage/NotFoundPage.tsx
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { classNames } from "@/shared/lib/classNames/classNames";
import CatImg from "@/shared/assets/images/404.png";
import * as cls from "./NotFoundPage.module.scss";
import { MyImage } from "@/shared/ui/AppImage/AppImage";
import { MyText, TextSize } from "@/shared/ui/Text";
import { ButtonTheme, MyButton } from "@/shared/ui/Buttons/Button";
import { Page } from "@/widgets/Page";

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, x: -150 },
            { opacity: 1, x: 0, duration: 4, ease: "power3.out" }
        );
    }, []);

    const onClick = () => navigate("/");

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {/* Фоновое изображение кота */}
            <MyImage className={cls.bg} src={CatImg} />

            {/* Надпись ОКАК справа */}
            <div className={cls.okakLabel}>ОКАК</div>

            {/* Левый блок с текстом */}
            <div className={cls.left}>
                <div className={cls.content} ref={textRef}>
                    <div>
                        <MyText
                            className={cls.title}
                            text={
                                <>
                                    СТРАНИЦА <br />
                                    НЕ НАЙДЕНА
                                </>
                            }
                        />
                        <MyText
                            size={TextSize.H3}
                            text={
                                <>
                                    Пока не знаем в чём проблема,
                                    <br />
                                    но мы скоро это исправим
                                </>
                            }
                        />
                        <div className={cls.code}>404</div>
                    </div>

                    <MyButton theme={ButtonTheme.WHITE} onClick={onClick}>
                        Окак, на главную
                    </MyButton>
                </div>
            </div>
        </Page>
    );
};

export default NotFoundPage;
