import React, { useState } from 'react';
import { Table } from '../../components';
import classNames from 'classnames';

const GameControl = (props) => {
  
  const [player, setPlayer] = useState(true);
  const [moves, setMoves] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [table, setTable] = useState(()=>{
    let temp_table = Array(props.size);
    for (let i = 0; i < props.size; i++){
      temp_table[i] = Array(props.size);
    }
    for (let row = 0; row < props.size; row++)
    {
      for (let col = 0; col < props.size; col++)
      {
        temp_table[row][col] = {
          value: '',
          isWinCell: false
        }
      }
    }
    return temp_table;
  });

  const onReplay = () => {
    setEndGame(false);
    setMoves([]);
    setPlayer(true);
    setTable(()=>{
      var temp_table = Array(props.size);
      for (let i = 0; i < props.size; i++){
        temp_table[i] = Array(props.size);
      }
      for (let row = 0; row < props.size; row++)
      {
        for (let col = 0; col < props.size; col++)
        {
          temp_table[row][col] = {
            value: '',
            isWinCell: false
          }
        }
      }
      return temp_table;
    });
  }

  return (
    <div className='game-container'>
      <div className={classNames('btn-replay', {hide: props.endGame})}>
        <button onClick={() => onReplay()}>Replay</button>
      </div>
      <div className='table-container'>
        <Table
        size={props.size}
        player={player} setPlayer={setPlayer} 
        moves={moves} setMoves={setMoves} 
        endGame={endGame} setEndGame={setEndGame}
        table={table} setTable={setTable}/>
      </div>
      <div className='player-container' >
      {
        endGame ?
        <div className='game-result'>
        {
          'Player ' + (player ? 'X' : 'O') + ' WIN'
        }
        </div> : 
        <div className='player-turn'>
          <div>
          {
            (player ? 'X' : 'O') + ' TURN'
          }
          </div>
          {
            <table className='table-content'>
              <tbody>
                <tr className='header-row'>
                  <th>Moves</th>
                  <th>Player</th>
                  <th>Row</th>
                  <th>Col</th>
                </tr>
                {
                  moves.map((move, move_index) => 
                    <tr key={move_index}>
                      <td>{move_index}</td>
                      <td>{move.player ? 'X' : 'O'}</td>
                      <td>{move.row}</td>
                      <td>{move.col}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          }
        </div>
      }
      </div>
    </div>
  )
}

export default GameControl;