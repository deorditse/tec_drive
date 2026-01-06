import { memo, ReactNode } from "react";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import * as cls from "./Text.module.scss";

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}

export enum TextSize {
    H5 = "H5",
    H4 = "H4",
    H3 = "H3",
    H2 = "H2",
    H1 = "H1",
}

export enum TextFont {
    Text = "text-font",
    Display = "display-font",
    Semibold = "semibold-font",
}

interface TextProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    className?: string;
    heading?: string; // <-- позволяет вставлять JSX
    text?: ReactNode; // <-- ЗАМЕНА СТРОКИ на ReactNode
    align?: TextAlign;
    size?: TextSize;
    font?: TextFont;
    "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.H5]: "h5",
    [TextSize.H4]: "h4",
    [TextSize.H3]: "h3",
    [TextSize.H2]: "h2",
    [TextSize.H1]: "h1",
};

export const MyText = memo((props: TextProps) => {
    const {
        className,
        text,
        heading,
        align = TextAlign.LEFT,
        size = TextSize.H3,
        font = TextFont.Text,
        "data-testid": dataTestId = "Text",
        ...otherProps
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[align]]: true,
        [cls[size]]: true,
        [cls[font]]: true,
    };

    return (
        <div className={classNames("", mods, [])} {...otherProps}>
            {heading && (
                <HeaderTag
                    className={classNames(cls.heading, {}, [className])}
                    data-testid={`${dataTestId}.Header`}
                >
                    {heading}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={classNames(cls.text, {}, [className])}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
