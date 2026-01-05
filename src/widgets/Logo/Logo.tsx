import { memo } from "react";
import LogoSvg from "@/shared/assets/icons/logo.svg";

import { MyIcon } from "@/shared/ui/Icon";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/const/router";

export const Logo = memo((props: React.SVGProps<SVGSVGElement>) => {
    const { style } = props;
    const navigate = useNavigate();

    const onTapLogo = () => {
        navigate(getRouteMain());
    };

    return (
        <MyIcon
            onClick={onTapLogo}
            width={"120px"}
            data-testid="Logo"
            Svg={LogoSvg}
            style={style}
        />
    );
});
