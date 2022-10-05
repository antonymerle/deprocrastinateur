import { FaTimes } from "react-icons/fa";

const Tache = ({ tache, onDelete, onToggle }) => {
  return (
    <div
      className={`tache ${tache.rappel ? "rappel" : ""}`}
      onDoubleClick={() => onToggle(tache.id)}
    >
      <h3>
        {tache.texte}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(tache.id)}
        />
      </h3>
      <p>{tache.echeance}</p>
    </div>
  );
};

export default Tache;
