import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard, Callback } from "./pages";



const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/callback", element: <Callback /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App