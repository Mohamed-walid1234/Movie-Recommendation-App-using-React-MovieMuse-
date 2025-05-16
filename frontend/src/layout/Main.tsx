import { Outlet } from "react-router-dom";
import logo from '../../src/assets/images/Full logo.png';
import StylesNavBar from './Navbar-Auth.module.css';
import StylesFooter from './Footer-Auth.module.css';

function Main() {
    const clearData = () => {
        localStorage.clear();
        sessionStorage.clear();
        alert('Data cleared!');
      };
    return (
    <>
        {/* NavBar */}
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                    <div className="container">
                <a className="navbar-brand" href="/main">
                    <img className={`${StylesNavBar["Logo"]}`} src={logo} alt="Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="navbar-nav ms-auto gap-lg-4">
                        <li className="nav-item"><a className={`nav-link font text-light ${StylesNavBar['on-hover-link']}`} href="/main/home">Home</a></li>
                        <li className="nav-item"><a className={`nav-link font text-light ${StylesNavBar['on-hover-link']}`} href="/main">Movies</a></li>
                        <li className="nav-item"><a className={`nav-link font text-light ${StylesNavBar['on-hover-link']}`} href="/main/profile">Profile</a></li>
                        <li className="nav-item"><a className={`nav-link font text-light ${StylesNavBar['on-hover-link']}`} href="/"> 0</a></li>
                        <a href="/" onClick={clearData} className={`align-self-lg-center btn btn-primary border-0 font px-4 rounded-5 pt-2 ${StylesNavBar['on-hover-btn']}`}>Log Out</a>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        <div className={`${StylesNavBar['margin-top']}`}>
            <Outlet />
        </div>
        {/* Footer */}
        <div>
        <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container">
            <div className="row">

            {/* Brand */}
            <div className="col-md-3 mb-4 ">
                <img src={logo} alt="Logo" className="img-fluid mb-2" style={{ width: '200px', height: '70px' }} />
                <p className="text-light">Discover films that move you</p>
            </div>

            {/* Links */}
            <div className="col-md-3 mb-4">
                <h5 className="text-primary fw-bold font-100" >Home</h5>
                <ul className="list-unstyled">
                <li><a href="#" className={`text-light text-decoration-none d-block mb-1 ${StylesFooter['on-hover-link']}`}>About Us</a></li>
                <li><a href="#" className={`text-light text-decoration-none d-block mb-1 ${StylesFooter['on-hover-link']}`}>Features</a></li>
                <li><a href="#" className={`text-light text-decoration-none d-block mb-1 ${StylesFooter['on-hover-link']}`}>Testimonials</a></li>
                </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 mb-4">
                <h5 className="text-primary fw-bold font-100">Contact</h5>
                <p className="text-light mb-1">Email: MovieMuse@gmail.com</p>
                <p className="text-light mb-1">Phone: +20 1149123115</p>
                <p className="text-light">Location: Cairo, Nasr City</p>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 mb-4">
                <h5 className="text-primary fw-bold font-100">Signup</h5>
                <p className="text-light">Start your journey now</p>
                <form className="d-flex flex-column flex-sm-row gap-2 mt-2">
                <input type="email" className="form-control" placeholder="Your email" />
                <a  href="/" onClick={clearData} className={`btn btn-primary text-white font border-0 w-50 ${StylesFooter['on-hover-btn']}`} type="submit">log out</a>
                </form>
            </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center pt-4 border-top mt-4 border-primary">
            <div className="mb-3">
                <a href="#" className="text-white me-3 fs-5"><i className={`fab fa-facebook fa-bounce ${StylesFooter['on-hover-link']}`}></i></a>
                <a href="#" className="text-white me-3 fs-5"><i className={`fab fa-youtube fa-bounce ${StylesFooter['on-hover-link']}`}></i></a>
                <a href="#" className="text-white me-3 fs-5"><i className={`fab fa-linkedin fa-bounce ${StylesFooter['on-hover-link']}`}></i></a>
                <a href="#" className="text-white fs-5"><i className={`fab fa-instagram fa-bounce ${StylesFooter['on-hover-link']}`}></i></a>
            </div>
            <p className="text-secondary small mb-0">
                &copy; 2025 MovieMuse. All rights reserved. | <a href="#" className="text-primary text-decoration-none">Privacy Policy</a>
            </p>
            </div>
        </div>
        </footer>
        </div>        
    </>  
    );
}

export default Main;