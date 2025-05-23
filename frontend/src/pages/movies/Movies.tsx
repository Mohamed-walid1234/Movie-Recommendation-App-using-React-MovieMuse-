import style from "./Movies.module.css";
import  {  useEffect, useState  } from 'react';
import { useMovieStore } from "../../util/movies";
import { Link } from "react-router-dom";
function Movies() {

    const [visibleCount, setVisibleCount] = useState(30);
   
    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 30);
      };

    // fatch movies from the store
    const { movies, loading, error, fetchMovies } = useMovieStore();
    useEffect(() => {
      fetchMovies();
    }, [fetchMovies]);
  
    if (loading) return <p className="d-flex align-content-center justify-content-center fs-6 fw-bold" >Loading movies...</p>;
    if (error) return <p className="d-flex align-content-center justify-content-center"> Error: {error}</p>;
    
    // const text =  movies.map((movie) => movie.releaseDate.slice(0, 10));
    const visibleItems = movies.slice(0, visibleCount)
    console.log(visibleItems);
      
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
                    {visibleItems.map((movie, index) =>(
                        <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            
                            <div className="card bg-dark text-light h-100 border-0 shadow-sm position-relative rounded-4">
                                <Link to={`/main/${movie._id}`}>
                                <img
                                    src={movie.primaryImage}
                                    className="card-img-top rounded-top-4 "
                                    alt={movie.primaryTitle}
                                    style={{ minHeight: '300px', maxHeight: '300px' , objectFit: 'cover' }}

                                />
                                </Link>
                                <div className="card-body p-2">
                                    <h6 className="card-title small mb-0 text-center fw-semibold">
                                        {movie.primaryTitle}
                                    </h6>
                                </div>
                                <div className="position-absolute top-0 end-0 bg-warning text-dark px-2 small rounded-bottom-start">
                                    {movie.type}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="text-center">
                        <button  onClick={handleShowMore} className={`${style.btn_style} btn text-primary w-75`}>
                            more movies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Movies;
