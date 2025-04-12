import Styles from '../../pages/signup/Signup.module.css'
import Login_logo from '../../assets/images/Login.Signup.jpg';
import Logo from '../../assets/images/logo.png';

function Signup() {

  return (
    <>
      <main className='bg-secondary d-flex justify-content-around min-vh-100'>
        <section className='d-md-flex row w-100 justify-content-center'>
          <div className='col-6 p-0 d-none d-md-flex justify-content-end'>
            <img src={Login_logo} alt="Login_image" className={`rounded-3 align-self-center ${Styles['bg-size']}`} />
          </div>
          <div className='col-6 d-flex p-0 align-self-lg-center justify-content-lg-center'>
            <div className='d-flex flex-column align-items-center justify-content-center gap-4'>
              <img src={Logo} alt="Logo" className='w-50 pb-5' />
              <input type="text" placeholder='Name' className='rounded-5 w-75 p-2' />
              <input type="text" placeholder='Enter your email' className='rounded-5 w-75 p-2' />
              <input type="password" placeholder='Enter your password' className='rounded-5 w-75 p-2' />
              <button className='w-75 rounded-5 btn-primary p-2'>Sign Up</button>
              <p className='text-primary'>Already have an account? <a href="#" className='text-primary'>Log in</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Signup;
