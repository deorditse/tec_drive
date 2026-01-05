export type BuildMode = "production" | "development";

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
    public?: string;
}

export interface BuildEnv {
    preProd: boolean;
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isProd: boolean;
    port: number;
    apiUrl: string;
    project: "storybook" | "frontend" | "jest";
}
