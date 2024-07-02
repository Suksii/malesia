import React from 'react';
import {Outlet} from "react-router-dom";
import PageWrapper from "../wrapper/PageWrapper.jsx";
import Navbar from "../components/Navbar.jsx";
import FondHeader from "../components/FondHeader.jsx";

const PageLayout = () => {


    const fondLink = "https://fzm.me/v/";
    const fondLogo = "https://upload.wikimedia.org/wikipedia/commons/2/23/Coat_of_arms_of_Montenegro.svg";
    const goToFond = () => {
        console.log("Fond")
        window.open(fondLink);
    }


    return (
        <div>
            <Navbar fondLink={fondLink} goToFond={goToFond}/>
            <FondHeader goToFond={goToFond} fondLogo={fondLogo}/>
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </div>
    );
};

export default PageLayout;