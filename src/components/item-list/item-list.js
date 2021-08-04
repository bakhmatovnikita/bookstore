import React from 'react';
import './item-list.css';
import ItemDetails from '../item-details/item-details';

const ItemList = ({ data, onEdit, onDeleted }) => {
    return (
        <ul>
            {data.map(item => {
                const { id } = item;
                return (
                    <li key={id} className="ListItem" key={id}>
                        <ItemDetails onEdit={onEdit} data={item} onDeleted={() => onDeleted(id)} />
                    </li>
                )
            })}
        </ul>
    )
}

export default ItemList;