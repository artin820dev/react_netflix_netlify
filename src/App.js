import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="account" element={<Account />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
