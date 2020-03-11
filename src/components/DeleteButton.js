import React from 'react';
import axios from 'axios'

export default props => {
    const { productID, successCallback} = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + productID)
            .then(res => successCallback())
            .catch(err => console.log(err));
    }

    return (
        <button className='ml-2 btn btn-danger' onClick={deleteProduct}>Delete</button>
    )
}