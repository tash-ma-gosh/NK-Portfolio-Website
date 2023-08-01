import React from "react";
import Page from "../pages/Page";

const PageRenderer = ({ pages, selectedPageID}) => {
    const selectedPage = pages.find((page) => page.id === selectedPageId);

    return selectedPage ? (
        <Page title={selectedPage.title} content={selectedPage.content} />
    ) : (
        <p>testing 123</p>
    );
};

export default PageRenderer;