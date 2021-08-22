import React from 'react'
import { SearchBar } from './search.styles';

export const Search = ({placeholder,handlechange})=>{
    return <SearchBar>
        <input 
        type="search" 
        placeholder={placeholder}
        onChange={handlechange}
        />
    </SearchBar>
}