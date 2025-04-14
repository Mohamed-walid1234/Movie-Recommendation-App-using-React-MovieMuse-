import logo from '../../assets/images/Full logo.png';
import Styles from './Footer.module.css';
const Footer = () => {
  return (
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
              <li><a href="#" className={`text-light text-decoration-none d-block mb-1 ${Styles['on-hover-link']}`}>About Us</a></li>
              <li><a href="#" className={`text-light text-decoration-none d-block mb-1 ${Styles['on-hover-link']}`}>Features</a></li>
              <li><a href="#" className={`text-light text-decoration-none d-block mb-1 ${Styles['on-hover-link']}`}>Testimonials</a></li>
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
              <button className={`btn btn-primary text-white font border-0 ${Styles['on-hover-btn']}`} type="submit">Signup</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-4 border-top mt-4 border-primary">
          <div className="mb-3">
            <a href="#" className="text-white me-3 fs-5"><i className={`fab fa-facebook fa-bounce ${Styles['on-hover-link']}`}></i></a>
            <a href="#" className="text-white me-3 fs-5"><i className={`fab fa-youtube fa-bounce ${Styles['on-hover-link']}`}></i></a>
            <a href="#" className="text-white me-3 fs-5"><i className={`fab fa-linkedin fa-bounce ${Styles['on-hover-link']}`}></i></a>
            <a href="#" className="text-white fs-5"><i className={`fab fa-instagram fa-bounce ${Styles['on-hover-link']}`}></i></a>
          </div>
          <p className="text-secondary small mb-0">
            &copy; 2025 MovieMuse. All rights reserved. | <a href="#" className="text-primary text-decoration-none">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
