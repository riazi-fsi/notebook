import React from 'react'

function ColorButton({ bgColor, serBgColor }) {
  const colors = ["red", "yellow", "blue", "stone"];
  const handleClick = (e) => {
    serBgColor(e.target.value)
  }
  return (
    <div>
      {
        colors.map((color, index) => (
          <button onClick={ handleClick} value={color} key={index}
            className={` w-8 h-8 m-2  bg-${color}-600 ${color === bgColor ? "h-12" : null}`} />
        ))
      }
    </div>
  )
}

export default ColorButton