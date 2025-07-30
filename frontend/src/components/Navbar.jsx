import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-green-200 shadow-2xl p-4">
            <div className="max-w-7xl mx-auto flex justify-between">
                <Link to="/" className="text-xl font-bold">
                    Gestions des États des Produits
                </Link>
                <div>
                    <Link to="/" className="mr-4">Accueil</Link>
                    <Link to="/dashboard" className="mr-4">Dashboard</Link>
                    <Link to="/equipment">Équipements</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
