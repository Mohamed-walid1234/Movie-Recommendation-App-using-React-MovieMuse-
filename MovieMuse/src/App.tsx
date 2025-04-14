import Navbar from "./layout/navbar/Navbar";
import Movies from "./pages/movies/Movies"
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {

  return (
    <>
      <Navbar />
      <Movies />
      <Login />
      <Signup />
    </>
  )
}

export default App
