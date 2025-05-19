import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface Movie {
    id: number
    name: string
    summary: string
    image?: { medium: string }
}

const LOCAL_STORAGE_KEY = 'movie-favorites'

const SearchSection = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Movie[]>([])
    const [favorites, setFavorites] = useState<Movie[]>([])

    // Load favorites from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (stored) setFavorites(JSON.parse(stored))
    }, [])

    // Save favorites to localStorage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
    }, [favorites])

    // Load random shows on mount
    useEffect(() => {
        fetchRandomShows()
    }, [])

    const fetchRandomShows = async () => {
        const randomPage = Math.floor(Math.random() * 100) + 1
        const res = await fetch(`https://api.tvmaze.com/shows?page=${randomPage}`)
        const data = await res.json()
        setResults(data.slice(0, 9)) // Limit to 9 cards
    }

    const handleSearch = async () => {
        if (!query.trim()) return
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        const data = await res.json()
        setResults(data.map((d: any) => d.show))
    }

    const addToFavorites = (movie: Movie) => {
        if (!favorites.find(f => f.id === movie.id)) {
            setFavorites([...favorites, movie])
        }
    }

    const removeFromFavorites = (id: number) => {
        setFavorites(favorites.filter(m => m.id !== id))
    }

    const removeFromResults = (id: number) => {
        setResults(results.filter(m => m.id !== id))
    }

    return (
        <section className="bg-[#1c1c1c] text-white px-6 py-12">
            {/* Heading + Search */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b border-white pb-4 mb-10">
                <h3 className="text-xl font-semibold tracking-wide mb-4 sm:mb-0">
                    Collect your favourites
                </h3>
                <div className="relative w-full sm:w-auto sm:max-w-sm">
                    <FiSearch className="absolute left-3 top-2.5 text-white text-lg" />
                    <input
                        className="w-full bg-transparent border border-white text-white pl-10 pr-4 py-2 rounded focus:outline-none"
                        placeholder="Search title and add to grid"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Favorites Grid */}
            {favorites.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    {favorites.map(movie => (
                        <div key={movie.id} className="bg-[#2a2a2a] rounded overflow-hidden shadow relative">
                            <button
                                onClick={() => removeFromFavorites(movie.id)}
                                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-6 h-6 text-sm flex items-center justify-center z-10"
                            >
                                ×
                            </button>
                            {movie.image?.medium && (
                                <img
                                    src={movie.image.medium}
                                    alt={movie.name}
                                    className="w-full h-64 object-cover"
                                />
                            )}
                            <div className="p-4">
                                <h4 className="font-bold mb-2">{movie.name}</h4>
                                <p className="text-sm text-gray-300">
                                    {movie.summary?.replace(/<[^>]+>/g, '').slice(0, 120) || 'No description'}...
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Search Results Grid */}
            {results.length > 0 && (
                <>
                    <h4 className="text-md font-medium mb-4">Search Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {results.map(movie => (
                            <div key={movie.id} className="bg-[#2a2a2a] rounded overflow-hidden shadow relative">
                                <button
                                    onClick={() => removeFromResults(movie.id)}
                                    className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-6 h-6 text-sm flex items-center justify-center z-10"
                                >
                                    ×
                                </button>
                                {movie.image?.medium && (
                                    <img
                                        src={movie.image.medium}
                                        alt={movie.name}
                                        className="w-full h-64 object-cover"
                                    />
                                )}
                                <div className="p-4">
                                    <h4 className="font-bold mb-2">{movie.name}</h4>
                                    <p className="text-sm text-gray-300 mb-2">
                                        {movie.summary?.replace(/<[^>]+>/g, '').slice(0, 120) || 'No description'}...
                                    </p>
                                    <button
                                        onClick={() => addToFavorites(movie)}
                                        className="bg-white text-black font-medium px-4 py-1 rounded"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    )
}

export default SearchSection
