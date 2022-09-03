import React from 'react'

function ColorButton({ bgColor, setBgColor }) {
  const colors = ["red", "yellow", "blue", "orange"];
  const handleClick = (e) => {
    setBgColor(e.target.value)
  }
  return (
    <div>
      {
        colors.map((color, index) => (
          <button onClick={handleClick} value={color} key={index}
            className={` w-8 h-8 m-2  rounded-full bg-${color}-600 ${color === bgColor ? "h-12" : null}`} />
        ))
      }
    </div>
  )
}

export default ColorButton