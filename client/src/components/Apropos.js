import { Link } from "react-router-dom";

const Apropos = () => {
  return (
    <div className="apropos">
      <h3>Déprocrasinateur (aka "Get Sh*t Done")</h3>
      <h4>Auteur : Antony Merle</h4>
      <p>Version 1.0</p>
      <Link to="/">Retour</Link>
    </div>
  );
};

export default Apropos;
