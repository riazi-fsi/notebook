import { nanoid } from 'nanoid'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../redux/notes/noteSlice'
import ColorButton from './ColorButton'
function NoteInput() {
  const [text, setText] = useState('')
  const [bgColor, setBgColor] = useState('red')
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const addNewNote = () => {
    if (text === "") {
      alert("Enter Somthings")
      return
    }
    if(text.length > 0){
      setText('')

    }
    const note = items.filter(item => item.note === text)
    if (note.length > 0) {
      alert("This Note Exists in the store")
      return
    }
    dispatch(addNote({ id: nanoid(5), note: text, bgColor }))
  }
  return (
    <div className='w-full h-60 shadow-md shadow-gray-700'>
      <textarea className='w-full h-60 p-2' value={text}
        onChange={e => setText(e.target.value)}
        placeholder='Enter Your Note Here' />
      <ColorButton setBgColor={setBgColor} bgColor={bgColor} />
      <button className='bg-green-700 m-2 p-4 font-bold text-white w-32 rounded-md ' onClick={addNewNote}>Add</button>

    </div>
  )
}

export default NoteInput