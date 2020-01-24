import React from 'react'

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='robot search'
                onChange={searchChange} //when something changes, call the method searchChange()
            />
        </div>
    );
}
export default SearchBox