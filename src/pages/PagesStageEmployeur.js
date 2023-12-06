import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import App from '../App';

function PagesStageEmployeur (props) {

    const { stageId } = useParams();
    const navigate = useNavigate();
    const [stage, setStage] = useState({
        nomEntreprise: "",
        numContact: "",
        nomPoste: ""
      });
    const [stageList, setStageList] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [newStage, setNewStage] = useState({
      nomEntreprise: "",
      numContact: "",
      nomPoste: ""
    });
    
        useEffect(() => {

            const getStageById = async () => {
                try {
                    const response = await fetch('https://gestion-stage-exe7.onrender.com/api/stages/' + stageId);
        
                    if (response.ok) {
                        const data = await response.json();
                        setStage(data.stage);
                    } else {
                        // Handle errors
                        const errorData = await response.json();
                        console.error('Error fetching stage:', errorData);
                        // Handle error state or alert the user
                    }
                } catch (error) {
                    console.error('Error during fetch:', error);
                    // Handle error state or alert the user
                }
            }
            getStageById();
            console.log(stage);
        }, []);

        const supprimerStage = async (e) => {
            try {
                const response = await fetch('https://gestion-stage-exe7.onrender.com/api/stages/' + stageId, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    // Suppression réussie, rediriger vers la page employeur
                    navigate('/employeur', { state: { nomEntreprise: stage.nomEntreprise } });
                } else {
                    // Gérer les erreurs de suppression
                    const errorData = await response.json();
                    console.error('Error deleting stage:', errorData);
                    alert('Erreur lors de la suppression');
                }
            } catch (error) {
                console.error('Error during fetch:', error);
                alert('Erreur lors de la suppression');
            }
        };

    const modifierStage = async (e) => {
        const nomEntreprise = stage.nomEntreprise;
        const response = await fetch('https://gestion-stage-exe7.onrender.com/api/stages/' + stageId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(stage),
        });
        if (response.ok) {
            // Suppression réussie, rediriger vers la page employeur
            navigate('/employeur', { state: { nomEntreprise: stage.nomEntreprise } });
        } else {
            // Gérer les erreurs de suppression
            const errorData = await response.json();
            console.error('Error updating stage:', errorData);
            alert('Erreur lors de la modification');
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStage((prevStage) => ({
          ...prevStage,
          [name]: value
        }));
      };

    return(
        <div>
          
          <div>
            <h2>Modifier Stage</h2>
            <form>
              <label htmlFor="nomEntreprise">Nom de l'entreprise</label>
              <input
                type="text"
                id="nomEntreprise"
                name="nomEntreprise"
                value={stage.nomEntreprise}
                disabled
              /><br /><br />
  
              <label htmlFor="numContact">Numero de contact:</label>
              <input
                type="text"
                id="numContact"
                name="numContact"
                value={stage.numContact}
                onChange={handleInputChange}
                required
              /><br /><br />
  
              <label htmlFor="nomPoste">Nom de poste</label>
              <input
                type="text"
                id="nomPoste"
                name="nomPoste"
                value={stage.nomPoste}
                onChange={handleInputChange}
                required
              /><br /><br />
              <button type="button" className="btn btn-warning" onClick={modifierStage}>Modifier</button>
              <button type="button" className="btn btn-danger" onClick={supprimerStage}>Supprimer</button>
            </form>
          </div>
      </div>  
    );
}
export default PagesStageEmployeur;