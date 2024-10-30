import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router";

function App() {
  return (
    <div className="font-tiro">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
