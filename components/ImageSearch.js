import React, { useState } from "react";

import './ImageSearch.css';

const ImageSearch = ({searchText}) => {
    const[text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    
        searchText(text);
    }
    return(
        <div class="search-container">
            <form onSubmit={onSubmit}>
                <input onChange={e => setText(e.target.value)} type="text" placeholder="Search.." name="search" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
} 

export default ImageSearch