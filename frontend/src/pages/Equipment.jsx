import { useState, useEffect } from 'react'
import axios from 'axios'

function Equipment() {
    const [equipements, setEquipements] = useState([])
    const [entreprises, setEntreprises] = useState([])
    const [etats, setEtats] = useState([])
    const [form, setForm] = useState({ nom: '', modele: '', entreprise_id: '', etat_id: '', prix_achat: '' })
    const [editing, setEditing] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('http://localhost:8000/equipements').then(r => setEquipements(r.data))
        axios.get('http://localhost:8000/entreprises').then(r => setEntreprises(r.data))
        axios.get('http://localhost:8000/etats').then(r => setEtats(r.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { ...form, entreprise_id: +form.entreprise_id, etat_id: +form.etat_id, prix_achat: +form.prix_achat }

        if (editing) {
            axios.put(`http://localhost:8000/equipements/${editing}`, data).then(() => {
                fetchData()
                setForm({ nom: '', modele: '', entreprise_id: '', etat_id: '', prix_achat: '' })
                setEditing(null)
            })
        } else {
            axios.post('http://localhost:8000/equipements', data).then(() => {
                fetchData()
                setForm({ nom: '', modele: '', entreprise_id: '', etat_id: '', prix_achat: '' })
            })
        }
    }

    const handleEdit = (eq) => {
        setForm({ nom: eq.nom, modele: eq.modele, entreprise_id: eq.entreprise_id, etat_id: eq.etat_id, prix_achat: eq.prix_achat })
        setEditing(eq.id)
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/equipements/${id}`).then(() => fetchData())
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Équipements</h1>

            <form onSubmit={handleSubmit} className="mb-4 space-y-2">
                <input
                    placeholder="Nom"
                    value={form.nom}
                    onChange={(e) => setForm({...form, nom: e.target.value})}
                    className="border p-2 mr-2"
                    required
                />
                <input
                    placeholder="Modèle"
                    value={form.modele}
                    onChange={(e) => setForm({...form, modele: e.target.value})}
                    className="border p-2 mr-2"
                    required
                />
                <select
                    value={form.entreprise_id}
                    onChange={(e) => setForm({...form, entreprise_id: e.target.value})}
                    className="border p-2 mr-2"
                    required
                >
                    <option value="">Entreprise</option>
                    {entreprises.map(e => <option key={e.id} value={e.id}>{e.nom}</option>)}
                </select>
                <select
                    value={form.etat_id}
                    onChange={(e) => setForm({...form, etat_id: e.target.value})}
                    className="border p-2 mr-2"
                    required
                >
                    <option value="">État</option>
                    {etats.map(e => <option key={e.id} value={e.id}>{e.nom}</option>)}
                </select>
                <input
                    type="number"
                    placeholder="Prix"
                    value={form.prix_achat}
                    onChange={(e) => setForm({...form, prix_achat: e.target.value})}
                    className="border p-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    {editing ? 'Modifier' : 'Ajouter'}
                </button>
                {editing && <button type="button" onClick={() => {setEditing(null); setForm({ nom: '', modele: '', entreprise_id: '', etat_id: '', prix_achat: '' })}} className="bg-gray-500 text-white p-2 ml-2">Annuler</button>}
            </form>

            <table className="w-full border">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border p-2">Nom</th>
                    <th className="border p-2">Modèle</th>
                    <th className="border p-2">Entreprise</th>
                    <th className="border p-2">État</th>
                    <th className="border p-2">Prix</th>
                    <th className="border p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {equipements.map(eq => (
                    <tr key={eq.id}>
                        <td className="border p-2">{eq.nom}</td>
                        <td className="border p-2">{eq.modele}</td>
                        <td className="border p-2">{eq.entreprise_nom}</td>
                        <td className="border p-2">{eq.etat_nom}</td>
                        <td className="border p-2">{eq.prix_achat}€</td>
                        <td className="border p-2">
                            <button onClick={() => handleEdit(eq)} className="bg-yellow-500 text-white p-1 mr-1">Editer</button>
                            <button onClick={() => handleDelete(eq.id)} className="bg-red-500 text-white p-1">Supprimer</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Equipment