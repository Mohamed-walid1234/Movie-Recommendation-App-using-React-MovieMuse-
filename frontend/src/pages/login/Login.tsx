import Styles from '../../pages/login/Login.module.css'
import Login_logo from '../../assets/images/Login.Signup.jpg';
import Logo from '../../assets/images/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginYet } from '../../util/loginyet';


function Login() {
  
  const isLoginned = loginYet();

  // navigate to another page
  const navigate = useNavigate();
  
  // handle the error message
  const [errorMessage, setErrorMessage] = useState("");
  // get user input
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ''
  })
  //login logic 
  const handleLogin = async () => {
    if (!loginUser.email || !loginUser.password) {
      setErrorMessage("Please fill all the fields");
    }else if (!loginUser.email.includes('@gmail.com')) {
      setErrorMessage("Please enter a valid email");
    }else if(isLoginned) {
      console.log(isLoginned)
      navigate('/main');
    }else {
      console.log(isLoginned)
      setErrorMessage("Invalid email or password");
    }
  }
  // handle the submit
  const handleSubmit = async (e: React.FormEvent) => {
     await localStorage.setItem('setLoginUserEmail', JSON.stringify(loginUser.email));
     await localStorage.setItem('setLoginUserPassword', JSON.stringify(loginUser.password));
      handleLogin();

  };
  

  return (
    <>
      <main className='bg-secondary d-flex justify-content-around min-vh-100'>
        <section className='d-md-flex row w-100 justify-content-center'>
          <div className='col-6 d-flex p-0 align-self-lg-center justify-content-lg-center'>
            <form onSubmit={handleSubmit} className={`d-flex flex-column align-items-center justify-content-center gap-4 shadow rounded-5 ${Styles['shadow-sm-size']} ${Styles['bg-third-color']}`}>
              <img src={Logo} alt="Logo" className='w-50 pb-5 pt-4' />
              <input onChange={(e) => setLoginUser({...loginUser, email: e.target.value})} value={loginUser.email} type="text" placeholder='Enter your email' className={`rounded-5 w-75 p-2 placeholderColor form-control border-0 shadow-none ${Styles['placeholder']}`} />
              <input onChange={(e) => setLoginUser({...loginUser, password: e.target.value})} value={loginUser.password} type="password" placeholder='Enter your password' className={`rounded-5 w-75 p-2 placeholderColor form-control border-0 shadow-none ${Styles['placeholder']}`} />
              <button  type='submit' style={{textDecoration: 'none'}}  className={`w-75 rounded-5 btn-primary p-2 ${Styles['on-hover']} text-light border-0 font text-center `}>Login</button>
              <p>{errorMessage}</p>
              <a className={`text-primary text-decoration-none ${Styles['on-hover-link']}`} href="/signup">New Account</a>
              <a className={`text-primary text-decoration-none pb-3 ${Styles['on-hover-link']}`} href="#">I forgot my password</a>
            </form>
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
