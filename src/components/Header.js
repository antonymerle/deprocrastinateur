import PropTypes from "prop-types";
import Boutton from "./Boutton";

const Header = ({ titre, onClick, afficheFormState }) => {
  return (
    <header className="header">
      <h1>{titre}</h1>
      <Boutton
        couleur={afficheFormState ? "DarkSeaGreen" : "green"}
        texte={afficheFormState ? "masquer" : "ajouter"}
        onClick={onClick}
      />
    </header>
  );
};

Header.defaultProps = {
  titre: "Déprocrastinateur",
};

Header.propTypes = {
  titre: PropTypes.string,
  onClick: PropTypes.func,
};

export default Header;
