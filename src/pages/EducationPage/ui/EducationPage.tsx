import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
interface EducationPageProps {
    className?: string;
}
const EducationPage = memo((props: EducationPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return <div className={classNames("", {}, [className])}>EducationPage</div>;
});

EducationPage.displayName = "EducationPage";
export default EducationPage;
