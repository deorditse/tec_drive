import * as cls from "./Recommended.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { MySection } from "@/shared/ui/Section";
import { MyImage } from "@/shared/ui/AppImage/AppImage";

import RecommentedImg from "@/shared/assets/images/recommented.png";
interface RecommendedProps {
    className?: string;
}
export const Recommended = memo((props: RecommendedProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <MySection marginTop title="Нас рекомендуют" id="about_us">
            <div className={classNames(cls.Recommended, {}, [className])}>
                <MyImage
                    className={cls.recommentedImg}
                    style={{ borderRadius: "20px" }}
                    src={RecommentedImg}
                />
            </div>
        </MySection>
    );
});
Recommended.displayName = "Recommended";
