import Tache from "./Tache";
const Taches = ({ taches, onDelete, onToggle }) => {
  return (
    <>
      {taches
        .sort((tache1, tache2) => tache1.tache_id - tache2.tache_id)
        .map((tache) => (
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
