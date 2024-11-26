// src/components/AddProduit.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';

function AddProduit() {
  const [nom, setNom] = useState('');
  const [categorie, setCategorie] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ref: Date.now(), nom, categorie };
    dispatch(addProduct(newProduct));
    setNom('');
    setCategorie('');
  };

  return (
    <div className="p-4 bg-dark-bg text-light-bg">
      <h2 className="text-xl text-secondary-blue mb-4">Ajouter un Produit</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom du produit"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full p-2 bg-light-bg text-dark-bg rounded-md"
        />
        <input
          type="text"
          placeholder="Catégorie"
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="w-full p-2 bg-light-bg text-dark-bg rounded-md"
        />
        <button type="submit" className="bg-primary-blue text-light-bg p-2 rounded-md hover:bg-secondary-blue">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddProduit;
