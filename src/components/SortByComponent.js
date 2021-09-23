import React from 'react'

export const SortByComponent = ({setSort}) => {


    const handleChange = (e) => {
        setSort(e.target.value)
    }
 
    return (
        <>
               <select data-testid='selectSort' onChange={handleChange}  className="form-select" aria-label="Default select example">
                    <option value="name">Sort by ID</option>
                    <option value='id'> Sort by ID desc.</option>
                    <option value="height">Sort by Height asc.</option>
                    <option value="height_desc">Sort by Height desc.</option>
                    <option value="weight">Sort by Weight asc.</option>
                    <option value="weight_desc">Sort by Weight desc.</option>
                </select>
        </>
    )   
}
