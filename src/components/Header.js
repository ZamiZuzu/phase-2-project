import hamExplorer from '../images/ham-explorer.png';
import DatabaseDisplay from './DatabaseDisplay';

function Header({ databaseConnected }) {
    return (
        <header>
            <DatabaseDisplay databaseConnected={databaseConnected} />
            <img src={hamExplorer} alt="ham-explorer" style={{ maxWidth: "100%", height: "auto" }} />
        </header>
    )
}

export default Header
