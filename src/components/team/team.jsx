import "./team.css";
import bench from "./img/bench2.png";
import Player from "../players/player";

const Team = ({ squadSize, colors }) => {
  const players = [...Array(squadSize).keys()];
  console.log("colors team", colors);

  return (
    <div className="teamBench" style={{ backgroundImage: `url(${bench})` }}>
      {players.map((player) => (
        <Player playerNumber={player + 1} colors={colors}></Player>
      ))}
    </div>
  );
};

export default Team;
