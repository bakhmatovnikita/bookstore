import React, { useEffect, useState } from 'react';
import './edit.css';

const Edit = ({ data, setEdit, onSubmit }) => {

    const [dataEdit, setDataEdit] = useState({
        label: '',
        autor: '',
        yearOfPublish: '',
        pages: '',
        edit: true,
        id: data.id
    })

    const onValueEdit = e =>
        setDataEdit({...dataEdit, [e.target.name]: e.target.value})

    const toChangeStatus = (e) => {
        e.preventDefault();
        onSubmit(dataEdit)
    }

    return (
        <form className="editContainer">
            <input value={dataEdit.autor} name="autor" onChange={onValueEdit} className="inputEdit" type="text" placeholder={data.autor} />
            <input value={dataEdit.yearOfPublish} name="yearOfPublish" onChange={onValueEdit} className="inputEdit" type="text" placeholder={data.yearOfPublish} />
            <input value={dataEdit.label} name="label" onChange={onValueEdit} className="inputEdit" type="text" placeholder={data.label} />
            <input value={dataEdit.pages} name="pages" onChange={onValueEdit} className="inputEdit" type="text" placeholder={data.pages} />
            <button onClick={toChangeStatus}>Done</button>
            <button onClick={setEdit}>Cancel</button>
        </form>
    )
};

export default Edit