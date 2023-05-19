/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"

const FramerMotion = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}
export default FramerMotion