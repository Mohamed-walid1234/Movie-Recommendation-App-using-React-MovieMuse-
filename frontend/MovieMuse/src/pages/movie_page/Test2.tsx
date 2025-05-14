import Styles from "./Movie_Page.module.css";
import Movie_img from "../../assets/images/TheGodfather4K_poster.jpg";

function Movie_Page() {
    return (
        <>
            <div className="bg-secondary">
                <section id="Movie" className={`py-5 ${Styles["Movie"]}`}>
                    <div className="container">
                        <div className={`${Styles["row"]}`}>

                        








                            {/* <div className={`col-md-4 ${Styles['image']}`}>
                                <img src={Movie_img} className={`${Styles['img-MovieMuse']}`} alt="MovieMuse Character" />
                            </div>
                            <div className="col-md-8">
                                <p className={`${Styles['About-Header']}`}>God Father (1972)</p>
                                <div className={`${Styles["About-Content"]} ${Styles['resize']}`}>
                                    <div className={`${Styles["About-Content-Maindiv"]}`}>
                                        <h2 className={`${Styles["About-Details-Header"]}`}>Story</h2>
                                        <br />
                                        <p className={`${Styles["Story"]}`}>The Godfather follows the Corleone crime family as power passes from patriarch Vito to his son Michael, who transforms from reluctant outsider to ruthless leader. A masterpiece of loyalty, betrayal, and the cost of power, it’s a timeless exploration of family and ambition.</p>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-md-6">
                                <p className={`${Styles['About-Header']}`}>God Father (1972)</p>
                                <div className={`${Styles["About-Content"]} ${Styles['resize']}`}>
                                    <div className={`${Styles["About-Content-Maindiv"]}`}>
                                        <h2 className={`${Styles["About-Details-Header"]}`}>Story</h2>
                                        <br />
                                        <p className={`${Styles["Story"]}`}>The Godfather follows the Corleone crime family as power passes from patriarch Vito to his son Michael, who transforms from reluctant outsider to ruthless leader. A masterpiece of loyalty, betrayal, and the cost of power, it’s a timeless exploration of family and ambition.</p>
                                    </div>
                                    <div className={`${Styles['About-Content-Maindiv']} ${Styles['Rating']}`}>
                                        <h2 className={`${Styles["About-Details-Header"]}`}>Rating</h2>
                                        <br />
                                        <i className={`fa-solid fa-star-half-stroke ${Styles['star']}`}></i>
                                        <p className={`${Styles["Rating-content"]}`}> 9.1 of 10</p>
                                    </div>
                                    <div className={`${Styles['About-Content-Maindiv']} ${Styles['Maindiv-last']}`}>
                                        <h2 className={`${Styles["About-Details-Header"]}`}>Details</h2>
                                        <br />
                                        <ul>
                                            <li className={`${Styles["Details"]}`}>Director: <span className={`${Styles["Descripe"]}`}> Francis Ford Coppol </span></li>
                                            <li className={`${Styles["Details"]}`}>Year: <span className={`${Styles["Descripe"]}`}>1972</span></li>
                                            <li className={`${Styles["Details"]}`}>Genere: <span className={`${Styles["Descripe"]}`}>Crime, Drama</span></li>
                                            <li className={`${Styles["Details"]}`}>Main actors: <span className={`${Styles["Descripe"]}`}>Marlon Brando, Al Pacino, James Caan, Richard S. Castellano, Robert Duvall</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="#classNamees" className={`btn btn-primary border-primary mt-3 ${Styles['About-Button']}`}>Watch</a>
                            </div> */}
                        </div>
                    </div>
                    <br />
                </section>

                {/* <!-- This is the comment section --> */}

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