import { Outlet, createBrowserRouter, ScrollRestoration } from "react-router-dom";
import {
  Navbar,
  Footer,
  ActusView,
  Page404,
  RecrutementView,
  MentionsLegales,
  PolitiqueDeConfidentialite,
  ExternalRedirect,
  Presentation,
} from "@/components";
import Homepage from "@/pages/homepage/Homepage";
import Contact from "@/pages/contact/ContactPage";
import Recrutement from "@/pages/recrutement/RecrutementPage";
import Actualites from "@/pages/actualites/ActualitesPage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/a-propos",
        element: <Presentation />,
      },
      {
        path: "/occasions",
        element: (
          <ExternalRedirect to="https://www.agriaffaires.com/pros/list/140535-0/1/motin-normagri.html" />
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/recrutement",
        element: <Recrutement />,
      },
      {
        path: "/actualites",
        element: <Actualites />,
      },
      {
        path: "/actualites/:id",
        element: <ActusView />,
      },
      {
        path: "recrutement/:id",
        element: <RecrutementView />,
      },
      {
        path: "mentions-legales",
        element: <MentionsLegales />,
      },
      {
        path: "politique-de-confidentialite",
        element: <PolitiqueDeConfidentialite />,
      },
      { path: "/:id(\\d{4,7}-.*)", element: <ExternalRedirect to="https://www.agriaffaires.pro/fr/motin/:id" /> },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);
