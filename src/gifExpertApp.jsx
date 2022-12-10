
import { useState } from 'react';
import { AddCategory } from './components/addCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = (() => {
        setCategories([...categories, 'nuevo'])
    })

    return (
        <>
            <h1>Hola mundo desde gisExpertApp</h1>
            <AddCategory setCategories={ setCategories } />
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    )
}
