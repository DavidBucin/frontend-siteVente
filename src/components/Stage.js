import React, { useState, useEffect } from 'react';
import Cards from './card/Cards.js'
const Stage = (props) => {
    

return (
  <li className='cours-item'>
    <Cards className = "cours-item__content">
        <div>
            <h2>{"numero : " + props.stage.numContact}</h2>
            <h2>{"compagnie : " + props.stage.nomEntreprise}</h2>
            <h2>{"nom du poste : " + props.stage.nomPoste}</h2>





        </div>

    </Cards>
    
  </li>  
);


};

export default Stage;

