import Topbar from "../topbar/Topbar";
import Navbar from "../navbar/Navbar";

import ModalProvider from "../modal/modalContext/ModalProvider";
const Header = () => {
    return (
        <header>
            <Topbar />
            <ModalProvider>
            <Navbar />
            </ModalProvider>
        </header>
    )
}

export default Header