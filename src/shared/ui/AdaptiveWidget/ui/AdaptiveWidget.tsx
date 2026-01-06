import { useScreenWidth } from "@/shared/lib/hooks/useScreenWidth/useScreenWidth";
import { memo, ReactNode } from "react";

interface AdaptiveWidgetProps {
  desktopScreen?: ReactNode;
  tabletScreen?: ReactNode;
  mobileScreen?: ReactNode;
  otherScreen?: ReactNode;
}

export const AdaptiveWidget = memo((props: AdaptiveWidgetProps) => {
  const { desktopScreen, tabletScreen, mobileScreen, otherScreen } = props;

  const { isMobile, isTablet, isDesktop } = useScreenWidth();

  if (isDesktop && desktopScreen != null) {
    return desktopScreen!;
  }
  if (isTablet && tabletScreen != null) {
    return tabletScreen!;
  }
  if (isMobile && mobileScreen != null) {
    return mobileScreen!;
  }
  if (otherScreen != null) {
    return otherScreen!;
  }

  throw Error("Can not watch layout");
});
