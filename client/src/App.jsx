import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Header from "./components/Header"
import Menu from "./components/Menu"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import PrivateRoute from "./components/PrivateRoute"

export default function App(){
    return (
      <BrowserRouter>
        <Header></Header>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>

            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

