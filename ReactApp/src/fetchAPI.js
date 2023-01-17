const API = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2RmYTI0OTIyNGVjNGU0YjdlMjEyY2UzYjA3YWM4ZiIsInN1YiI6IjYzYzFlOGFjMDVhNTMzMDBjMTEwOTU3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8uSYLapyFHnQtQfz5ihbQNJjfF9M97p3DroI1ZOsWqc"

export async function getMovies(path) {
    const result = await fetch(API + path, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return await result.json();
}

export async function getMoviesGenre(genre_id) {
    const result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    return await result.json();
}