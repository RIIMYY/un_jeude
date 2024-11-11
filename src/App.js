import React from "react";
import JeuDe from "./components/JeuDe"; 

function App() {

  const styleTitre = {
    color: "red",        
    fontSize: "26px",      
    fontdiveight: "bold",    
    fontFamily: "Arial, sans-serif" 
  };

  return (
    <div>
      <h2 style={styleTitre}>Welcome! 😍😍</h2>
      
      <JeuDe cache={2} /> 
    </div>
  );
}

export default App;
