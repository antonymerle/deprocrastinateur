import Header from "./components/Header";
import Taches from "./components/Taches";
import AjouteTache from "./components/AjouteTache";
import { useState } from "react";

function App() {
  const [taches, setTaches] = useState([
    {
      id: 1,
      texte: "Sortir les poubelles",
      echeance: "27 janvier 2023",
      rappel: true,
    },
    {
      id: 2,
      texte: "Tondre le jardin",
      echeance: "16 septembre 2023",
      rappel: true,
    },
    {
      id: 3,
      texte: "Ramasser les feuilles",
      echeance: "15 novembre 2023",
      rappel: false,
    },
  ]);

  const ajouteTache = (tache) => {
    const id = taches.length + 1;
    const newTache = {
      id,
      ...tache,
    };
    setTaches([...taches, newTache]);
  };

  const deleteTache = (id) => {
    setTaches(taches.filter((tache) => tache.id !== id));
  };

  const rappelTache = (id) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, rappel: !tache.rappel } : tache
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AjouteTache onAdd={ajouteTache} />
      {taches.length > 0 ? (
        <Taches taches={taches} onDelete={deleteTache} onToggle={rappelTache} />
      ) : (
        "Tu es à jour !"
      )}
    </div>
  );
}

export default App;
