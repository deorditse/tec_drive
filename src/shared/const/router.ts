export enum AppRoutes {
    MAIN = "main",
    EDUCATION = "education",
    FORBIDDEN = "forbidden",
    // last
    NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteEducation = () => "/education";

// export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteForbidden = () => "/forbidden";
