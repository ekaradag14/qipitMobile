import React, {createContext} from 'react';
import {Dimensions} from 'react-native';

export const DimensionsContext = createContext();

const DimensionsProvider = ({children}) => {
  const dimensions = ['sdfs'];

  return (
    <DimensionsContext.Provider dimensions={{dimensions}}>
      {children}
    </DimensionsContext.Provider>
  );
};

export default DimensionsProvider;

//TBC
