import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true); // Lägg till isLoading-variabeln

  useEffect(() => {
      axios.get('/profile').then(({ data }) => {
        setUser(data);
        // setIsLoading(false); // Användarinformationen har laddats
      });

  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
