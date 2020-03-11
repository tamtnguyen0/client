import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Form from '../components/Form'

const SingleEdit = props => {
    const {id} = props;
    const [data, setData] = useState({name: '', price: 0, description: ''})

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setData({...res.data}))
            .catch(err => console.log(err));
    }, [])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + product._id, {...product})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <div className='container mt-2'>
            <Form callback={updateProduct} initialState={{...data}} />
        </div>
    )
}

export default SingleEdit;