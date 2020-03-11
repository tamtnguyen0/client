import React, {useEffect, useState} from 'react'
import axios from 'axios'

const SingleEdit = props => {
    const {id} = props;
    const [data, setData] = useState({name: '', price: 0, description: ''})

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setData({...res.data}))
            .catch(err => console.log(err));
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {...data})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <div className='container col-4'>
            <h1 className="mt-2 mb-3">Update Product</h1>
            <form onSubmit={updateProduct}>
                <div className="form-group">
                    <input className='form-control' value={data.name} name='name' onChange={(e) => setData({...data, [e.target.name]: e.target.value})} type="text"/>
                </div>
                <div className="form-group">
                    <input className='form-control' value={data.price} name='price' onChange={(e) => setData({...data, [e.target.name]: e.target.value})} type="text"/>
                </div>
                <div className="form-group">
                    <input className='form-control' value={data.description} name='description' onChange={(e) => setData({...data, [e.target.name]: e.target.value})} type="text"/>
                </div>
                <button className='btn btn-primary' type='submit'>Submit edit</button>
            </form>
        </div>
    )
}

export default SingleEdit;