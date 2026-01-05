import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { MyButton } from "@/shared/ui/Buttons/Button";
import * as cls from "./ErrorPage.module.scss";
import { Page } from "@/widgets/Page";

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <Page
            className={classNames(cls.ErrorPage, {}, [className])}
            data-testid="error-page"
        >
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <MyButton onClick={reloadPage}>{t("Обновить страницу")}</MyButton>
        </Page>
    );
};
