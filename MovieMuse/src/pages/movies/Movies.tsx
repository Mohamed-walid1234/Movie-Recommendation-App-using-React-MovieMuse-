import style from "./Movies.module.css";

function Movies() {
    // platform icons (dummy data) api
    const platforms = Array.from({ length: 20 }, () => ({
        title: "Solo Leveling",
        image: "https://imgs.search.brave.com/kW_PsmCQ-57F6PIIH2Th2rWmoic7_5SDXQt-lurAO6I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbmV0ZmxpeC9z/bWFsbC9uZXRmbGl4/X1BORzUucG5n"
    }));

    // movie/show cards (dummy data) api
    const shows = Array.from({ length: 30 }, () => ({
        title: "Solo Leveling",
        image: "https://images.justwatch.com/poster/321587622/s166/from.avif",
        tag: "Free"
    }));

    return (
        <section className={`${style.bg_one} text-white`}>
            <div className={`${style.bg_two} ${style.custom_container} container`}>
                {/* Intro section */}
                <div>
                    <h4 className="text-primary">Popular Movies and TV Shows – MovieMuse</h4>
                    <p>We’re glad you’re here! With MovieMuse, you can easily find where to stream your favorite movies and TV series.</p>
                    <p>Pick your platform you watch on:</p>
                </div>

                {/* Platform Icons */}
                <div className="d-flex overflow-x-hidden">
                    {platforms.map((platform, index) => (
                        <div key={index}>
                            <button className="btn">
                                <img
                                    style={{ width: "100px" }}
                                    src={platform.image}
                                    alt={platform.title}
                                    className="card-img-top"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Filters and Search */}
                <div>
                    <ul className="d-flex overflow-x-hidden flex-wrap align-items-center" style={{ listStyleType: "none", padding: 0 }}>
                        {["All", "Movies", "TV Shows", "Filters", "Genres", "Rating", "Price", "Age rating", "Release year"].map((label, index) => (
                            <li key={index} className="me-4 mb-3">
                                <h6>{label}</h6>
                            </li>
                        ))}
                        <li className="mb-3">
                            <form>
                                <div className="input-group">
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

                {/* Movie/TV Show Cards */}
                <div className="row g-3">
                    {shows.map((show, index) => (
                        <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <div className="card bg-dark text-light h-100">
                                <img src={show.image} className="card-img-top" alt={show.title} />
                                <div className="card-body p-2">
                                    <h6 className="card-title">{show.title}</h6>
                                </div>
                                <div className="position-absolute top-0 end-0 bg-warning text-dark px-2 small rounded-bottom-start">
                                    {show.tag}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Movies;