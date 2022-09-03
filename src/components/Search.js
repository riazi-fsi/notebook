import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setSearchText } from '../redux/notes/noteSlice'

function Search() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state => state.setSearchText))
  const handleChange = (e) => {
    const text = e.target.value;
    dispatch(setSearchText(text))
  }
  return (
    <div>
      <input type="text" className='mt-6 p-2 border border-purple-600'
        placeholder='search...'
        onChange={handleChange}
        value={searchValue} />
    </div>
  )
}

export default Search