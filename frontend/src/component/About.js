import React from "react";

export default function About() {
  return (
    <div>
      <h2 id="main">hour of code </h2>
      <img src="" />
      
      
      <img id="root" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1Smjb_hSn9tyGGPme3I2yQyakrudpb3GAg&usqp=CAU" />
      
      <p id="about">
        The hour of code site provides learning programming through drawing and
        quality in exchange for building your own website or designing a theme
      </p>
      {/* <a href="https://twitter.com/j_8855" /> <a/> */}
      <br/>
      <br/>
      <br/>
       <div id="type">Types of Educational Content </div>
      <br/>
     
      <div className="maincart">
    <div className="cart">
      <h2>Corses</h2>
      <p>A set of educational lessons aimed at mastering modern skills and techniques</p>
    </div>
    <div className="cart"> 
   <h2>projects</h2>
   <p>Mini-lessons explaining how to master the specific programming skills in your project</p>
    </div>
   
    
    <div className="cart">
    <h2>Tracks</h2>
    <p>It shows you the path you need to achieve a specific goal through a set of courses and projects that make up a complete learning package</p>
    </div>
      </div>



    </div>
  );
}
