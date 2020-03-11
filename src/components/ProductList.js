import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
import DeleteButton from '../components/DeleteButton'

const ProductList = () => {
    const [products, setProducts] = useState([])
    
    const getAllProducts = () => {
        axios.get('http://localhost:8000/api/all')
            .then(res => {setProducts([...res.data])})
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return(
        <div>
            <h3>All Products</h3>
            {products && products.map((product, i) => (
                <div className='mb-2' key={i}>
                    <Link key={i} to={'/products/'+product._id}>{product.name}</Link>
                    <DeleteButton className='ml-2 btn btn-danger' successCallback={()=>getAllProducts()} productID={product._id}/>
                </div>
            ))}
        </div>
    )
}

export default ProductList;