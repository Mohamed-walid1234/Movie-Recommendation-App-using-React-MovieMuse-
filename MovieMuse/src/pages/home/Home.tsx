import Styles from "./Home.module.css";
import Background1 from '../../assets/images/Background.jpg';
import Background2 from '../../assets/images/Background 2.jpg';
import Background3 from '../../assets/images/Background 3.jpg';
import CartoonCharacter from '../../assets/images/Cartton charcter 2.png';
import testimonials_pic1 from '../../assets/images/Mohamed Walid.jpg';
import testimonials_pic2 from '../../assets/images/Ahmed khaled.jpg';
import testimonials_pic3 from '../../assets/images/Peter.jpg';

function Home() {
    return (
        <>
            <div className={`${Styles['bg-dark-section']}`}>
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
                    <div className="px-5">
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center">
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
                {/* <!-- this is the features section --> */}
                <section>
                    <p className={`${Styles['FeaturesHeader']} text-center text-primary font`}>Everything You Need for Movie Night</p>
                    <div className={`${Styles['wrapper']}`}>
                        <div className={`${Styles['box']}`}>
                            <div className={`${Styles['front-face']}`}>
                                <div className={`${Styles['icon']}`}>
                                    <i className={`fa-solid fa-fire ${Styles['Features-i']}`}></i>
                                </div>
                                <span className={`${Styles['Features-span']}`}>Recommended Movies</span>
                            </div>
                            <div className={`${Styles['back-face']}`}>
                                <span className={`${Styles['Features-span']}`}>Recommended Movies</span>
                                <p>
                                    Get movie suggestions based on what you like to watch. From blockbusters to hidden gems, Movie Muse helps you find your next favorite film.
                                </p>
                            </div>
                        </div>
                        <div className={`${Styles['box']}`}>
                            <div className={`${Styles['front-face']}`}>
                                <div className={`${Styles['icon']}`}>
                                    <i className={`fa-solid fa-magnifying-glass ${Styles['Features-i']}`}></i>
                                </div>
                                <span className={`${Styles['Features-span']}`}>Search & Explore</span>
                            </div>
                            <div className={`${Styles['back-face']}`}>
                                <span className={`${Styles['Features-span']}`}>Search & Explore</span>
                                <p>
                                    Effortlessly search for movies by title, genre, director, or actors. Dive deeper with curated lists and trending picks to discover hidden gems and all-time classics.
                                </p>
                            </div>
                        </div>
                        <div className={`${Styles['box']}`}>
                            <div className={`${Styles['front-face']}`}>
                                <div className={`${Styles['icon']}`}>
                                    <i className={`fa-solid fa-ranking-star ${Styles['Features-i']}`}></i>
                                </div>
                                <span className={`${Styles['Features-span']}`}>Community Reviews</span>
                            </div>
                            <div className={`${Styles['back-face']}`}>
                                <span className={`${Styles['Features-span']}`}>Community Reviews</span>
                                <p>
                                    Share your thoughts by leaving comments and reviews on movies you've watched. Connect with other movie enthusiasts and build your own community within Movie Muse.
                                </p>
                            </div>
                        </div>
                    </div>
                </section >
                <br></br>
                {/* <!-- this is the testimonials section --> */}
                <section>
                    <p className={`${Styles['TestimonialsHeader']} font text-center text-primary`}>Testimonials</p>
                    <div className={`${Styles['card-list']}`}>
                        <a href="#" className={`${Styles['card-item']}`}>
                            <img src={testimonials_pic1} alt="Card Image" className={`${Styles['img-size']}`} />
                            <span className={`font-100 text-light bg-primary ${Styles['testomonial-names']}`}>Mohamed walid</span>
                            <h3 className={`${Styles['desgin']}`}><i className="fa-solid fa-quote-left text-primary"></i> This website is awesome! It’s like it knows exactly what I want to watch. Super easy to use, and the recommendations never miss. Totally love it! <i className="fa-solid fa-quote-right text-primary"></i></h3>
                            <div className={`${Styles['arrow']}`}>
                                <i className="fas fa-arrow-right card-icon"></i>
                            </div>
                        </a>
                        <a href="#" className={`${Styles['card-item']}`}>
                            <img src={testimonials_pic2} alt="Card Image" className={`${Styles['img-size']}`} />
                            <span className={`font-100 text-light bg-primary ${Styles['testomonial-names']}`}>Ahmed Khaled</span>
                            <h3 className={`${Styles['desgin']}`}><i className="fa-solid fa-quote-left text-primary"></i> The website offers a seamless experience, with well-curated movie recommendations and an intuitive design. It’s a fantastic tool for discovering films effortlessly. <i className="fa-solid fa-quote-right text-primary"></i></h3>
                            <div className={`${Styles['arrow']}`}>
                                <i className="fas fa-arrow-right card-icon"></i>
                            </div>
                        </a>
                        <a href="#" className={`${Styles['card-item']}`}>
                            <img src={testimonials_pic3} alt="Card Image" className={`${Styles['img-size']}`} />
                            <span className={`font-100 text-light bg-primary ${Styles['testomonial-names']}`}>Peter</span>
                            <h3 className={`${Styles['desgin']}`}><i className="fa-solid fa-quote-left text-primary"></i> Finally, a website that understands my movie struggles! No more endless scrolling—just click, pick, and enjoy. It’s my new secret weapon for movie nights! <i className="fa-solid fa-quote-right text-primary"></i></h3>
                            <div className={`${Styles['arrow']}`}>
                                <i className="fas fa-arrow-right card-icon"></i>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;