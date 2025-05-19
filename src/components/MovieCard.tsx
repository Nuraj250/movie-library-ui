interface Movie {
  id: number
  name: string
  summary: string
  image?: { medium: string }
}

interface Props {
  movie: Movie
  onAdd?: () => void
  onRemove?: () => void
}

const MovieCard = ({ movie, onAdd, onRemove }: Props) => {
  return (
    <div className="border p-4 rounded shadow relative">
      {movie.image?.medium && (
        <img
          src={movie.image.medium}
          alt={movie.name}
          className="mb-3 w-full h-48 object-cover"
        />
      )}
      <h4 className="font-bold text-lg mb-2">{movie.name}</h4>
      <p className="text-sm mb-4">
        {movie.summary?.replace(/<[^>]+>/g, '').slice(0, 120) || 'No description'}...
      </p>
      {onAdd && (
        <button
          onClick={onAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
        >
          Add
        </button>
      )}
      {onRemove && (
        <button
          onClick={onRemove}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      )}
    </div>
  )
}

export default MovieCard
