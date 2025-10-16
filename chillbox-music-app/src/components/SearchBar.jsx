import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [results, setResults] = useState([]);
    const query = searchParams.get("q") || "";

    useEffect(() => {
        setSearchInput(query);
    }, [query]);

    useEffect(() => {
        const fetchResults = async () => {
            if (query) {
                try {
                    const response = await axios.get(`fetch('/api/deezer/search?q=${query}')`);
                    setResults(response.data.data || []);
                } catch (error) {
                    setResults([]);
                }
            } else {
                setResults([]);
            }
        };
        fetchResults();
    }, [query]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
    };

    const handleSearch = () => {
        if (searchInput) {
            setSearchParams({ q: searchInput });
        }
    };

    return (
        <div className="search-bar flex justify-center mb-4 bg-gray-200 p-2 rounded text-black ">
            <input
                type="text"
                value={searchInput}
                onChange={handleInputChange}
                placeholder="Search for songs, artists, albums..."
                className="w-3/4 p-2 rounded"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar; 