
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="bg-primary-blue p-4 text-light-bg">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-secondary-blue">Accueil</Link></li>
          <li><Link to="/list" className="hover:text-secondary-blue">Liste des Produits</Link></li>
          <li><Link to="/search" className="hover:text-secondary-blue">Recherche</Link></li>
          <li><Link to="/add" className="hover:text-secondary-blue">Ajouter un Produit</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
