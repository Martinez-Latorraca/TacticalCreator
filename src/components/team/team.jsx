import "./team.css";
import bench from "./img/bench.png";
import Player from "../players/player";

const Team = ({ teamSize }) => {
  const players = [teamSize];

  return (
    <div className="teamBench" style={{ backgroundImage: `url(${bench})` }}>
      {players.map((player) => (
        <Player></Player>
      ))}
    </div>
  );
};

export default Team;
