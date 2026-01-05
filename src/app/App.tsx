import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import "./styles/index.scss";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { Navbar } from "@/widgets/NavBar/Navbar";
import { Footer } from "@/widgets/Footer/Footer";

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <MainLayout
                    header={<Navbar />}
                    content={<AppRouter />}
                    footer={<Footer />}
                />
            </Suspense>
        </div>
    );
}

export default App;
