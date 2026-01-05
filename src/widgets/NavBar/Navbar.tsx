import { memo } from "react";
import { AdaptiveWidget } from "@/shared/ui/AdaptiveWidget";
import { NavBarAsync } from "./src/device/desktop/Navbar.async";
import { NavBarOtherAsync } from "./src/device/other/NavbarOther.async";
import { MySection } from "@/shared/ui/Section";
import * as cls from "./Navbar.module.scss";
interface NavbarProps {
    className?: string;
}
export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    return (
        <div className={cls.Navbar}>
            <AdaptiveWidget
                desktopScreen={<NavBarAsync />}
                otherScreen={<NavBarOtherAsync />}
            />
        </div>
    );
});
Navbar.displayName = "Navbar";
