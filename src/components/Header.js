import PropTypes from "prop-types";
import Boutton from "./Boutton";

const Header = ({ titre }) => {
  const onClick = () => {
    console.log("clic");
  };
  return (
    <header className="header">
      <h1>{titre}</h1>
      <Boutton couleur="green" texte="ajouter" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  titre: "Déprocrastinateur",
};

Header.propTypes = {
  titre: PropTypes.string,
};

export default Header;
