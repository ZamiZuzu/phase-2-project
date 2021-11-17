import hamExplorer from '../images/ham-explorer.png';

function Header() {
    return (
        <header>
            <img src={hamExplorer} alt="ham-explorer" style={{ maxWidth: "100%", height: "auto" }} />
        </header>
    )
}

export default Header
