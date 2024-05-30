import React from 'react';
import {Outlet} from "react-router-dom";
import PageWrapper from "../wrapper/PageWrapper.jsx";

const PageLayout = () => {
    return (
        <div>
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </div>
    );
};

export default PageLayout;