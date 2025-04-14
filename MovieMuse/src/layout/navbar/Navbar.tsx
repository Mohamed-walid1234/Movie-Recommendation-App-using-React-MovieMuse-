import NavbarLogo from '../../assets/images/Full logo.png';
import Styles from './Navbar.module.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className={`${Styles["Logo"]}`} src={NavbarLogo} alt="Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="navbar-nav ms-auto gap-lg-4">
                            <li className="nav-item"><a className={`nav-link font text-light ${Styles['on-hover-link']}`} href="#">Home</a></li>
                            <li className="nav-item"><a className={`nav-link font text-light ${Styles['on-hover-link']}`} href="#about">About</a></li>
                            <li className="nav-item"><a className={`nav-link font text-light ${Styles['on-hover-link']}`} href="#classes">Features</a></li>
                            <li className="nav-item"><a className={`nav-link font text-light ${Styles['on-hover-link']}`} href="#membership">Testimonials </a></li>
                            <a href="#" className={`align-self-lg-center btn btn-primary border-0 font px-4 rounded-5 pt-2 ${Styles['on-hover-btn']}`}>LOGIN</a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
