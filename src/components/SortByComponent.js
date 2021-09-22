import React from 'react'

export const SortByComponent = ({setSort}) => {


    const handleChange = (e) => {
        setSort(e.target.value)
    }
 
    return (
        <>
               <select onChange={handleChange}  className="form-select" aria-label="Default select example">
                    <option value="name">Sort by ID</option>
                    <option value='id'> Sort by ID Desc.</option>
                    <option value="z-a">Sort by name Z-A</option>
                    <option value="height">Sort by Height Asc.</option>
                    <option value="height-desc">Sort by Height Desc.</option>
                    <option value="weight">Sort by Weight Asc.</option>
                    <option value="weight-desc">Sort by Weight Desc.</option>
                </select>
        </>
    )   
}
