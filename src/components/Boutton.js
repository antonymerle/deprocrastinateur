import Proptypes from "prop-types";

const Boutton = ({ couleur, texte, onClick }) => {
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

Boutton.propTypes = {
  couleur: Proptypes.string,
  texte: Proptypes.string,
  onclick: Proptypes.func,
};

export default Boutton;
