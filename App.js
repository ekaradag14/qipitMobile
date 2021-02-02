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
    <UserContext.provider>
      <MainNavigator />
    </UserContext.provider>
  );
};

export default App;
