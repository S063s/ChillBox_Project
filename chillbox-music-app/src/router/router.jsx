import { createBrowserRouter , RouterProvider} from "react-router";
import MusicPlayerPage from "../Pages/MusicPlayerPage";
import SearchPage from "../Pages/SearchPage";
import SignUpPage from "../Pages/SignUpPage";
import NotFoundPage from "../Pages/NotFoundPage";
import Home from "../Pages/HomePage.jsx";
import LibraryPage from "../Pages/LibraryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/music-player",
    element: <MusicPlayerPage />,
  },
  {
    path: "/library",
    element: <LibraryPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }


]);

export default router;