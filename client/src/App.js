import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import AppRouter from './routes';
import store from './store';
import './styles';
const App = () => {
  return (
  <CookiesProvider>  
    <Provider store={ store }>
      <AppRouter/>
    </Provider>
  </CookiesProvider>
  )
}

export default App;
