import React from 'react'

export const ButtonPagination = ({text, pagination}) => {

   
    return (
        <>
            <button 
                type="button" 
                onClick={pagination}
                className="btn btn-danger"> 
                {text}
            </button>
        </>
    )
}
