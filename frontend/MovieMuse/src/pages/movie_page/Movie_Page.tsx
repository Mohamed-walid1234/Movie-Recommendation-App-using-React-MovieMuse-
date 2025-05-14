import Styles from "./Movie_Page.module.css";
import Movie_img from "../../assets/images/TheGodfather4K_poster.jpg";

function Movie_Page() {
    return (
        <>
            <div className="bg-secondary">
                <div className="bg-secondary text-light p-4">
                    {/* Title */}
                    <h1 className="text-center mb-4 font text-primary">
                        God Father (1972)
                    </h1>

                    <div className="d-flex flex-wrap justify-content-center align-items-start gap-4">
                        {/* Poster */}
                        <div>
                            <img
                                src={Movie_img}
                                alt="Godfather Poster"
                                className="border-primary border-4 rounded-3"
                                style={{ width: "250px", border: "solid" }}
                            />
                        </div>

                        {/* Info Card */}
                        <div
                            className="border border-primary rounded p-3 flex-grow-1"
                            style={{ minWidth: "600px" }}
                        >
                            <div className="d-flex justify-content-between text-center flex-nowrap">
                                {/* Story */}
                                <div className="flex-fill p-3 border-end border-primary">
                                    <h4 className="text-warning mb-3 font text-primary">Story</h4>
                                    <p>
                                        The Godfather follows the Corleone crime family as power passes
                                        from patriarch Vito to his son Michael, who transforms from
                                        reluctant outsider to ruthless leader. A masterpiece of loyalty,
                                        betrayal, and the cost of power, it’s a timeless exploration of
                                        family and ambition.
                                    </p>
                                </div>

                                {/* Rating */}
                                <div className="flex-fill border-end border-primary p-3">
                                    <h4 className="text-warning mb-3 font text-primary">Rating</h4>
                                    <div>
                                        <div style={{ fontSize: "60px", color: "#D86A15" }}>★</div>
                                        <div className="mt-2 fs-5">9.1 of 10</div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-fill p-3 text-start">
                                    <h4 className="text-warning mb-3 font text-primary">Details</h4>
                                    <ul className="list-unstyled">
                                        <li><span className="text-primary">Director:</span> Francis Ford Coppola</li>
                                        <li><span className="text-primary">Year:</span> 1972</li>
                                        <li><span className="text-primary">Genre:</span> Crime, Drama</li>
                                        <li>
                                            <span className="text-primary">Main actors:</span> Marlon Brando, Al Pacino,
                                            James Caan, Richard S. Castellano, Robert Duvall
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Watch Button */}
                    <div className="text-center mt-4">
                        <button className="btn btn-primary fw-bold px-5 py-2 font border-primary">
                            Watch Trailer
                        </button>
                    </div>
                </div>


                <section>
                    <div className={`${Styles["comment-section"]}`}>
                        <h2 className={`${Styles["comment-header"]}`}>Comments</h2>
                        <form className={`${Styles["comment-form"]}`}>
                            <textarea className={`${Styles["comment-input"]}`} placeholder="Write your comment here..." rows={4}></textarea>
                            <button type="submit" className={`btn btn-primary ${Styles['comment-submit']} ${Styles['submit']}`}>Add comment</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Movie_Page;