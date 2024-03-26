import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./About/About.jsx"
import Contact from "./Contact/Contact.jsx"
import CookieClicker from "./CookieClicker/CookieClicker.jsx"
import Home from "./Home/Home.jsx"
import Shop from "./Shop/Shop.jsx"


export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/cookieclicker" element={<CookieClicker/>} />
                    <Route path="/shop" element={<Shop/>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}