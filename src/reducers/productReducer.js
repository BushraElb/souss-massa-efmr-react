import { ADD_PRODUCT, DELETE_PRODUCT } from '../actions/productActions';

const initialState = {
  produits: [
    {ref: 7, nom: 'PC HP', categorie: 'informatique'},
    {ref: 8, nom: 'SKYWORTH', categorie: 'TV'}
  ]
};

function productReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {...state,produits: [...state.produits, action.payload]};
    case DELETE_PRODUCT:
      return {...state,produits: state.produits.filter(product => product.ref !== action.payload)};
    default:
      return state;
  }
};

export default productReducer;


