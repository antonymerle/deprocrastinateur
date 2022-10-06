import Proptypes from "prop-types";

const Bouton = ({ couleur, texte, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: couleur }}
      className={"btn"}
    >
      {texte}
    </button>
  );
};

Bouton.propTypes = {
  couleur: Proptypes.string,
  texte: Proptypes.string,
  onclick: Proptypes.func,
};

export default Bouton;
