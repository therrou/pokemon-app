import React, { useState } from 'react'


export const Navbar = ({ filterPokemon }) => {

    const [value, setValue] = useState('')
    const [checked, setChecked] = useState('pokemon')


    const handleChange = (e) => {
        setValue(e.target.value.trim())
    }
    
    const handleRadioButton = (e) => {
        setChecked(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.length >= 2) {
            filterPokemon(checked.toLowerCase(), value.toLowerCase())
            setValue('')
        }
    }
    
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href='/' className="navbar-brand">Pokemon App </a>
                <form onSubmit={handleSubmit} className="d-flex search-form">
                <input 
                    className="form-control me-2" 
                    type="search"
                    onChange={handleChange}
                    value= {value} 
                    placeholder="Search for name or ability" 
                    aria-label="Search" />

                  <label htmlFor="name">Name</label>
                  <input
                     type="radio" 
                     onChange={handleRadioButton}
                     id="name" 
                     name="queryType" 
                     value="pokemon" 
                     defaultChecked />

                  <label htmlFor="ability">Ability</label>
                  <input 
                    type="radio" 
                    onChange={handleRadioButton}
                    id="ability" 
                    name="queryType" 
                    value="ability" />
                <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
