import React, {useReducer, useMemo} from 'react';

const initialState = {
  user: {},
};

const initialContext = [{...initialState}, () => {}];

export const UserContext = React.createContext(initialContext);

const updater = (state, update) => {
  return {...state, ...update};
};

export function UserController(props) {
  const [userState, updateUser] = useReducer(updater, initialState);
  const value = useMemo(() => [userState, updateUser], [userState]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}
