import { createContext, useState, useEffect } from 'react';

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
    localStorage.setItem('user-type', userType);
    localStorage.setItem('user-id', userData._id);
  };

  const logout = () => {
    setUser(initialState);
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-type');
    localStorage.removeItem('user-id');
  };

  useEffect(() => {
    const fetchUser = async () => {
      const role = localStorage.getItem('user-type');
      const id = localStorage.getItem('user-id');
      if (!role) return;
      const response = await fetch('http://localhost:4000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role, id }),
      });

      const userData = await response.json();
      setUser({ type: role, data: userData });
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
