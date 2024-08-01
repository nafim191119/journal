import { Outlet } from "react-router-dom";
import Nav from "../subPages/Nav";
import Footer from "../subPages/Footer";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;