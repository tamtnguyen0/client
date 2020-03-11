import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'

const SingleView = props => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                setData({...res.data})})
            .catch(err => console.log(err))
    }, [])

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + props.id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))
    }

    return(
        <div className='mt-2'>
            <h3>{data.name}</h3>
            <p>${data.price}</p>
            <p>{data.description}</p>
            <Link to={'/products/' + props.id + '/edit'}>Edit</Link>
            <button onClick={deleteProduct} className='ml-3 btn btn-danger'>Delete</button>
        </div>
    )
}

export default SingleView;