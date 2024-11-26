// src/components/Recherche.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Recherche() {
  const [categorie, setCategorie] = useState('');
  const produits = useSelector((state) => state.produits);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    if (categorie) {
      const results = produits.filter(product => 
        product.categorie.toLowerCase().includes(categorie.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="p-4 bg-dark-bg text-light-bg">
      <h2 className="text-xl text-secondary-blue mb-4">Recherche par catégorie</h2>
      <input
        type="text"
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
        placeholder="Entrez une catégorie"
        className="w-full p-2 bg-light-bg text-dark-bg rounded-md mb-4"
      />
      <button
        onClick={handleSearch}
        className="bg-primary-blue text-light-bg p-2 rounded-md hover:bg-secondary-blue"
      >
        Rechercher
      </button>
      
      {filteredProducts.length > 0 ? (
        <div className="mt-4">
          <h3 className="text-lg text-secondary-blue">Résultats :</h3>
          <ul className="space-y-4">
            {filteredProducts.map((product) => (
              <li key={product.ref} className="p-4 bg-light-bg rounded-md">
                <p>{product.nom} - {product.categorie}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-gray-500">Aucun produit à afficher</p>
      )}
    </div>
  );
}

export default Recherche;

