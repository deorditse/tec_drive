import * as cls from "./Footer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { MySection } from "@/shared/ui/Section";
import { MyText } from "@/shared/ui/Text";
import { Logo } from "@/widgets/Logo/Logo";
import { useScreenWidth } from "@/shared/lib/hooks/useScreenWidth/useScreenWidth";
import { AppConst } from "@/shared/const/app";
interface FooterProps {
    className?: string;
}
export const Footer = memo((props: FooterProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { isMobile, isTablet } = useScreenWidth();

    return (
        <div className={cls.Footer}>
            <MySection id="contact" className={classNames(cls.content, {}, [])}>
                <div className={cls.left}>
                    <Logo />
                    {isMobile && <Contactodule />}
                    <div className={cls.description}>
                        <MyText
                            text={
                                <>
                                    ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ДЕОРДИЦЕ
                                    ДМИТРИЙ АНДРЕЕВИЧ, ОГРН 323623400029042, ИНН
                                    622504679786
                                </>
                            }
                        />

                        <MyText text="© Все права защищены. При копировании необходимо упоминание." />
                    </div>
                </div>

                {!isMobile && <Contactodule />}
            </MySection>
        </div>
    );
});

const Contactodule = () => {
    return (
        <div className={cls.info}>
            <a href={`tel:${AppConst.phone}`}>
                <MyText heading={AppConst.phoneFormat} />
            </a>
            <a href={`mailto:${AppConst.email}`}>
                <MyText heading={AppConst.email} />
            </a>
        </div>
    );
};
