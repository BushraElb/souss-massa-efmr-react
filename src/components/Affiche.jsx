
import React from 'react';
import { useSelector } from 'react-redux';

const Affiche = () => {
  const produits = useSelector((state) => state.produits);

  return (
    <div>
      <h2>Liste des produits</h2>
      {produits.length > 0 ? (
        <ul>
          {produits.map((produit) => (
            <li key={produit.ref}>
              <strong>{produit.nom}</strong> - {produit.prix} DH
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit à afficher</p>
      )}
    </div>
  );
};

export default Affiche;
