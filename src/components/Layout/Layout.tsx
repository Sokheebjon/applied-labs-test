import React, {FC} from "react";
import Ads from "../../Containers/Ads";
import Navbar from "../../Containers/Navbar";
import Footer from "../../Containers/Footer";


const Layout: FC = ({children}) => {
    return (
        <>
            <header className="container-fluid">
                <Ads title={"20% OFF Sitewide until 9/12"}/>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout;
