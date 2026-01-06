import { Page } from "@/widgets/Page";
import Header from "./sections/Header/Header";
import Workflow from "./sections/Workflow/Workflow";
import { Footer } from "../../../widgets/Footer/Footer";
import { AboutAs } from "./sections/AboutAs/AboutAs";
import BackgroundBlob from "./sections/Background/Background";
import { Recommended } from "./sections/Recommended/Recommended";

const MainPage = () => {
    return (
        <Page>
            <BackgroundBlob />
            <Header />
            {/* <Workflow /> */}
            <AboutAs />
            <Recommended />
        </Page>
    );
};
 
export default MainPage;
