import React, { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import * as cls from "./MyIcon.module.scss";

interface MyIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const MyIcon = memo((props: MyIconProps) => {
    const { className, Svg, ...otherProps } = props;

    return (
        <Svg
            className={classNames(cls.MyIcon, {}, [className])}
            {...otherProps}
        />
    );
});
