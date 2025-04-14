import Styles from "./Home.module.css";
import Background1 from '../../assets/images/Background.jpg';
import Background2 from '../../assets/images/Background 2.jpg';
import Background3 from '../../assets/images/Background 3.jpg';
import CartoonCharacter from '../../assets/images/Cartton charcter 2.png';

function Home() {
    return (
        <>
            {/* <!-- this is the slider section --> */}
            <section className="slider">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Background1} className={`d-block w-100 custom-height ${Styles['custom-height']}`} alt="blade-runner" />
                            <div className={`${Styles['carousel-caption-edits']} carousel-caption d-none d-md-block`}>
                                <h5>Only Watch the Best</h5>
                                <p>Forget the fluff. MovieMuse highlights the movies people truly enjoy—because great films deserve to be shared.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Background2} className={`d-block w-100 custom-height ${Styles['custom-height']}`} alt="Gym photo" />
                            <div className={`${Styles['carousel-caption-edits']} carousel-caption d-none d-md-block`}>
                                <h5>No More Scrolling</h5>
                                <p>Skip the endless searching. MovieMuse brings you top-rated films from the community, so you find a great watch in seconds.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Background3} className={`d-block w-100 custom-height ${Styles['custom-height']}`} alt="Gym photo" />
                            <div className={`${Styles['carousel-caption-edits']} carousel-caption d-none d-md-block`}>
                                <h5>Real Picks, Real People</h5>
                                <p>MovieMuse lets you discover movies recommended by fellow movie lovers. Honest suggestions from real users—just like you.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            {/* <!-- This is the about sectio --> */}
            <section id="about" className={`py-5 ${Styles['bg-dark-section']}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={CartoonCharacter} className={`${Styles['img-MovieMuse']}`} alt="MovieMuse Character" />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <p className={`${Styles['About-Header']} text-primary font`}>About MovieMuse</p>
                            <p className={`${Styles['About-Content']} text-light`}>
                                MovieMuse is your personal guide to the world of cinema. Whether you're in the mood for a hidden indie gem, a feel-good classic, or the latest blockbuster, MovieMuse curates thoughtful recommendations tailored to your taste.
                            </p>
                            <p className={`${Styles['About-Content']} text-light`}>
                                With smart algorithms and a touch of human curation, we go beyond generic lists to help you discover films that truly resonate. Create watchlists, track your favorites, and explore new genres—all in one beautifully simple app.
                            </p>
                            <a href="#classes" className={`btn btn-primary border-0 font mt-3 ${Styles['on-hover-btn']}`}>ٍSign up now </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;