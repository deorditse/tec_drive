import type { NavigateFunction } from "react-router-dom";

interface MenuOnClick {
    toPage?: string;
    toSectionId?: string;
    toCustom?: () => void;
}

export function handleClickNav(
    { toPage, toSectionId, toCustom }: MenuOnClick,
    navigate?: NavigateFunction
) {
    if (toPage && navigate) {
        navigate(toPage);
        return;
    }

    if (
        toSectionId &&
        typeof window !== "undefined" &&
        typeof document !== "undefined"
    ) {
        const el = document.querySelector(`#${toSectionId}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
    }

    toCustom?.();
}

import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { MenuSchema } from "../types/menu";
import { handleContactUsTelegram } from "@/shared/lib/hooks/сontact_us";

export function useMenu(): MenuSchema[] {
    const navigate = useNavigate();

    return useMemo(
        () => [
            {
                title: "Решение для бизнеса",
                onClick: () =>
                    handleClickNav({
                        toSectionId: "business",
                    }),
            },
            {
                title: "Обучение",
                onClick: () =>
                    handleClickNav({ toCustom: handleContactUsTelegram }),
            },
            {
                title: "Связаться с нами",
                onClick: () =>
                    handleClickNav({
                        toSectionId: "contact",
                    }),
            },
            // пример перехода на страницу:
            // {
            //   title: 'Тарифы',
            //   onClick: () => handleClickNav({ toPage: '/pricing' }, navigate),
            // },
        ],
        [navigate]
    );
}
