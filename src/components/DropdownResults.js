import React from 'react'
import { useState } from 'react/cjs/react.development'

export const DropdownResults = ({setResults}) => {
    const [value, setValue] = useState('Show Results')

    const handleChange = (e) => {
        setResults(e.target.value)
        setValue('Show Results')
    }
    return (
        <>
            <select onChange={handleChange}  className="form-select" aria-label="Default select example">
                <option value='10'> {value}</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </>
    )
}
