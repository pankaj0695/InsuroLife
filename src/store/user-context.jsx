import { createContext, useState } from 'react';

const initialState = {
  type: '',
  data: {},
};

export const UserContext = createContext({
  user: initialState,
  login: (token, userType, userData) => {},
  logout: () => {},
});

const UserProvider = props => {
  const [user, setUser] = useState(initialState);

  const login = (token, userType, userData) => {
    setUser({ type: userType, data: userData });
    localStorage.setItem('auth-token', token);
  };

  const logout = () => {
    setUser(initialState);
    localStorage.removeItem('auth-token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
