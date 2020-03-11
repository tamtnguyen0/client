import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import DeleteButton from '../components/DeleteButton'

const SingleView = props => {
    const [data, setData] = useState({})

    useEffect(() => {
        console.log(props)
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                setData({...res.data})})
            .catch(err => console.log(err))
    }, [])

    return(
        <div className='mt-2'>
            <h3>{data.name}</h3>
            <p>${data.price}</p>
            <p>{data.description}</p>
            <Link to={'/products/' + props.id + '/edit'}>Edit</Link>
            <DeleteButton successCallback={() => navigate('/')} productID={props.id}/>
        </div>
    )
}

export default SingleView;