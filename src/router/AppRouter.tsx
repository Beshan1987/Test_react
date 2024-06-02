import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { MainPage } from "../pages/MainPage/MainPage";
import { Page404 } from "~/pages/Page404/Page404";
import { NewsListPage } from "~/pages/NewsListPage/NewsListPage";
import { NewsItemPage } from "~/pages/NewsItemPage/NewsItemPage";

const routerSchema = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/news",
        element: <NewsListPage />,
      },
      {
        path: "/news/:id",
        element: <NewsItemPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
