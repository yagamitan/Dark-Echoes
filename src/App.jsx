import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

function EpisodeList({ episodes, selectedEpisode, onSelect }) {
  return (
    <ul className="episode-list">
      {episodes.map((episode) => (
        <li
          key={episode.id}
          className={`episode-item ${
            selectedEpisode?.id === episode.id ? "selected" : ""
          }`}
          onClick={() => onSelect(episode)}
        >
          {episode.title}
        </li>
      ))}
    </ul>
  );
}

function EpisodeDetails({ episode }) {
  if (!episode) {
    return (
      <p className="placeholder">
        Select an episode to see its details.
      </p>
    );
  }

  return (
    <div className="episode-details">
      <h2>
        Episode {episode.id}: {episode.title}
      </h2>
      <p>{episode.description}</p>
      <button type="button">Watch now</button>
    </div>
  );
}

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <main className="app">
      <h1>Dark Echoes Episodes</h1>

      <EpisodeList
        episodes={episodes}
        selectedEpisode={selectedEpisode}
        onSelect={setSelectedEpisode}
      />

      <EpisodeDetails episode={selectedEpisode} />
    </main>
  );
}
