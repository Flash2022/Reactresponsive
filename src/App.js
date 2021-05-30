import React from 'react';
import "./styles.css";
import  {Navbar}  from "./Components/navbar";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./Components/responsive";
import * as RiIcons from 'react-icons/ri';
import Cardgen from './Components/Cards/Cards';





export default function App() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <div className="App">


             <div id="navbar">
               <Navbar />
               </div>
              <div id="title">
                 <h1 className="mobilelogo">Lorem</h1>
              </div>
              <div id="cartIcon">
                <RiIcons.RiShoppingCartLine size="2em" color="red"   />
              </div>
              
              <div id="textarea">
                  <h1>What are you</h1>
                  <h1> having for Lunch ?</h1>
              </div>
              
              <div id="cards">
                <div className="insiderow">
                 <Cardgen />
                </div>
              </div>
              <div id="footer">
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a felis sed elit maximus pharetra et sed massa. </h3>
                  <hr></hr>
              </div>


    </div>
  );
}
