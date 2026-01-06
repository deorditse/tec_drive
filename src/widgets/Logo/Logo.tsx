import { memo } from "react";
import LogoSvg from "@/shared/assets/icons/logo.svg";

import { MyIcon } from "@/shared/ui/Icon";
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/const/router";
import { MyImage } from "@/shared/ui/AppImage/AppImage";
import LogoImg from "@/shared/assets/images/logo.jpeg";
import { MyText, TextFont, TextSize } from "@/shared/ui/Text";

export const Logo = memo((props: React.SVGProps<SVGSVGElement>) => {
    const { style } = props;
    const navigate = useNavigate();

    const onTapLogo = () => {
        navigate(getRouteMain());
    };

    return (
        <MyText
            onClick={onTapLogo}
            size={TextSize.H2}
            font={TextFont.Semibold}
            text="ТЭК-ДРАЙВ"
        />
        // <MyImage  onClick={onTapLogo}  width={"120px"} style={style} src={LogoImg} />
        // <MyIcon
        //     onClick={onTapLogo}
        //     width={"120px"}
        //     data-testid="Logo"
        //     Svg={LogoSvg}
        //     style={style}
        // />
    );
});
