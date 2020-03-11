import React, {useState} from 'react'
import axios from 'axios'

const Form = () => {
    const [form, setForm] = useState({name: '', price: 0, description: ''})

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', {...form})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h1 className='mb-3'>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <input className='form-control' onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} type='text' placeholder='Name' name='name' />
                </div>
                <div className='form-group'>
                    <input className='form-control' onChange={(e) => setForm({...form, [e.target.name]: Number(e.target.value)})} type='text' placeholder='Price' name='price' />
                </div>
                <div className='form-group'>
                    <input className='form-control' onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} type='text' placeholder='Description' name='description' />
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;