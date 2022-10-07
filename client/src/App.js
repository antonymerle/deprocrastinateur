import Header from "./components/Header";
import Taches from "./components/Taches";
import AjouteTache from "./components/AjouteTache";
import { useEffect, useState } from "react";

function App() {
  const [afficheForm, setAfficheForm] = useState(false);
  const [taches, setTaches] = useState([]);

  const baseURL = "http://localhost:5000/";

  useEffect(() => {
    const fetchTaches = async () => {
      fetch(baseURL)
        .then((res) => res.json())
        .then((data) => setTaches(data));
    };
    fetchTaches();
  }, [taches]);

  const onAfficheForm = () => {
    setAfficheForm(!afficheForm);
  };

  const ajouteTache = (tache) => {
    const postRequest = new Request(baseURL, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(tache),
    });

    console.log(postRequest);

    fetch(postRequest)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const deleteTache = (tache_id) => {
    const deleteRequest = new Request(baseURL, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ tache_id }),
    });

    fetch(deleteRequest)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const rappelTache = (tache_id, rappel) => {
    const putRequest = new Request(baseURL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tache_id, rappel: !rappel }),
    });

    fetch(putRequest)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="container">
      <Header onClick={onAfficheForm} afficheFormState={afficheForm} />
      {afficheForm ? <AjouteTache onAdd={ajouteTache} /> : null}
      {taches.length > 0 ? (
        <Taches taches={taches} onDelete={deleteTache} onToggle={rappelTache} />
      ) : (
        "Tu es à jour !"
      )}
    </div>
  );
}

export default App;
