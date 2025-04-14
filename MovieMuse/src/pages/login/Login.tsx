import Styles from '../../pages/login/Login.module.css'
import Login_logo from '../../assets/images/Login.Signup.jpg';
import Logo from '../../assets/images/logo.png';

function Login() {

  return (
    <>
      <main className='bg-secondary d-flex justify-content-around min-vh-100'>
        <section className='d-md-flex row w-100 justify-content-center'>
          <div className='col-6 d-flex p-0 align-self-lg-center justify-content-lg-center'>
            <div className={`d-flex flex-column align-items-center justify-content-center gap-4 shadow rounded-5 ${Styles['shadow-sm-size']} ${Styles['bg-third-color']}`}>
              <img src={Logo} alt="Logo" className='w-50 pb-5 pt-4' />
              <input type="text" placeholder='Enter your email' className={`rounded-5 w-75 p-2 placeholderColor form-control border-0 shadow-none ${Styles['placeholder']}`} />
              <input type="password" placeholder='Enter your password' className={`rounded-5 w-75 p-2 placeholderColor form-control border-0 shadow-none ${Styles['placeholder']}`} />
              <a href="/main" style={{textDecoration: 'none'}}  className={`w-75 rounded-5 btn-primary p-2 ${Styles['on-hover']} text-light border-0 font text-center `}>Login</a>
              <a className={`text-primary text-decoration-none ${Styles['on-hover-link']}`} href="/signup">New Account</a>
              <a className={`text-primary text-decoration-none pb-3 ${Styles['on-hover-link']}`} href="#">I forgot my password</a>
            </div>
          </div>
          <div className='col-6 p-0 d-none d-md-flex justify-content-end'>
            <img src={Login_logo} alt="Login_image" className={`align-self-center ${Styles['bg-size']}`} />
          </div>
        </section>
      </main>
    </>
  )
}

export default Login;
