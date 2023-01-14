import './ItemDetail.css';

export const ItemDetail = ({ movie }) => {
  const imageUrl = "http://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
      <>
          <img src={imageUrl} alt={movie.title} className="col movieImage"/>
          <div className="col movieDetails">
            <h3 className="fistItem">{movie.title}</h3>
            <p>{movie.overview}</p>
            <p><strong>Genres</strong>: {movie.genres?.map(genre => genre.name).join(", ")}</p>
          </div>
      </>
    )
}