import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <>
            <NavLink to="/">About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </>
    )
}

export default Navigation;