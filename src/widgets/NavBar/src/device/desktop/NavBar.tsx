import * as cls from "./NavBar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, useEffect, useMemo } from "react";
import { TextButton, TextButtonSize } from "@/shared/ui/Buttons/TextButton";
import { MenuSchema } from "../../model/types/menu";
import { Logo } from "@/widgets/Logo/Logo";
import { ButtonTheme, MyButton } from "@/shared/ui/Buttons/Button";
import { handleContactUsTelegram } from "@/shared/lib/hooks/сontact_us";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../model/selectors/topSection";

interface NavBarProps {
    className?: string;
    onClick?: () => void;
}
const NavBar = memo((props: NavBarProps) => {
    const { className, onClick } = props;
    const navigate = useNavigate();

    const handleClickNav = (nav: MenuSchema) => () => {
        onClick?.();
        nav.onClick();
    };

    const menu = useMenu();

    return (
        <div className={classNames(cls.NavBar)}>
            <div className={cls.navbar}>
                <Logo />
                {menu.map((nav: MenuSchema) => (
                    <TextButton
                        key={nav.title}
                        size={TextButtonSize.Ss}
                        className={cls.textNav}
                        onClick={handleClickNav(nav)}
                    >
                        {nav.title}
                    </TextButton>
                ))}
            </div>
            <MyButton
                onClick={handleContactUsTelegram}
                theme={ButtonTheme.WHITE}
            >
                Заказать бота
            </MyButton>
        </div>
    );
});

export default NavBar;
