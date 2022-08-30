import React from 'react'
import NoteItem from './NoteItem'
import { useSelector } from 'react-redux'
function Content() {
  let items = useSelector((state) => state.items)
  let filterNotes = items;
  const searchText = useSelector((state) => state.searchText)
  if(searchText && searchText!==''){
    filterNotes=filterNotes.filter((note)=>note.note.toLowercase().includes.searchText.toLowercase())
  }else{
    filterNotes=items
  }
  return (
    <div>
      <NoteItem items={filterNotes} focus={items.lenght>0} />
    </div>
  )
}

export default Content