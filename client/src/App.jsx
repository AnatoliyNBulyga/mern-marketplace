import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SignInPage from "./pages/SignIn.jsx";
import SignOutPage from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignOutPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;