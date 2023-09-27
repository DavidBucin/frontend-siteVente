import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function PagesConnexion() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '', role:"etudiant"});
    

    

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      
      if (formData.email === '' || formData.password === '') {
        alert('Remplir le formulaire svp');
        return;
      } 
      else {

      
          if (formData.role === 'etudiant') {
            navigate('/etudiant');
          } else if (formData.role === 'employeur') {
            navigate('/employeur');
          }
      }   
    }

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="courriel"
          placeholder="Adresse courriel"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div>
          <label>
            <input
              
              type="radio"
              name="role"
              value="etudiant"
              checked={formData.role === 'etudiant'}
              onChange={handleInputChange}
            />
            Etudiant
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="employeur"
              checked={formData.role === 'employeur'}
              onChange={handleInputChange}
            />
            Employeur
          </label>
        </div>
        <button type="button" onClick={handleSubmit}>Connexion</button>
      </form>
    </div>
  );
}

export default PagesConnexion;
