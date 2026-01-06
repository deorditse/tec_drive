import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import * as cls from "./TextButton.module.scss";

export enum TextButtonTheme {
    GREEN = "green",
    WHITE = "white",
}

export enum TextButtonSize {
    Ss = "size_ss",
    S = "size_s",
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    theme?: TextButtonTheme;

    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: TextButtonSize;
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
}

export const TextButton = memo((props: TextButtonProps) => {
    const {
        className,
        children,
        theme = TextButtonTheme.WHITE,
        disabled,
        fullWidth,
        size = TextButtonSize.S,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.TextButton, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
