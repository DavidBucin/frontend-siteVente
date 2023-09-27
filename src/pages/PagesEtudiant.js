import React, { useState, useEffect } from 'react';


import App from '../App';
import ListeStage from '../components/ListeStage';

const StageList = [
    {
numContact: "514-420-6969",
nomEntreprise: "Apple",
nomPoste: "Developeur"
},
{
    numContact: "514-420-6969",
    nomEntreprise: "Apple",
    nomPoste: "Developeur"
},
{
    numContact: "514-420-6969",
    nomEntreprise: "Apple",
    nomPoste: "Developeur"
}
]
const PagesEtudiant = () => {

   

return (
    <ListeStage stage={StageList} />
);
}
export default PagesEtudiant;