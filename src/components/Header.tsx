import Navigation from "./Navigation";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="images/IMG_2371.jpeg" alt="Matt headshot icon" />
                <h3>Matt Morgan</h3>
            </div>

            <Navigation />

        </header>
    )
}

export default Header;