// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import InfoProd from './components/InfoProd';
import Affiche from './components/Affiche';
import Recherche from './components/Recherche';
import AddProduit from './components/AddProduit';
import ListProduit from './components/ListProduit';


function App() {
  return (
    <Provider store={store}>  {/* Fournir le store Redux à l'ensemble de l'application */}
      <Router>
        <div className="min-h-screen bg-dark-bg text-light-bg">
          <h1 className="text-4xl text-secondary-blue p-4">Gestion des Produits</h1>
          <Menu />
          <Routes>
            <Route path="/" element={<InfoProd />} />
            <Route path="/list" element={<Affiche />} />
            <Route path="/search" element={<Recherche />} />
            <Route path="/add" element={<AddProduit />} />
            <Route path="/list" element={<ListProduit />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
