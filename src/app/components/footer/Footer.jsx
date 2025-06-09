import { Contact, Copy, Logo, Navigation, Social } from "./components"

const Footer = () => {
    return (
        <footer className="footer">
            <Logo />
            <Navigation />
            <Social />
            <Contact />
            <Copy />
        </footer>
    )
}

export default Footer