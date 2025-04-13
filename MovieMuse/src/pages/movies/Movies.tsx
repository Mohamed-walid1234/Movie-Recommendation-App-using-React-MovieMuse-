import style from "./Movies.module.css"
function Movies() {
    // for the icon platform api
    const elements = [];
    for (let i = 0; i < 20; i++) {
        elements.push({ title: "Solo Leveling", image: "https://imgs.search.brave.com/kW_PsmCQ-57F6PIIH2Th2rWmoic7_5SDXQt-lurAO6I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbmV0ZmxpeC9z/bWFsbC9uZXRmbGl4/X1BORzUucG5n"});
    }
    // for the Moives api
        const shows = [];
        for (let i = 0; i < 20; i++) {
            shows.push({ title: "Solo Leveling", image: "https://images.justwatch.com/poster/321587622/s166/from.avif", tag: "Free" });
        }
    // --------
return (
<>
    <section className={`${style.bg_one}  text-white`} >
        <div className={`${style.bg_two} `+`${style.custom_container} container`} >
            <div>
                <h4 className="text-primary">Popular Movies and TV Shows – MovieMuse</h4>
                <p>We’re glad you’re here! With MovieMuse, you can easily find where to stream your favorite movies and TV series.</p>
                <p>pick your platform you watch on</p>
            </div>

            <div className="d-flex overflow-x-hidden ">
                {elements.map((elemente, i) => (
                    <div key={i} className=" ">
                            <button className="btn "><img style={{ width: "100px" }} src={elemente.image} className="card-img-top" alt={elemente.title}  /></button>
                    </div>
                    ))}
            </div>

            <div className="">
                <ul className="d-flex overflow-x-hidden" style={{ listStyleType: "none", padding: "0px"}}>
                    <li className=" me-4 mb-3 "><h5>All</h5></li>
                    <li className=" me-4 mb-3 "><h6>Movies</h6></li>
                    <li className=" me-4 mb-3 "><pre><h6>TV Shows</h6></pre></li>
                    <li className=" me-4 mb-3 "><h6>filters</h6></li>
                    <form action="">
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
                    <li className=" me-4 mb-3 ">Genres</li>
                    <li className=" me-4 mb-3 ">Rating</li>
                    <li className=" me-4 mb-3 ">Price</li>
                    <li className=" me-4 mb-3 "><pre>Age rating</pre></li>
                    <li className=" me-4 mb-3 "><pre>Release year</pre></li>
                </ul>
            </div>

            <div>
                <div className=" ">
                    <div className="row g-3">
                        {shows.map((show, i) => (
                        <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2">
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
            </div>
        </div>
    </section>
</>  
);
}

export default Movies;