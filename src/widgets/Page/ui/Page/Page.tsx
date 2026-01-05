import { type CSSProperties, memo, type ReactNode, useRef } from "react";
import * as cls from "./Page.module.scss";
import {type TestProps } from "@/shared/types/tests";
import { classNames } from "@/shared/lib/classNames/classNames";

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
    style?: CSSProperties;
}

export const PAGE_ID = "PAGE_ID";

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd, style } = props;
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);

    return (
        <main
            style={style}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            id={PAGE_ID}
            data-testid={props["data-testid"] ?? "Page"}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
});
