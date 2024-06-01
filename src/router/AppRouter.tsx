import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { MainPage } from "../pages/MainPage/MainPage";
import { Page404 } from "~/pages/Page404/Page404";
import { NewsList } from "~/pages/NewsList/NewsList";

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
        element: <NewsList />,
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
