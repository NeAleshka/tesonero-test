import Header from "./componets/Header";
import Main from "./componets/Main/Main";
import Footer from "./componets/Footer/Footer";
import  { useReactPWAInstall } from "react-pwa-install";
import Logo from '../public/logo.jpeg'
import {useEffect} from "react";
function App() {
    const { pwaInstall, isInstalled } = useReactPWAInstall();
    const installPWA = () => {
    pwaInstall({
        title: "Install Tesonero Application",
        logo: Logo,
        description: "You can install our Application for work in offline and other interesting things",
    })
        .then(() => console.log("App installed successfully or instructions for install shown"))
        .catch(() => console.log("User opted out from installing"));
};
    useEffect(() => {
        setTimeout(() => {
            if(!isInstalled())
            installPWA()
        },2000)
    }, []);

    return (
        <div className={'w-full mx-auto'}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
export default App
