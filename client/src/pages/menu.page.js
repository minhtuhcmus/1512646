import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { Form, FormGroup, FormControl, Row, Col, Image } from 'react-bootstrap';
import { UserOnly } from '../hocs';
const MenuPage = ({user}) => {

  return(
    <div clasName='menu-root'>
      MenuPage
    </div>        
  );
}

export default UserOnly(MenuPage);