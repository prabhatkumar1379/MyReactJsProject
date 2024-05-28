import React from "react";
import ReactDOM from "react-dom/client";
import foodlog from "./static/foodlogo.png";
import food from "./dist/NamastyReact.3464ddca"


    /** 
    headed
    *-logo
    *- nav-items
    */
    //body ,search restorentContainer img name of resto rating cuisines

    //footer


const Headed= ()=> {
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src={foodlog} alt="Food Logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
         
        </ul>
      </div>
    </div>
  )
}
const styleCard ={
  backgroundColor:"#f0f0f0",
};
const Restocard =() =>{
  return (
    <div className="res-card" style={styleCard}>
    <h3>Meghna Foods</h3>
    </div>
  );
}

 const Body =() =>{
   return (
     <div className="Body">
       <div className="search">Search</div>
       <div className="res-container">
         <Restocard/>
       </div>
     </div>
   );
 }

const AppLayout =() => {
  return (
    <div className="app">
      <Headed/>
      <Body/>
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
