import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import useAuthCheck from "./hooks/useAuthCheck";
import { routes } from "./routes/router";

function App() {
  const isChecking = useAuthCheck();
  return !isChecking ? (
    <div>Loading...</div>
  ) : (
    <div className="font-poppins">
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
