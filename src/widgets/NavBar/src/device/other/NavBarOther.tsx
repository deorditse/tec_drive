import * as cls from "./NavBarOther.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";

import { Logo } from "@/widgets/Logo/Logo";
import { ButtonTheme, MyButton } from "@/shared/ui/Buttons/Button";
import { DrawerAsync } from "./Drawer/Drawer.async";

import { handleContactUsTelegram } from "@/shared/lib/hooks/сontact_us";
import { MySection } from "@/shared/ui/Section";
interface NavBarProps {
    className?: string;
    onClick?: () => void;
}
const NavBarOther = memo((props: NavBarProps) => {
    const { className, onClick } = props;

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.navbar}>
                <div className={cls.left}>
                    <Logo />
                </div>

                <div className={cls.right}>
                    <MyButton
                        onClick={handleContactUsTelegram}
                        theme={ButtonTheme.WHITE}
                    >
                        Заказать бота
                    </MyButton>
                    <DrawerAsync />
                </div>
            </div>
        </div>
    );
});

export default NavBarOther;
