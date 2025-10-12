import { createBrowserRouter } from "react-router";
import MusicPlayerPage from "../Pages/MusicPlayerPage";
import SearchPage from "../Pages/SearchPage";
import SignUpPage from "../Pages/SignUpPage";
import MusicPlayerPage from "../Pages/MusicPlayerPage";

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
  }
]);

export default router;