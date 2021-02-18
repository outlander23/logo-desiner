import Navbar from "./Navbar/navBar";
import HomePage from "./HomePage/homePage";
import Footer from "./Footer/footer"
import "./App.css";
function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <HomePage />
    </div>
    <Footer />
    </>
  );
}

export default App;
