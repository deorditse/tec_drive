import { useEffect, useState } from "react";

const _mobileScreenSize = 450;
const _tabletScreenSize = 960;

export interface ScreenModel {
    width?: number;
    isMobile?: boolean;
    isTablet?: boolean;
    isDesktop?: boolean;
}

export function useScreenWidth(): ScreenModel {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []); // ← пустой массив

    return {
        width,
        isMobile: width <= _mobileScreenSize,
        isTablet: _mobileScreenSize < width && width < _tabletScreenSize,
        isDesktop: width >= _tabletScreenSize,
    };
}
