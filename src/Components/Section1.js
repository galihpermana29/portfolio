import React from 'react';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
const Section1 = () => {
   return (
      <div className="section1" style={{height: "100vh"}}>
         <Navbar/>
         <Jumbotron/>
      </div>
   );
}
 
export default Section1;