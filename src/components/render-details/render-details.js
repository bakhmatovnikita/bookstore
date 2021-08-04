import React from 'react';
import './render-details.css';


const RenderDetails = ({ data, deleteEl, setEdit}) => {
    const { label, autor } = data;

    return (
        <div className="itemContainer">
            <span className="infoItems">
                <span>{autor} </span>
                <br />
                <span className="bookName"> {label}</span>
            </span>
            <span className="descriptions">
                <span className="autor" onClick={setEdit}><button>Edit</button></span>
                <span
                    className="autor"
                    onClick={deleteEl}>
                    <button className="deleteBook">Delete</button></span>
            </span>
        </div>
    )
}
export default RenderDetails;