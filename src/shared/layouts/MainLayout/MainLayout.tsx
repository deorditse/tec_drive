import { memo, ReactElement } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MainLayout.module.scss";

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar?: ReactElement;
    toolbar?: ReactElement;
    footer?: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const { className, content, toolbar, header, sidebar, footer } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.content}>
                {header && <div className={cls.header}>{header}</div>}
                {content}
                {footer && <div className={cls.footer}>{footer}</div>}
            </div>
            {sidebar && <div className={cls.sidebar}>{sidebar}</div>}
            {toolbar && (
                <div className={cls.rightbar}>
                    <div className={cls.toolbar}>{toolbar}</div>
                </div>
            )}
        </div>
    );
});
