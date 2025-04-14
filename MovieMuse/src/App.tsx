import Navbar from "./layout/navbar/Navbar";
import Movies from "./pages/movies/Movies"
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Footer from "./layout/footer/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Movies />
      <Login />
      <Signup />
      <Footer />
    </>
  )
}

export default App
