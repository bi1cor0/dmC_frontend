import { Link } from "react-router-dom";
//Added a navbar component to store links to different pages. 
export default function Nav (props) {
  return ( //Using the link hooks to link to new pages in conjunction with the Route and Router hooks from react-router-dom. 
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