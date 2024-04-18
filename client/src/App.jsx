import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Header from "./components/Header"
import Menu from "./components/Menu"
import SignUp from "./pages/SignUp"

export default function App(){
    return (
      <BrowserRouter>
        {/* <Header></Header>
    <Menu></Menu> */}
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

