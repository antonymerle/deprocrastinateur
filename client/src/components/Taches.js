import Tache from "./Tache";
const Taches = ({ taches, onDelete, onToggle }) => {
  return (
    <>
      {taches.map((tache) => (
        <Tache
          key={tache.id}
          tache={tache}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Taches;
