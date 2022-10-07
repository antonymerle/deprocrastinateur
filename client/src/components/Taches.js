import Tache from "./Tache";
const Taches = ({ taches, onDelete, onToggle }) => {
  return (
    <>
      {taches.map((tache) => (
        <Tache
          key={tache.tache_id}
          tache={tache}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Taches;
