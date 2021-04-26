import React from 'react';

const AppContainer = ({children}) => 
  <div style = {{margin: '60px'}} >
    {children}
  </div>

export const AppSubComp = {
  AppContainer
}