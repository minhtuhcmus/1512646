
import React, { useState } from 'react' 
import { Cell } from '../../components';
import className from 'classnames';
const Table = props => {

  const _checkArray = (arr) => {
    console.log('arr', arr);
    const char = props.player ? 'X' : 'O';
    for(let i = 0; i < arr.length - 4; i++)
    {
      if(props.table[arr[i].row][arr[i].col].value === char &&
        props.table[arr[i+1].row][arr[i+1].col].value === char &&
        props.table[arr[i+2].row][arr[i+2].col].value === char &&
        props.table[arr[i+3].row][arr[i+3].col].value === char &&
        props.table[arr[i+4].row][arr[i+4].col].value === char)
      {
        if(i > 0 && i < props.size - 5){
          if(props.table[arr[i-1].row][arr[i-1].col].value === char ||
            props.table[arr[i+5].row][arr[i+5].col].value === char ||
            props.table[arr[i-1].row][arr[i-1].col].value === '' ||
            props.table[arr[i+5].row][arr[i+5].col].value === '') {
            
              // var temp_table = Array(props.size);
              // for (let i = 0; i < props.size; i++){
              //   temp_table[i] = Array(props.size);
              // }
              // for (let row = 0; row < props.size; row++)
              // {
              //   for (let col = 0; col < props.size; col++)
              //   {
              //     temp_table[row][col] = { value: props.table[row][col].value, isWinCell: props.table[row][col].isWinCell };
              //   }
              // }              

            const temp_table = props.table.slice();  

            temp_table[arr[i].row][arr[i].col].isWinCell = true;
            temp_table[arr[i+1].row][arr[i+1].col].isWinCell = true;
            temp_table[arr[i+2].row][arr[i+2].col].isWinCell = true;
            temp_table[arr[i+3].row][arr[i+3].col].isWinCell = true;
            temp_table[arr[i+4].row][arr[i+4].col].isWinCell = true;
            console.log('temp table', temp_table);
            props.setTable(temp_table);
            return true;

          }
          else return false;
        }
        else if(i===0)
        {
          if(props.table[arr[i+5].row][arr[i+5].col].value !== char) {

              let temp_table = Array(props.size);
              for (let i = 0; i < props.size; i++){
                temp_table[i] = Array(props.size);
              }
              for (let row = 0; row < props.size; row++)
              {
                for (let col = 0; col < props.size; col++)
                {
                  temp_table[row][col] = { value: props.table[row][col].value, isWinCell: props.table[row][col].isWinCell };                  
                }
              }              

            temp_table[arr[i].row][arr[i].col].isWinCell = true;
            temp_table[arr[i+1].row][arr[i+1].col].isWinCell = true;
            temp_table[arr[i+2].row][arr[i+2].col].isWinCell = true;
            temp_table[arr[i+3].row][arr[i+3].col].isWinCell = true;
            temp_table[arr[i+4].row][arr[i+4].col].isWinCell = true;
            
            props.setTable(temp_table);
            return true;
          }
          else return false;
        }
        else if(i === props.size -5)
        {
          if(props.table[arr[i-1].row][arr[i-1].col].value !== char) {
            let temp_table = Array(props.size);
              for (let i = 0; i < props.size; i++){
                temp_table[i] = Array(props.size);
              }
              for (let row = 0; row < props.size; row++)
              {
                for (let col = 0; col < props.size; col++)
                {
                  temp_table[row][col] = { value: props.table[row][col].value, isWinCell: props.table[row][col].isWinCell };
                }
              }              

            temp_table[arr[i].row][arr[i].col].isWinCell = true;
            temp_table[arr[i+1].row][arr[i+1].col].isWinCell = true;
            temp_table[arr[i+2].row][arr[i+2].col].isWinCell = true;
            temp_table[arr[i+3].row][arr[i+3].col].isWinCell = true;
            temp_table[arr[i+4].row][arr[i+4].col].isWinCell = true;
            
            props.setTable(temp_table);
            return true;
          }
          else return false;
        }
      }
    }
    return false;
  }

  const _checkWin_Row = (row) => {
    const _row = [];

    for(let i = 0; i < props.size; i++){
      _row.push({row: row, col: i});
    }
    return _checkArray(_row);
  }
  
  const _checkWin_Col = (col) => {
    const _col = [];

    for(let i = 0; i < props.size; i++){
      _col.push({row: i, col: col});
    }
    return _checkArray(_col);
    
  }

  const _checkWin_Dia_Left = (line) => {
    if(line < 4 || line > 2*props.size-6) return false;
    const _line = [];
    for(let i = (line < props.size ? 0 : line - props.size + 1); i < (line < props.size ? line+1 : props.size); i++)
    {
      _line.push({row: i, col: line-i});
    }
    return _checkArray(_line);
  }

  const _checkWin_Dia_Right = (line) => {
    if(line <= -(props.size-4) || line >= props.size-4) return false;
    const _line = [];
    for(let i = (line < 0 ? 0 : line); i < (line < 0 ? props.size + line : props.size ); i++){
      _line.push({row: i, col: i-line})
    }
    return _checkArray(_line);
  }



  const _checkWin = (row, col) => {
    const line = Number(row) + Number(col);
    const _line = Number(row) - Number(col);
    return (_checkWin_Row(row) || _checkWin_Col(col) || _checkWin_Dia_Left(line) || _checkWin_Dia_Right(_line));
  }

  const handleClick = (row_index, i) => {
    if(props.table[row_index][i].value === ''){
      const temp_table = props.table.slice();
      temp_table[row_index][i].value = props.player ? 'X' : 'O';
      const temp_moves = props.moves.slice();
      temp_moves.push({ 
        player: props.player, 
        row: row_index, 
        col: i
      });
      props.setMoves(temp_moves);
      props.setTable(temp_table);      
      
      if(_checkWin(row_index, i)){
        console.log('win table', props.table);
        props.setEndGame(true);
        console.log('after set endGame', props.table);
        console.log('player', props.player);
        console.log('moves', props.moves);
        return;
      }
      props.setPlayer(!props.player);
    }
    
    // console.log('table', temp_table);
  }

  const renderTable = size =>
  <div className='table'>
    {
      props.table.map((row, row_index) => 
      <div className='table-row' key={row_index}>
        {
          row.map((cell, i) => 
            <Cell key={i} value={cell.value} isWinCell={cell.isWinCell} onClick={() => handleClick(row_index, i)}/>
          )
        }  
      </div>
      )
    }  
  </div>

  return renderTable(props.size);
}

export default Table;