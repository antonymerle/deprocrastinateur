import { useState } from "react";

const AjouteTache = ({ onAdd }) => {
  const [texte, setTexte] = useState("");
  const [echeance, setEcheance] = useState("");
  const [rappel, setRappel] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!texte) {
      alert("Impossible d'ajouter une tâche vide.");
      return;
    }
    onAdd({ texte, echeance, rappel });

    setTexte("");
    setEcheance("");
    setRappel(false);
  };

  return (
    <form className="ajoute-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tâche</label>
        <input
          type="text"
          placeholder="Ajoute une tâche"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Echéance</label>
        <input
          type="text"
          placeholder="Ajoute une échéance"
          value={echeance}
          onChange={(e) => setEcheance(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Rappel</label>
        <input
          type="checkbox"
          checked={rappel}
          value={rappel}
          onChange={(e) => setRappel(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Enregistrer" className="btn btn-block" />
    </form>
  );
};

export default AjouteTache;
