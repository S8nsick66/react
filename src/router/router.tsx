import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout";
import { ListingsPage } from "../pages/ListingsPage";
import { ListingPage } from "../pages/ListingPage";
import { Page } from "../pages/Page";
import { ErrorPage } from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <ListingsPage />,
            },
            {
                path: "listing/:id",
                element: <ListingPage />,
            },
            {
                path: ":slug",
                element: <Page />
            }
        ],
    },
]);
