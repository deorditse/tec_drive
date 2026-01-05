declare module "*.scss" {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.mp4" {
    const src: string;
    export default src;
}
// declare module "*.mp4?url" {
//     const src: string;
//     export default src;
// }
declare module "*.svg" {
    import React from "react";

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __VERSION__: string;
declare const __PROJECT__: "storybook" | "frontend" | "jest";

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends PropertyKey, T> = {
    [P in K]?: T;
};
