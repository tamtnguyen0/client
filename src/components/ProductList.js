import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then(res => {
                console.log(res)
                setProducts([...res.data])}
            )
            .catch(error => console.log(error))
    }, [])

    return(
        <div>
            <h3>All Products</h3>
            {products && products.map((product, i) => (
                    <Link className='d-block' key={i} to={'/products/'+product._id}>{product.name}</Link>
        ))}
        </div>
    )
}

export default ProductList;