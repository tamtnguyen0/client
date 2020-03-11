import React from 'react'
import Form from '../components/Form'
import ProductList from '../components/ProductList'
import axios from 'axios'

export default () => {
    const createProduct = product => {
        axios.post('http://localhost:8000/api/new', {...product})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className='container mt-2'>
            <Form callback={createProduct} initialState={{name: '', price: 0, description: ''}}/>
            <hr />
            <ProductList />
        </div>
    )
}