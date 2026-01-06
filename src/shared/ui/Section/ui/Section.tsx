import * as cls from "./Section.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { MyText, TextSize } from "../../Text";
interface SectionProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
    > {
    className?: string;
    marginTop?: boolean;
    marginBottom?: boolean;
    marginRight?: boolean;
    marginLeft?: boolean;
    borderRadius?: boolean;
    fillColor?: boolean;
    children: React.ReactNode;
    title?: string;
    id?: string;
    isWidthLimitation?: boolean;
}
export const MySection = memo((props: SectionProps) => {
    const {
        className,
        children,
        marginLeft = true,
        marginRight = true,
        marginBottom = false,
        marginTop = false,
        borderRadius = false,
        fillColor = false,
        isWidthLimitation = true,
        title,
        id,
        ...otherProps
    } = props;
    useTranslation();

    const modsPadding: Mods = {
        [cls.marginTop]: marginTop,
        [cls.marginBottom]: marginBottom,
        [cls.marginRight]: marginRight,
        [cls.marginLeft]: marginLeft,
    };
    const mods: Mods = {
        [cls.borderRadius]: borderRadius,
        [cls.fillColor]: fillColor,
        [cls.width]: isWidthLimitation,
    };

    return (
        <section
            id={id}
            className={classNames(cls.section, { ...modsPadding, ...mods }, [
                className,
            ])}
            {...otherProps}
        >
            {title && (
                <MyText
                    className={classNames(cls.title)}
                    size={TextSize.H1}
                    heading={title}
                />
            )}
            {children}
        </section>
    );
});
