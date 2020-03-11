import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SingleView = props => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                console.log(res)
                setData({...res.data})})
            .catch(err => console.log(err))
    }, [])

    return(
        <div className='mt-2'>
            <h3>{data.name}</h3>
            <p>${data.price}</p>
            <p>{data.description}</p>
        </div>
    )
}

export default SingleView;