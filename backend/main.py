from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from psycopg2.extras import RealDictCursor
from pydantic import BaseModel

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    return psycopg2.connect(
        host="localhost",
        database="gestion_produit",
        user="postgres",
        password="toor",
        cursor_factory=RealDictCursor
    )

class Equipement(BaseModel):
    nom: str
    modele: str
    entreprise_id: int
    etat_id: int
    prix_achat: float = None



@app.get("/equipements")
def get_equipements():
    conn = get_db()
    cur = conn.cursor()
    cur.execute("""
        SELECT e.id, e.nom, e.modele, e.prix_achat, e.entreprise_id, e.etat_id,
               en.nom as entreprise_nom, et.nom as etat_nom
        FROM equipements e
        JOIN entreprises en ON e.entreprise_id = en.id
        JOIN etats et ON e.etat_id = et.id
    """)
    result = cur.fetchall()
    conn.close()
    return result



@app.get("/entreprises")
def get_entreprises():
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT * FROM entreprises")
    result = cur.fetchall()
    conn.close()
    return result

@app.get("/etats")
def get_etats():
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT * FROM etats")
    result = cur.fetchall()
    conn.close()
    return result



@app.post("/equipements")
def create_equipement(eq: Equipement):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO equipements (nom, modele, entreprise_id, etat_id, prix_achat)
        VALUES (%s, %s, %s, %s, %s)
    """, (eq.nom, eq.modele, eq.entreprise_id, eq.etat_id, eq.prix_achat))
    conn.commit()
    conn.close()
    return {"message": "Créé"}



@app.put("/equipements/{id}")
def update_equipement(id: int, eq: Equipement):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("""
        UPDATE equipements
        SET nom=%s, modele=%s, entreprise_id=%s, etat_id=%s, prix_achat=%s
        WHERE id=%s
    """, (eq.nom, eq.modele, eq.entreprise_id, eq.etat_id, eq.prix_achat, id))
    conn.commit()
    conn.close()
    return {"message": "Modifié"}



@app.delete("/equipements/{id}")
def delete_equipement(id: int):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("DELETE FROM equipements WHERE id=%s", (id,))
    conn.commit()
    conn.close()
    return {"message": "Supprimé"}