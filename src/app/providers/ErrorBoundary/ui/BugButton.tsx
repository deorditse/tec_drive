import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MyButton } from "@/shared/ui/Buttons/Button";

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <MyButton onClick={onThrow}>{t("throw error")}</MyButton>;
};
