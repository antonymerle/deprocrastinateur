import Header from "./components/Header";
import Taches from "./components/Taches";
import { useState } from "react";

function App() {
  const [taches, setTaches] = useState([
    {
      id: 1,
      texte: "Sortir les poubelles",
      date: "27 janvier 2023",
      rappel: true,
    },
    {
      id: 2,
      texte: "Tondre le jardin",
      date: "16 septembre 2023",
      rappel: true,
    },
    {
      id: 3,
      texte: "Ramasser les feuilles",
      date: "15 novembre 2023",
      rappel: false,
    },
  ]);

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
      {taches.length > 0 ? (
        <Taches taches={taches} onDelete={deleteTache} onToggle={rappelTache} />
      ) : (
        "Tu es à jour !"
      )}
    </div>
  );
}

export default App;
