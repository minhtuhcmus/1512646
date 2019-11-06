import React from 'react';

const Cell = props => {

  const xStyle = { color: '#ff0000'};
  const oStyle = { color: '#00ff00'};
  const cellClass = `cell ${props.isWinCell ? 'win' : ''}`;  


  return(
    <button className={cellClass} onClick={props.onClick} style={props.value==='X'?xStyle:oStyle}>
      {
        props.value
      }
    </button>
  )
}

export default Cell;