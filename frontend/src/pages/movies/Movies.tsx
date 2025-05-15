import style from "./Movies.module.css";
import  { useEffect } from 'react';
import { useMovieStore } from "../../util/movies";
function Movies() {

    const { movies, loading, error, fetchMovies } = useMovieStore();

    useEffect(() => {
      fetchMovies();
    }, [fetchMovies]);
  
    if (loading) return <p>Loading movies...</p>;
    if (error) return <p>Error: {error}</p>;
        
    const text = movies.map((movie) => movie.releaseDate.slice(0, 10));
    console.log(text);


    // Sample platform icons (dummy data)
    const platforms = Array.from({ length: 40 }, () => ({
        title: "Solo Leveling",
        image:
            "https://imgs.search.brave.com/kW_PsmCQ-57F6PIIH2Th2rWmoic7_5SDXQt-lurAO6I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbmV0ZmxpeC9z/bWFsbC9uZXRmbGl4/X1BORzUucG5n"
    }));

    return (
        <section className={`${style.bg_one} text-white py-5`}>
            <div className={`${style.bg_two} overflow-x-hidden container`}>
                {/* Intro */}
                <div>
                    <h4 className={`font text-primary fw-bold`}>
                        Popular Movies and TV Shows – MovieMuse
                    </h4>
                    <p className="mb-1">
                        We’re glad you’re here! With MovieMuse, you can easily find where to stream your favorite movies and TV series.
                    </p>
                    <p className="mb-4">Pick your platform you watch on:</p>
                </div>

                {/* Platforms */}
                <div className="d-flex overflow-x-hidden overflow-y-hidden gap-2 mb-4">
                    {platforms.map((platform, index) => (
                        <div key={index} className="rounded border">
                            <button className="btn p-0 border-0 bg-transparent">
                                <img
                                    src={platform.image}
                                    alt={platform.title}
                                    className={`${style.img_style}`}
                                />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Filters and Search */}
                <div>
                    <ul className="d-flex overflow-auto flex-wrap align-items-center gap-3 list-unstyled mb-4">
                        {["All", "Movies", "TV Shows", "Filters", "Genres", "Rating", "Price", "Age rating", "Release year"].map((label, index) => (
                            <li key={index}>
                                <button className="btn border-0 btn-sm rounded-pill px-3 text-white">
                                    {label}
                                </button>
                            </li>
                        ))}
                        <li>
                            <form className="d-flex">
                                <div className="input-group input-group-sm">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for movies"
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-primary" type="button">
                                        🔍
                                    </button>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>

                {/* Cards */}
                <div className="row g-4">
                    {movies.map((movie, index) =>(
                        
                        <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            
                            <div className="card bg-dark text-light h-100 border-0 shadow-sm position-relative rounded-4">
                                <img
                                    src={movie.primaryImage}
                                    className="card-img-top rounded-top-4"
                                    alt={movie.primaryTitle}
                                />
                                <div className="card-body p-2">
                                    <h6 className="card-title small mb-0 text-center fw-semibold">
                                        {movie.primaryTitle}
                                    </h6>
                                </div>
                                <div className="position-absolute top-0 end-0 bg-warning text-dark px-2 small rounded-bottom-start">
                                    {text[index]}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-center">
                        <button className={`${style.btn_style} btn text-primary w-75`}>
                            more movies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Movies;
