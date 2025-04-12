import style from "./Movies.module.css"
function Movies() {
    return (
    <>
        <div className={`${style.color} container`}>
            <p>Stream movies online</p>
            <p>
                Need help deciding what to watch before your popcorn runs out? We’ve
                got you covered! With this guide, you can find the best movies to 
                watch online across all languages, eras, and genres—all in one place. 
                From discovering where to watch films for free to keeping track of new 
                releases, our easy-to-use guide is your go-to hub for all things movies.
            </p>
            <div className="d-flex overflow-auto gap-3 py-3 px-2" >
                <img src="/logos/netflix.png" alt="Netflix" className="rounded" height="60" />
                <img src="/logos/prime.png" alt="Prime Video" className="rounded" height="60" />
                <img src="/logos/apple-tv.png" alt="Apple TV" className="rounded" height="60" />
                <img src="/logos/yt.png" alt="YouTube" className="rounded" height="60" />
            </div>
        </div>
    </>  
    );
}

export default Movies;