// Import components
import App from "./App";               // 👈 Parent component
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

// Define nested routes
const routes = [
  {
    // Parent route
    path: "/",                      // The base path
    element: <App />,               // App will render on every page
    errorElement: <ErrorPage />,    // Handles any route errors
    children: [                     // 👇 Nested routes go here
      {
        path: "/",                  // Default child (home page)
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/profile/:id",       // Dynamic route for user profiles
        element: <UserProfile />
      }
    ]
  }
];

export default routes;
