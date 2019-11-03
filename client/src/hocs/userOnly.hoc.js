import React from 'react';
import { connect } from 'react-redux';

const userOnly = (MyComponent) => {
  return (
    <MyComponent/>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated
}); 

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(userOnly);