import * as cls from "./Padding.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { memo } from "react";

interface PaddingProps {
    className?: string;
    pTop?: boolean;
    pBottom?: boolean;
    pRight?: boolean;
    pLeft?: boolean;
    children: React.ReactNode;
}
export const Padding = memo((props: PaddingProps) => {
    const {
        className,
        children,
        pLeft = true,
        pRight = true,
        pTop = true,
        pBottom = true,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.pTop]: pTop,
        [cls.pBottom]: pBottom,
        [cls.pRight]: pRight,
        [cls.pLeft]: pLeft,
    };

    return (
        <div className={classNames("", mods, [className])} {...otherProps}>
            {children}
        </div>
    );
});
