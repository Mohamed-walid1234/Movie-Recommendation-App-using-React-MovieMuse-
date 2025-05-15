import Styles from '../../pages/signup/Signup.module.css'
import Login_logo from '../../assets/images/Login.Signup.jpg';
import Logo from '../../assets/images/logo.png';
import { useState } from 'react'
import { useUsersUtil } from '../../util/users';
import { useNavigate } from 'react-router-dom';

function Signup() {
  // handle the error message
  const [errorMessage, setErrorMessage] = useState("");
  
  // handle the user data
  const { createUsers } = useUsersUtil()
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleAddUser =  async () => {
    const { success, message } = await createUsers(newUser);
    if (success) {
      console.log(message);
      navigate("/login");
    } else {
      setErrorMessage(message); 
      console.log(message);
    }
  };

  // handle the submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAddUser(); 
  };
  
  return (
    <>
      <main className='bg-secondary d-flex justify-content-around min-vh-100'>
        <section className='d-md-flex row w-100 justify-content-center'>
          <div className='col-6 p-0 d-none d-md-flex justify-content-end'>
            <img src={Login_logo} alt="Login_image" className={`align-self-center ${Styles['bg-size']}`} />
          </div>
          <div className='col-6 d-flex p-0 align-self-lg-center justify-content-lg-center'>
            <form onSubmit={handleSubmit} className={`d-flex flex-column align-items-center justify-content-center gap-4 shadow rounded-5 ${Styles['shadow-sm-size']}`}>
              <img src={Logo} alt="Logo" className='w-50 pb-5' />
              <input onChange={(e) => setNewUser({...newUser, name: e.target.value})} value={newUser.name} type="text" placeholder='Name' className={`rounded-5 w-75 p-2 form-control border-0 shadow-none ${Styles['placeholder']}`} />
              <input onChange={(e) => setNewUser({...newUser, email: e.target.value})} value={newUser.email}type="text" placeholder='Enter your email' className={`rounded-5 w-75 p-2 form-control border-0 shadow-none ${Styles['placeholder']}`} />
              <input onChange={(e) => setNewUser({...newUser, password: e.target.value})}value={newUser.password} type="password" placeholder='Enter your password' className={`rounded-5 w-75 p-2 form-control border-0 shadow-none ${Styles['placeholder']}`} />
              <button  type='submit' style={{textDecoration: 'none'}}  className={`w-75 rounded-5 btn-primary p-2 ${Styles['on-hover']} text-light border-0 font text-center `}>Sign Up</button>
              <p className='text-white'>{errorMessage}</p>
              <p className='text-primary'>Already have an account? <a href="/login" className={`text-primary ${Styles['on-hover-link']}`}>Log in</a></p>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Signup;
