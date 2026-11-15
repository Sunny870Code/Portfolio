import Navbar from "./components/Navbar";
import App from "./App";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsBento from "./components/skillBento";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter({
    path:"/",
    element:(<>
        <Navbar />
        <Hero />
        <Projects />
        <SkillsBento />
    </>)
})