import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <Link to="/add">
        <button>ADD NEW CHARACTER</button>
      </Link>
      <Link to="/update">
        <button>UPDATE CHARACTERS</button>
      </Link>
      <Link to="/delete">
        <button>DELETE CHARACTERS</button>
      </Link>
    </div>
  );
}