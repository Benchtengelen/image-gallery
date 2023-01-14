import React, {useState} from 'react';
import Images from './Images';
import "./styles.css";

function App() {

   const [selectedİmg, setSelectedİmg] = useState(Images[0]);

  return (
    <div className="App">
       <div className="container">
        <h1>European NBA Players</h1>
         <img src={selectedİmg} alt="Selected" className="selected" /> 
       </div>
       <div className="imgContainer">
          {
            Images.map((img, index) => (
              <img key={index} src={img} alt="players" 
              onClick={() => setSelectedİmg(img)}
              />
            ))
          }
       </div>
    </div>
  );
}

export default App;
