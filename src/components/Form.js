import React, {useState, useEffect} from 'react'

const Form = props => {
    const [form, setForm] = useState({})

    useEffect(() => {
        setForm({...props.initialState})
    }, [props.initialState])

    const onSubmitHandler = e => {
        e.preventDefault();
        props.callback(form);
    }
    
    return (
        <div className='container col-6'>
            <h1 className='mb-3'>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <input className='form-control' defaultValue={form.name} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} type='text' placeholder='Name' name='name' />
                </div>
                <div className='form-group'>
                    <input className='form-control' defaultValue={form.price} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} type='number' placeholder='Price' name='price' />
                </div>
                <div className='form-group'>
                    <input className='form-control' defaultValue={form.description} onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} type='text' placeholder='Description' name='description' />
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;