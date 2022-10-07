import { FaTimes } from "react-icons/fa";

const Tache = ({ tache, onDelete, onToggle }) => {
  return (
    <div
      className={`tache ${tache.rappel ? "rappel" : ""}`}
      onDoubleClick={() => onToggle(tache.tache_id, tache.rappel)}
    >
      <h3>
        {tache.texte}{" "}
        <FaTimes
          style={{ color: "#EC0B43", cursor: "pointer" }}
          onClick={() => {
            onDelete(tache.tache_id);
            console.log(tache.id);
          }}
        />
      </h3>
      <p>{tache.echeance}</p>
    </div>
  );
};

export default Tache;
