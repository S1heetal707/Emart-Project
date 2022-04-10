
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router } from "react-router-dom"
import { Slider } from "./components/Slider.js"
import data from "./data/data.json"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"


// const styleDiv = {
//   backgroundColor: 'cyan'
// }


function App() {

  return (

    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Heading text= " OUR PRODUCTS "/>
      <StarProduct starProduct = {data.startProduct}/>
    </Router>

  );
}



export default App;
