import React, { useState } from 'react'
import "../styles/nav.css"
import data from '../data/data'
import { useNavigation } from 'react-router-dom'
import NavCard from './NavCard'
// import {data} from "../data/data.json"

// const logo =pkg.logo
const searchIcon =<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

const Navbar = ({miPhones , redmiPhones , tv , laptop ,fitnessAndLifeStyle,home,audio,accessories}) => {
    // const navigate = useNavigation();

    const [selectedOption , setSelectedOption] = useState("");
    return (
        <>
        <div className="nav">


            <div className="logo">
               
             <a href="/">
                  <img id="logoImage" src={data.logo} alt="Not" /> 
             </a>

             </div>

             <a  className="navlinks" onClick={()=>{setSelectedOption("MIPhones")}}>Mi Phones</a>
           <a   className="navlinks" onClick={()=>{setSelectedOption("MRedmiPhones")}} >Redmi Phones</a>
           <a   className="navlinks" onClick={()=>{setSelectedOption("TV")}}>TV</a>
           <a   className="navlinks" onClick={()=>{setSelectedOption("Laptops")}}>Laptops</a>
           <a   className="navlinks" onClick={()=>{setSelectedOption("Fitness")}}>Fitness & Lifestyle</a>
           <a  className="navlinks" onClick={()=>{setSelectedOption("Home")}}>Home</a>
           <a   className="navlinks" onClick={()=>{setSelectedOption("Radio")}}>Radio</a>
           <a   className="navlinks" onClick={()=>{setSelectedOption("Accessories")}}>Accessories</a>

           <div className="searchbox">
              <input type="text" name="search"  placeholder="Search Products"/>
              {searchIcon}

          </div>
            

           </div>
           <div className="navOptions"> 

{selectedOption === "MIPhones"?   miPhones.map((item)=>(

     < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
  )) : null }


{selectedOption === "MRedmiPhones" ?  redmiPhones.map((item)=>(

   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{selectedOption  === "TV"?   tv.map((item)=>(

    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }

{selectedOption === "Laptops" ?   laptop.map((item)=>(

  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }



{selectedOption  === "Fitness"?   fitnessAndLifeStyle.map((item)=>(

  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


   {selectedOption === "Home" ?   home.map((item)=>(

       < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
  )) : null }



{selectedOption  === "Radio" ?   audio.map((item)=>(

 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
)) : null }


{selectedOption === "Accessories" ?   accessories.map((item)=>(

    < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
 )) : null }

</div>
           </>
    
    )
}

export default Navbar
