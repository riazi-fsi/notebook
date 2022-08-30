import React from 'react'

function NoteItem({items,focus}) {
  return (
    <div>
        {items.length>0? items.map((item)=>(
            <div style={{backGroundColor:item.bgColor}} key={item.id}>{item.note} </div>
        )):
        focus && <div> Note Not Found</div>
        }
    </div>
  )
}

export default NoteItem