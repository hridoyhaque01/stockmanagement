import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router";

function App() {
  const router = routes;
  return (
    <div className="font-tiro">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
