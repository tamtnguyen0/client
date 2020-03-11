import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const ProductList = () => {
    const [products, setProducts] = useState([])
    
    const getAllProducts = () => {
        axios.get('http://localhost:8000/api/all')
            .then(res => {
                console.log(res)
                setProducts([...res.data])}
            )
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(() => getAllProducts())
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h3>All Products</h3>
            {products && products.map((product, i) => (
                <div className='mb-2' key={i}>
                    <Link key={i} to={'/products/'+product._id}>{product.name}</Link>
                    <button onClick={() => deleteProduct(product._id)} className='ml-3 btn btn-danger'>Delete</button>
                </div>
        ))}
        </div>
    )
}

export default ProductList;