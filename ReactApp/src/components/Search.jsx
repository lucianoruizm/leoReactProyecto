import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery({search: searchText})
    }

    return (
        <form className="searchContainer" onSubmit={handleSubmit}>
            <div className="searchBox">
                    <input className="searchInput" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Buscar..."/>
                    <button className="searchButton" type="submit">
                        <FaSearch className="search-icon" size={20} />
                    </button>
            </div>
        </form>
    )
}