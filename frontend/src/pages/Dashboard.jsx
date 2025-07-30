function Dashboard() {
    return (
        <div className="p-8 ">
            <h1 className="text-3xl font-bold mb-6">Tableau de Bord</h1>

            <div className="bg-white shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4">Produits</div>
                    <div className="p-4">Les actions</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
