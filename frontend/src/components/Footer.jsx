import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer
            className="bg-cover bg-center text-white mt-auto relative"
            style={{ backgroundImage: 'url("/banner-bg.jpg")' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>


            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">


                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src="/green.jpg"
                                alt="Logo"
                                className="h-8 w-8 rounded-full"
                            />
                            <h3 className="text-lg font-semibold">Gestion Équipements</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 max-w-md">
                            Solution complète pour la gestion et le suivi de vos équipements professionnels.
                            Evaluez l'état de vos produits pour en définir leur avenir.
                        </p>

                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white text-gray-300">Accueil</Link></li>
                            <li><Link to="/dashboard" className="hover:text-white text-gray-300">Dashboard</Link></li>
                            <li><Link to="/equipment" className="hover:text-white text-gray-300">Équipements</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <p>ralipo2oo4@gmail.com</p>
                            <p>+33 7 83 84 61 86</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
