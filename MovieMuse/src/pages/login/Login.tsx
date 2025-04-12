import './login.css';
import Login_logo from '../../assets/photos/more_orange_chair_image.jpg';
import Logo from '../../assets/photos/logo_orange_transparent.png';

function Login() {

  return (
    <>
      <main className='container pt-5'>
        <section className='row flex-row-reverse'>
          <div className='col-6'>
            <img src={Login_logo} alt="Login_image" className='rounded-3' />
          </div>
          <div className='col-6'>
            <div className='d-flex flex-column align-items-center gap-3'>
              <img src={Logo} alt="Logo" className='w-25 pt-5' />
              <input type="text" placeholder='Enter your email' className='rounded-5 w-75 p-2 placeholderColor'/>
              <input type="password" placeholder='Enter your password' className='rounded-5 w-75 p-2 placeholderColor'/>
              <button className='w-75 rounded-5 btnColor p-2'>Login</button>
              <a className='textColor' href="#">I forgot my password</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login;
