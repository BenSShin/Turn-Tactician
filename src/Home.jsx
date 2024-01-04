import start from "./assets/start.svg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcome to Turn Tactician</h1>
      <p>This is an application to help keep track of Initiatives and Health</p>
      <Link to="/battle">
        <button id="startButton">
          <div id="start">
            <h1>Join the Battle</h1>
            <img id="start-img" src={start} alt="Start Button" />
          </div>
        </button>
      </Link>
    </div>
  );
}
