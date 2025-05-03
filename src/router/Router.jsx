import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import TodoPage from "../pages/TodoPage";
import User from "../pages/User";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // App is your layout component that should contain <Outlet />
    children: [
      {
        index: true,  // This is the default route, renders the Home page
        element: <Home />
      },
      {
        path: 'todo',
        element: <TodoPage/>  // Corrected name
      },
      {
        path: 'user',
        element: <User />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router;
