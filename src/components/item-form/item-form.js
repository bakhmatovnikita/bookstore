import React, { useState } from 'react';
import './item-form.css';

const AddForm = ({ onItemAdded }) => {
    const [state, setState] = useState({
        label: '',
        autor: '',
        yearOfPublish: '',
        pages: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded(state.label, state.autor, state.yearOfPublish, state.pages)
        return setState({
            label: '',
            autor: '',
            yearOfPublish: '',
            pages: ''
        })
    }
    const onValueChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value })

    return (
        <form className="addForm" onSubmit={onSubmit} >
            <input value={state.autor} name="autor" type="text" placeholder="Autor" onChange={onValueChange}></input>
            <input value={state.yearOfPublish} name="yearOfPublish" type="text" placeholder="Year of publication" onChange={onValueChange}></input>
            <input value={state.label} name="label" type="text" placeholder="Name" onChange={onValueChange}></input>
            <input value={state.pages} name="pages" type="text" placeholder="Pages" onChange={onValueChange}></input>
            <button>Add</button>
        </form>
    )
}

export default AddForm