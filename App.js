/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainNavigator from './src/Navigation/MainNavigator';
import {UserContext} from './src/Context/UserContext';
const App = () => {
  return (
    <UserContext.Provider >
      <MainNavigator />
    </UserContext.Provider>
  );
};

export default App;
