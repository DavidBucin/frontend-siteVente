import React, { useState } from 'react';

function PagesCreation() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'etudiant', // Default role is set to 'etudiant'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate "DA" field to allow only numbers
    if (name === 'username' && !/^\d*$/.test(value)) {
      // If value contains non-numeric characters, don't update the state
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Check if email is a valid email address
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleButtonClick = () => {
    // Check if any inputs are empty
    if (formData.name === '' || formData.email === '' || formData.password === '') {
      alert('Remplir le formulaire svp');
      return;
    }

    const currentPath = window.location.pathname;

    const segments = currentPath.split('/');
    segments.pop(); // Remove the last segment
    const parentPath = segments.join('/');

    // Navigate to the parent path
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Créer un compte</h2>
      <form>
        
        
        {formData.role === 'etudiant' && (
          <>
          <input
          type="email"
          name="email"
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
            <input
              type="text"
              name="name"
              placeholder="Prénom"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Nom"
              value={formData.lastname}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="adresse"
              placeholder="Adresse complète"
              value={formData.adresse}
              onChange={handleInputChange}
            />
            
          </>
        )}

        {formData.role === 'employeur' && (
          <>
            <input
              type="text"
              name="entreprise"
              placeholder="Nom de l'entreprise"
              value={formData.entreprise}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="adresse"
              placeholder="Adresse complète"
              value={formData.adresse1}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="adresse_courriel"
              placeholder="Adresse courriel"
              value={formData.adresse_courriel1}
              onChange={handleInputChange}
            />
             <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password1}
          onChange={handleInputChange}
        />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="telephone"
              placeholder="Téléphone"
              value={formData.telephone1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="poste"
              placeholder="Numéro de poste"
              value={formData.poste}
              onChange={handleInputChange}
            />
          </>
        )}

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
        <button type="button" onClick={handleButtonClick}>Soumettre</button>
      </form>
    </div>
  );
}

export default PagesCreation;
