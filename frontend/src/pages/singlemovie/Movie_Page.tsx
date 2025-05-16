import Styles from "./Movie_Page.module.css";
import { useEffect, useState } from "react";
import { useMovieStore } from "../../util/movies";
import { useParams } from "react-router-dom";

function Movie_Page() {     
    const [videoUrl, setVideoUrl] = useState("");
    const handleShowTrailer = async () => {
        const searchQuery = `${result?.primaryTitle} trailer`;
      
        try {
          const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
              searchQuery
            )}&key=AIzaSyAtIVg9J8w9ep_WyoQORckUnoyKg1ZEybs&type=video&maxResults=1`
          );
          const data = await res.json();
      
          if (data.items && data.items.length > 0) {
            const videoId = data.items[0].id.videoId;
            setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
          }
        } catch (err) {
          console.error("Failed to fetch YouTube trailer:", err);
        }
      };
    // Get the movie ID from the URL parameters
    const { id } = useParams();
    // Fetch the movie data using Zustand
    const { movies, loading, error, fetchMovies } = useMovieStore();

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);
    if (loading) return <p className="d-flex align-content-center justify-content-center fs-6 fw-bold" >Loading movie...</p>;
    if (error) return <p className="d-flex align-content-center justify-content-center"> Error: {error}</p>;
    //   store the movie data in a state variable
    const result = movies.find((item) => item._id === id);

    const date = result?.releaseDate.split("T")[0];
    const genre = result?.genres.join(", ");
    const countries = result?.countriesOfOrigin.join(", ");

return (
    <div className="bg-secondary text-light p-4">
    {/* Title */}
    <h1 className="text-center mb-4 font text-primary">
        {result?.primaryTitle}
    </h1>

    <div className=" align-content-center justify-content-center align-items-start gap-4 ">
        {/* Poster */}
        <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
        >
        {" "}
        <img
            src={result?.primaryImage}
            alt={`${result?.primaryTitle} Poster`}
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
            <p>{result?.description}</p>
            </div>

            {/* Rating */}
            <div className="flex-fill border-end border-primary p-3">
            <h4 className="text-warning mb-3 font text-primary">Rating</h4>
            <div>
                <div style={{ fontSize: "60px", color: "#D86A15" }}>★</div>
                <div className="mt-2 fs-5">{result?.averageRating}</div>
            </div>
            </div>

            {/* Details */}
            <div className="flex-fill p-3 text-start">
            <h4 className="text-warning mb-3 font text-primary">Details</h4>
            <ul className="list-unstyled">
                <li>
                <span className="text-primary">Language:</span>{" "}
                {result?.language}
                </li>
                <li>
                <span className="text-primary">Year:</span> {date}
                </li>
                <li>
                <span className="text-primary">Genre:</span> {genre}
                </li>
                <li>
                <span className="text-primary">Countries:</span> {countries}
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>

    {/* Watch Button */}
    <div className="text-center mt-4">
        <button
        onClick={handleShowTrailer}
        className={`btn btn-primary fw-bold px-5 py-2 font border-primary ${Styles["on-hover-color"]}`}
        >
        Watch Trailer
        </button>
    </div>
    {/* video */}
    {videoUrl && (
  <div className="mt-4 text-center">
    <iframe
      width="900"
      height="600"
      src={videoUrl}
      title="YouTube trailer"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)}
    
    {/* Comments Section */}
    <section>
        <div className={Styles["comment-section"]}>
        <h2 className={Styles["comment-header"]}>Comments</h2>
        <form className={Styles["comment-form"]}>
            <textarea
            className={Styles["comment-input"]}
            placeholder="Write your comment here..."
            rows={4}
            ></textarea>
            <button
            type="submit"
            className={`btn btn-primary ${Styles["comment-submit"]} ${Styles["submit"]} ${Styles["on-hover-color"]}`}
            >
            Add comment
            </button>
        </form>
        </div>
    </section>
    

</div>
);
}

export default Movie_Page;
