import { useState , useEffect } from "react";
import React from "react";
import axios from "axios";
import TrackCard from "../components/TrackCard.jsx";
import { usePlayer } from '../context/PlayerContext';
import SearchBar from '../components/SearchBar.jsx';
import { Link } from "react-router-dom";


const API_URL = "https://api.deezer.com/search";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { loadAndPlayTrack } = usePlayer();

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL, {
        params: { q: searchQuery },
      });
      setResults(response.data.data);
    } catch (error) {
      setError("Error fetching search results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((track) => (
          <TrackCard key={track.id} track={track} onPlay={() => loadAndPlayTrack(track.id)} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
