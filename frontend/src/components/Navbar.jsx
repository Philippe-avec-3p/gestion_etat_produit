import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-custom-green shadow-lg p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo + Titre */}
                <div className="flex items-center space-x-3">
                    <img
                        src="../../public/green.jpg"
                        alt="Logo"
                        className="h-10 w-10 rounded-full shadow-md"
                    />
                    <Link to="/" className="text-2xl font-extrabold text-white hover:text-green-100 transition">
                        Gestion des États des Produits
                    </Link>
                </div>

                {/* Liens */}
                <div className="flex space-x-6">
                    <Link to="/" className="text-white font-medium hover:text-green-100 transition">Accueil</Link>
                    <Link to="/dashboard" className="text-white font-medium hover:text-green-100 transition">Dashboard</Link>
                    <Link to="/equipment" className="text-white font-medium hover:text-green-100 transition">Équipements</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
