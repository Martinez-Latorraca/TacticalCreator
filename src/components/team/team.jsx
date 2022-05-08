import "./team.css";
import bench from "./img/bench.png";
import Player from "../players/player";
import { useEffect } from "react";

const Team = ({ squadSize }) => {
  const players = [...Array(squadSize).keys()];
  useEffect(() => {
    console.log("teamSize", squadSize);
    console.log("players", players);
  });

  return (
    <div className="teamBench" style={{ backgroundImage: `url(${bench})` }}>
      {players.map((player) => (
        <Player playerNumber={player + 1}></Player>
      ))}
    </div>
  );
};

export default Team;
