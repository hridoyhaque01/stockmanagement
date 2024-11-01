import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { routes } from "./routes/router";

function App() {
  return (
    <div className="">
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
