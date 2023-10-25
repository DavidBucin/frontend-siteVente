import React, { useState, useEffect } from 'react';
import App from '../App';
import ListeStage from '../components/ListeStage';



const PagesEmployeur = () => {
  const [stageList, setStageList] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newStage, setNewStage] = useState({
    numContact: "",
    nomEntreprise: "",
    nomPoste: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStage((prevStage) => ({
      ...prevStage,
      [name]: value
    }));
  };
  const isFormValid = () => {
    return (
      newStage.numContact.trim() !== "" &&
      newStage.nomEntreprise.trim() !== "" &&
      newStage.nomPoste.trim() !== ""
    );
  };
  const addStage = () => {
    if (!isFormValid()) {
        alert("Remplir les champs svp");
        return;
      }
  
      // You can add the newStage data to your StageList or perform further processing here.
      // For now, let's just alert the new stage data.
      alert("Stage a été ajouté\nNom du companie: " + newStage.nomEntreprise + "\nContact Number: " + newStage.numContact + "\nJob Title: " + newStage.nomPoste);
  
      // Reset the newStage state
    setNewStage({
      numContact: "",
      nomEntreprise: "",
      nomPoste: ""
    });

    // Close the form
    setIsFormOpen(false);
  };





  const stageSubmitHandler = async (event) => {
  setIsFormOpen(false);
  event.preventDefault();
  try {
    const response = await fetch("https://gestion-stage-exe7.onrender.com/api/stages", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStage),
    });

    console.log(response); // Log the response for debugging

    if (!response.ok) {
      throw new Error('Failed to add stage.');
      
    }

    // Reset the newStage state
    setNewStage({
      numContact: '',
      nomEntreprise: '',
      nomPoste: '',
    });

    alert('Stage ajouté avec succès!');
  } catch (error) {
    console.log(error);
    alert("Le stage existe déjà");
  } 

  
};


  return (
    <div>
      <button onClick={() => setIsFormOpen(true)}>Ajout Stage</button>
      {isFormOpen && (
        
        <div>
          <h2>Ajout Stage</h2>
          <form onSubmit={stageSubmitHandler}>
            <label htmlFor="nomEntreprise">Nom de l'entreprise</label>
            <input
              type="text"
              id="nomEntreprise"
              name="nomEntreprise"
              value={newStage.nomEntreprise}
              onChange={handleInputChange}
              required
            /><br /><br />

            <label htmlFor="numContact">Numero de contact:</label>
            <input
              type="text"
              id="numContact"
              name="numContact"
              value={newStage.numContact}
              onChange={handleInputChange}
              required
            /><br /><br />

            <label htmlFor="nomPoste">Nom de poste</label>
            <input
              type="text"
              id="nomPoste"
              name="nomPoste"
              value={newStage.nomPoste}
              onChange={handleInputChange}
              required
            /><br /><br />

            <button type="submit" >Add</button>
            <button type="button" onClick={stageSubmitHandler}>Cancel</button>
          </form>
        </div>
      )}
      <ListeStage stage={stageList} />
    </div>
  );
};

export default PagesEmployeur;
