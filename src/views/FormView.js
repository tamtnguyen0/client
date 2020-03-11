import React from 'react'
import Form from '../components/Form'
import ProductList from '../components/ProductList'

export default () => {
    return (
        <div className='container col-3 mt-2'>
            <Form />
            <hr />
            <ProductList />
        </div>
    )
}