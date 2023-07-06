import { lazy } from "react";

const Layout = lazy(() => import("../../components/Layout"));
const AllP = lazy(() => import("../../pages/AllP"));
const Apple = lazy(() => import("../../pages/Apple"));
const Barcelona = lazy(() => import("../../pages/Barcelona"));

const ExpP = lazy(() => import("../../pages/ExpP"));
const Gaming = lazy(() => import("../../pages/Gaming"));
const HomeP = lazy(() => import("../../pages/HomeP"));
const Shorts = lazy(() => import("../../pages/Shorts"));
const SubsP = lazy(() => import("../../pages/SubsP"));
const Sports = lazy(() => import("../../pages/Sports"));
const Interface = lazy(() => import("../../pages/Interface"));
const Music = lazy(() => import("../../pages/Music"));
const Mixes = lazy(() => import("../../pages/Mixes"));
const Editing = lazy(() => import("../../pages/Editing"));

export const pages = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeP />,
      },
      {
        path: "explore",
        element: <ExpP />,
      },
      {
        path: "shorts",
        element: <Shorts />,
      },
      {
        path: "subscription",
        element: <SubsP />,
      },
      {
        path: "all",
        element: <AllP />,
      },
      {
        path: "gaming",
        element: <Gaming />,
      },
      {
        path: "barcelona",
        element: <Barcelona />,
      },
      {
        path: "apple",
        element: <Apple />,
      },
      {
        path: "sports",
        element: <Sports />,
      },
      {
        path: "interface",
        element: <Interface />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "mixes",
        element: <Mixes />,
      },
      {
        path: "editing",
        element: <Editing />,
      },
    ],
  },
];
