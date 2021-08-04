import React, { useState } from 'react';
import './item-details.css';
import Edit from '../edit/edit';
import RenderDetails from '../render-details/render-details'


const ItemDetails = ({ data, onDeleted, onEdit }) => {
    const [edit, setEdit] = useState(false)

    const toggleEdit = () => setEdit(!edit)

    const handleSubmit = (item) => {
        onEdit(item)
        toggleEdit()
    }

    return (
        <div>
            {edit
                ? <Edit setEdit={toggleEdit} data={data} onSubmit={handleSubmit} toChangeEdit={edit} />
                : <RenderDetails setEdit={toggleEdit} deleteEl={onDeleted} data={data} />}
        </div>
    )
};

export default ItemDetails;