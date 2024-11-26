import React, { useState } from 'react';

const InfoProd = () => {
  const [produit, setProduit] = useState({
    ref: '',
    nom: '',
    categorie: '',
    description: '',
    prix: '',
    image: ''
  });
  const [affichage, setAffichage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduit((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAffichage(produit);
  };

  return (
    <div className="bg-background text-text p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold text-accent mb-4">Gestion des produits</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg" htmlFor="ref">Référence:</label>
          <input
            type="text"
            name="ref"
            value={produit.ref}
            onChange={handleChange}
            className="w-full p-3 bg-background text-text border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-lg" htmlFor="nom">Nom Produit:</label>
          <input
            type="text"
            name="nom"
            value={produit.nom}
            onChange={handleChange}
            className="w-full p-3 bg-background text-text border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-lg" htmlFor="categorie">Catégorie Produit:</label>
          <input
            type="text"
            name="categorie"
            value={produit.categorie}
            onChange={handleChange}
            className="w-full p-3 bg-background text-text border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-lg" htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={produit.description}
            onChange={handleChange}
            className="w-full p-3 bg-background text-text border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-lg" htmlFor="prix">Prix:</label>
          <input
            type="number"
            name="prix"
            value={produit.prix}
            onChange={handleChange}
            className="w-full p-3 bg-background text-text border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-lg" htmlFor="image">Image:</label>
          <input
            type="file"
            name="image"
            onChange={(e) => setProduit({ ...produit, image: e.target.files[0].name })}
            className="w-full p-3 bg-background text-text border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-accent text-white rounded-lg hover:bg-secondary transition-all"
        >
          Valider
        </button>
      </form>

      {affichage && (
        <div className="produit-info mt-6">
          <h3 className="text-xl font-semibold text-accent mb-3">Information Produit</h3>
          <ul className="space-y-2">
            <li><strong>Référence:</strong> {affichage.ref}</li>
            <li><strong>Nom:</strong> {affichage.nom}</li>
            <li><strong>Catégorie:</strong> {affichage.categorie}</li>
            <li><strong>Description:</strong> {affichage.description}</li>
            <li><strong>Prix:</strong> {affichage.prix} DH</li>
            <li><strong>Image:</strong> {affichage.image}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfoProd;

