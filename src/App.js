import './App.css';
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Servives from "./components/services/Services"
import Container from "./components/container/Container"
import Subscription from "./components/subscription/Subscription"
import Gallery from "./components/gallery/Gallery"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Servives></Servives>
      <Container></Container>
      <Subscription></Subscription>
      <Gallery></Gallery>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
