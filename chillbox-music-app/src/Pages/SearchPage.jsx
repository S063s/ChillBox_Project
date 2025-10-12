import { useState , useEffect } from "react";
import axios from "axios";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        const response = await axios.get(`https://api.deezer.com/search?q=${query}`);
        setResults(response.data);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FaSearch />
      </div>
      <div>
        {results.map((result) => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
