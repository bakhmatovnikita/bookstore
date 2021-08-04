import React, { useEffect, useState } from 'react';
import AddForm from '../item-form/item-form';
import ItemList from '../item-list/item-list'
import './app.css'


const App = () => {
    const [data, setData] = useState([
        {
            label: "Orlando: A Biography",
            autor: "Virginia Woolf",
            yearOfPublish: "1928",
            pages: "134",
            id: 1
        },
        {
            label: "The Little Prince",
            autor: "Antoine de Saint-Exupéry",
            yearOfPublish: "1943",
            pages: "158",
            id: 2
        },
        {
            label: "Wide Sargasso Sea",
            autor: "Jean Rhys",
            yearOfPublish: "1966",
            pages: "134",
            id: 3
        },
    ])
    const [maxId, setMaxId] = useState(data.length)

    const addItem = (label, autor, yearOfPublish, pages) => {
        if (!(label === "")) {
            const newItem = {
                label: label,
                autor: autor,
                yearOfPublish: yearOfPublish,
                pages: pages,
                id: maxId + 1,
            }
            const newArr = [...data, newItem]
            setData(newArr)
            setMaxId(maxId + 1)
        }
    }
    const deleteItem = (id) => {
        const idx = data.findIndex(el => el.id === id);

        const before = data.slice(0, idx)
        const after = data.slice(idx + 1)

        const newArray = [...before, ...after]
        setData(newArray)
    }

    const handleEdit = (item) => {
        const newData = [...data].map((element) => {
            return element.id === item.id ? item : element;
        })
        setData(newData)
    }

    return (
        <div className="bookApp">
            <h1>Book App</h1>
            <div className="wrapper">
                <AddForm onItemAdded={addItem} />
                <ItemList onEdit={handleEdit} data={data} onDeleted={deleteItem} />
            </div>
        </div>
    )
};

export default App;