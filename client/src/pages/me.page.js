import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { Form, FormGroup, FormControl, Row, Col, Image } from 'react-bootstrap';
import { UserOnly } from '../hocs';
const MePage = ({user}) => {

  const [gamePlaying, setGamePlaying] = useState(false);

  return(
    <div>
      {
        user.username
      }
    </div>
  );
}
const mapStateToProps = (state) => ({
}); 

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOnly(MePage));