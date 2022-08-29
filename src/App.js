import React from 'react'
import Content from './components/Content'
import Header from './components/Header'
import NoteInput from './components/NoteInput'

function App() {
  return (
    <div className='container flex justify-center items-center flex-col m-auto'>
      <Header />
      <Content/>
      <NoteInput />
    </div>
  )
}

export default App