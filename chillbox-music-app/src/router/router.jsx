import { createBrowserRouter , RouterProvider} from "react-router";
import MusicPlayerPage from "../Pages/MusicPlayerPage";
import SearchPage from "../Pages/SearchPage";
import SignUpPage from "../Pages/SignUpPage";
import NotFoundPage from "../Pages/NotFoundPage";


const router = createBrowserRouter([
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
    path: "*",
    element: <NotFoundPage />,
  }
]);

export default router;