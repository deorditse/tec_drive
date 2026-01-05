import { Page } from "@/widgets/Page";
import Header from "./sections/Header/Header";
import Gallery from "./sections/Gallery/Gallery";
import Workflow from "./sections/Workflow/Workflow";
import { Footer } from "../../../widgets/Footer/Footer";
import { AboutAs } from "./sections/AboutAs/AboutAs";
import BackgroundBlob from "./sections/Background/Background";

const MainPage = () => {
    return (
        <Page>
            <BackgroundBlob />
            <Header />
            <Workflow />
            <AboutAs />
            <Gallery />
        </Page>
    );
};

export default MainPage;
