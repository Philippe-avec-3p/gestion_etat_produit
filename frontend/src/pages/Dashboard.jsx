import { useState, useEffect } from 'react'
import axios from 'axios'

function Dashboard() {
    const [stats, setStats] = useState({ total_equipements: 0, par_etat: [] })

    useEffect(() => {
        axios.get('http://localhost:8000/stats')
            .then(response => setStats(response.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Tableau de Bord</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-800">Total Équipements</h3>
                    <p className="text-2xl font-bold text-blue-600">{stats.total_equipements}</p>
                </div>

                {stats.par_etat.map((etat) => (
                    <div key={etat.nom} className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-gray-800 capitalize">{etat.nom}</h3>
                        <p className="text-2xl font-bold text-green-600">{etat.count}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard