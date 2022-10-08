import Header from "./components/Header";
import Taches from "./components/Taches";
import AjouteTache from "./components/AjouteTache";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const baseURL = "http://localhost:5000/";

  const [afficheForm, setAfficheForm] = useState(false);
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    const fetchTaches = async () => {
      fetch(baseURL)
        .then((res) => res.json())
        .then((data) => setTaches(data));
    };

    fetchTaches();
  }, []);

  const onAfficheForm = () => {
    setAfficheForm(!afficheForm);
  };

  const ajouteTache = async (tache) => {
    const postRequest = new Request(baseURL, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(tache),
    });

    console.log(postRequest);
    const response = await fetch(postRequest);
    if (response.status === 200) {
      const data = await response.json();
      setTaches([...taches, { ...tache, tache_id: data.tache_id }]);
    }
  };

  const deleteTache = async (tache_id) => {
    const deleteRequest = new Request(baseURL, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ tache_id }),
    });

    const response = await fetch(deleteRequest);
    // On vérifie le statut HTTP avant de modifier l'état.
    if (response.status === 200) {
      setTaches(taches.filter((tache) => tache.tache_id !== tache_id));
    }
  };

  const rappelTache = async (tache_id, rappel) => {
    const putRequest = new Request(baseURL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tache_id, rappel: !rappel }),
    });

    const response = await fetch(putRequest);
    // On vérifie le statut HTTP avant de modifier l'état.
    if (response.status === 200) {
      setTaches(
        taches.map((tache) =>
          tache.tache_id === tache_id ? { ...tache, rappel: !rappel } : tache
        )
      );
    }
  };

  return (
    <div className="container">
      <Header onClick={onAfficheForm} afficheFormState={afficheForm} />

      {afficheForm ? <AjouteTache onAdd={ajouteTache} /> : null}
      {taches.length > 0 ? (
        <Taches taches={taches} onDelete={deleteTache} onToggle={rappelTache} />
      ) : (
        "Il reste forcément quelque chose à faire."
      )}

      <Link to="/apropos">A propos</Link>
      <Outlet />
    </div>
  );
}

export default App;
