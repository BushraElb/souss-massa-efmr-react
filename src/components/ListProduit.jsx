// src/components/ListProduit.jsx
import React from 'react';
import { useSelector } from 'react-redux';

function ListProduit() {
  const produits = useSelector((state) => state.produits);

  return (
    <div className="p-4 bg-dark-bg text-light-bg">
      <h2 className="text-xl text-secondary-blue mb-4">Liste des Produits</h2>
      {produits.length > 0 ? (
        <ul className="space-y-4">
          {produits.map((product) => (
            <li key={product.ref} className="p-4 bg-light-bg rounded-md">
              <p>{product.nom} - {product.categorie}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit à afficher</p>
      )}
    </div>
  );
}

export default ListProduit;
