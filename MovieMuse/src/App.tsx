import Navbar from "./layout/navbar/Navbar";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies"
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Footer from "./layout/footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Movies />
      <Login />
      <Signup />
      <Footer />
    </>
  )
}

export default App
