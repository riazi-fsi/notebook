import React from 'react'

function NoteItem({items,focus}) {
  console.log(items,focus)
  return (

    <div className='flex justify-center'>
        {items.length>0? items.map((item)=>(
            <p className='m-4 p-2' style={{backgroundColor:item.bgColor}} key={item.id}>{item.note} </p>
        )):
        focus && <div> Note Not Found</div>
        }
    </div>
  )
}

export default NoteItem