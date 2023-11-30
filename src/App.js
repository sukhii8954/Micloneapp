import './App.css';
import PreNavbar from './components/PreNavbar.js';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter as Router,Route, Routes } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.js"
import Offers from "./components/Offers.js"
import Heading  from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"
import Homepage from './components/Homepage.js';



function App() {

  return (
    <div>

     <Router>
       <PreNavbar/>
       <Navbar miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
            
        {/* <NavOptios/> */}


       <Slider start={data.banner.start} />
       <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
       <Heading text="HOT ACCESSORIES" />
       <HotAccessoriesMenu />

      <Routes>
       <Route exact path="/" element={<Homepage></Homepage>}>
       </Route>
       <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}>
       </Route>

       <Route exact path="/smartDevice" element= {<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}>
       </Route>

       <Route exact path="/home" element ={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}>

       </Route>

       <Route exact path="/lifestyle" element ={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}>
      
       </Route>

       <Route exact path="/mobileAccessories" element ={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}>
      //  </Route>

      </Routes>



       <Footer footer={data.footer} />
   </Router>
    </div>

  );
}

export default App;
