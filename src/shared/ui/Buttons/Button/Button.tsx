import { ButtonHTMLAttributes, ForwardedRef, memo, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import * as cls from "./Button.module.scss";

export enum ButtonTheme {
    WHITE = "white",
    BLUE = "blue",
}

export enum ButtonSize {
    S = "size_s",
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    theme?: ButtonTheme;

    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean;
    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
    ref?: ForwardedRef<HTMLButtonElement>;
}

export const MyButton = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.BLUE,
        disabled,
        fullWidth = false,
        size = ButtonSize.S,
        ref,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls[theme]]: true,
        [cls[size]]: true,
    };

    return (
        <button
            ref={ref}
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
