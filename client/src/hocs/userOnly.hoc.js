import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { Redirect, useHistory } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logout } from '../reducer/auth.reducer';
const UserOnly = (MyComponent) => {

  
  const UserWrapper = ({ logoutUser }) => {
    const history = useHistory();
    const cookies = new Cookies();  
    const curr_user = cookies.get('CURR_USER');
    console.log(curr_user);

    useEffect(() => {
      if(!curr_user){
        history.push('/login');      
      }
    });

    const handleLogout = () => {
      logoutUser();
      history.push('/login');
    }

    const renderNavBar = () => {
      return(
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown inline title={curr_user ? curr_user.username : ''} id="basic-nav-dropdown">
                <NavDropdown.Item href='/me'>Profile</NavDropdown.Item>
                <NavDropdown.Item 
                onClick={handleLogout}>Log out</NavDropdown.Item>  
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
      
    } 
    return (
      <div className='page-root'>
        {
          renderNavBar()
        }
        <MyComponent user={curr_user}/>
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated
  }); 
  
  const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logout())
  });

  return compose(
    connect(
      mapStateToProps,
      mapDispatchToProps 
    )
  )(UserWrapper)
}
  



export default UserOnly;