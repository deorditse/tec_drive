import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutAs.module.scss";
import { MySection } from "@/shared/ui/Section";
import { MyText, TextSize } from "@/shared/ui/Text";
import { MyIcon } from "@/shared/ui/Icon";
import MapSvg from "@/shared/assets/icons/map/map.svg";
import LocSvg from "@/shared/assets/icons/map/loc.svg";
import { ButtonTheme, MyButton } from "@/shared/ui/Buttons/Button";
import { handleContactUsTelegram } from "@/shared/lib/hooks/сontact_us";

gsap.registerPlugin(ScrollTrigger);

export const AboutAs = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el, i) => {
                const direction = i % 2 === 0 ? -1 : 1; // чередуем направление анимации
                const tl = gsap.timeline({ paused: true });

                tl.fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 80 * direction,
                        x: 40 * direction,
                        scale: 0.9,
                        rotate: 6 * direction,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                        rotate: 0,
                        duration: 1,
                        ease: "power3.out",
                        delay: i * 0.05,
                    }
                );

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 90%",
                    onEnter: () => tl.restart(),
                    onEnterBack: () => tl.restart(),
                    onLeaveBack: () => {
                        // сбрасываем элемент в начальное состояние
                        gsap.set(el, {
                            opacity: 0,
                            y: 80 * direction,
                            x: 40 * direction,
                            scale: 0.9,
                            rotate: 6 * direction,
                        });
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef}>
            <MySection
                marginTop
                title="О компании"
                ref={sectionRef}
                id="about_us"
            >
                <div className={`${styles.FullBlock} fade-in`}>
                    <MyText
                        text={
                            <>
                                Транспортно-экспедиционная компания «ТЭК-драйв»
                                создана в 2005 году командой профессионалов с
                                целью оказания широкого спектра услуг в области
                                логистики.Компания предлагает услуги
                                грузоперевозок как по России, так и за её
                                пределами, практически по любым направлениям,
                                благодаря развитой инфраструктуре: налаженным
                                партнёрским отношениям с морскими линиями,
                                широкой агентской сети, консолидационным складам
                                в Европе и Азии, а также филиалам в городах РФ.
                                Головной офис компании находится в
                                Москве.Ежедневно клиенты компании из самых
                                разных отраслей и сфер экономики получают
                                надёжный и качественный сервис, связанный с
                                транспортно-экспедиционными услугами для их
                                бизнеса.
                            </>
                        }
                    />
                    <MyText
                        text={
                            <>
                                <br />
                                Компания располагает собственным современным
                                автомобильным парком, удовлетворяющим
                                требованиям экологического класса ЕВРО 4,
                                включая транспорт, оборудованный под перевозку
                                опасных грузов.
                            </>
                        }
                    />
                </div>
            </MySection>

            <MySection
                marginTop
                marginBottom
                title="Мы предлагаем своим клиентам"
                className={styles.CardGrid}
            >
                <div className={styles.CardRow}>
                    {[
                        "Перевозки генеральных грузов по Москве и Московской области, а также по всей территории РФ",
                        "Международные автомобильные перевозки, в том числе доставку сборных грузов в международном сообщении",
                        "Морские контейнерные перевозки",
                        "Авиа перевозки ",
                        "Сопровождение ВЭД, услуги таможенного оформления",
                    ].map((text, index) => (
                        <div key={index} className={`${styles.Card} fade-in`}>
                            <MyText text={text} />
                        </div>
                    ))}
                </div>
            </MySection>

            <MySection
                marginTop
                marginBottom
                title="Полный комплекс логистических услуг"
                className={styles.CardGrid}
            >
                <div className={styles.CardRow}>
                    {[
                        "📬 Маршруты. Внутригородские, междугородные, международные",
                        "💬 Внутренние и внешние. Внутрироссийские автомобильные перевозки, международные автомобильные перевозки, авиа, морские, железнодорожные перевозки",
                        "🛒 Услуги ВЭД. Консультации по условиям оформления контрактов ВЭД, таможенное оформление, таможенные платежи, cертификация, представление интересов клиента в различных инстанциях, cвоевременное подтверждение прозрачности сделок в надзорных органах",
                    ].map((text, index) => (
                        <div key={index} className={`${styles.Card} fade-in`}>
                            <MyText text={text} />
                        </div>
                    ))}
                </div>
            </MySection>

            <MySection
                className={styles.map}
                marginTop={false}
                marginBottom={false}
            >
                <MyIcon
                    style={{ width: "100%", height: "auto" }}
                    data-testid="Map"
                    Svg={MapSvg}
                />
                <MyIcon
                    style={{
                        width: "100%",
                        position: "absolute",
                        top: "-100px",
                        right: "0px",
                    }}
                    data-testid="Loc"
                    Svg={LocSvg}
                />
                <MyButton
                    theme={ButtonTheme.BLUE}
                    onClick={handleContactUsTelegram}
                    className={styles.mapButton}
                >
                    Связаться с нами
                </MyButton>
            </MySection>
        </div>
    );
};
