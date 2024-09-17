
import React, { useState } from "react"

import CountriesList from "./CountriesList"
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import { useTheme } from "../Hooks/useTheme"


export default function Home() {
    const [query, setQuery] = useState('')

    // Custom Hook. ---- useTheme()
    const [isDark] = useTheme();


    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <div className="search-filter-container">
                <SearchBar setQuery={setQuery} />
                <SelectMenu setQuery={setQuery} />
            </div>
            <CountriesList query={query} />

        </main>
    )
}
