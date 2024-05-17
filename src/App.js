import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HOME from "./components/home/Home";
import Services from "./components/home/services/Services";
import Map from "./components/map/Map";
import Dashboard from "./components/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  const imie = "world";

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Services />
    </div>
  );
}

export default App;
