import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { GameControl } from './components';
import { UserOnly } from '../hocs';

const GamePage = () => {

  const [gamePlaying, setGamePlaying] = useState(false);
  const history = useHistory();
  const cookies = new Cookies();  
  
  const renderGamePage = () => {
    const curr_user = cookies.get('CURR_USER');
    if (curr_user){
      return <div className='game'>
      <GameControl size={20}/>
    </div>
    }
    else{
      history.push('/login');
    }
  }

  return(
    <>
    {
      renderGamePage()
    }
    </>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated
}); 

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOnly(GamePage));