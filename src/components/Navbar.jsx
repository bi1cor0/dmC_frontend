import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <Link to="/add">
        <button className="navBtn">ADD NEW CHARACTER</button>
      </Link>
      <Link to="/update">
        <button className="navBtn">UPDATE CHARACTERS</button>
      </Link>
      <Link to="/delete">
        <button className="navBtn">DELETE CHARACTERS</button>
      </Link>
      <Link to="/battlestart">
        <button className="battleStart">START BATTLE</button>
      </Link>
    </div>
  );
}