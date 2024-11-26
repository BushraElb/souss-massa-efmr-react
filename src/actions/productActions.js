export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export function addProduct(product){
    return {
            type: 'ADD_PRODUCT',
            payload: product
        };
    
}

export function deleteProduct(ref){
    return {
            type: 'DELETE_PRODUCT',
            payload: ref
        };
    
}


