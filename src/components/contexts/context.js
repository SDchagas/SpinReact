import { createContext, useEffect, useState } from "react";

export const CardInfoContext= createContext({});

function UserProvider({ children }) {
  const [cards, setCards] = useState(['A', 'T']);
  const [InfoHero, setInfohero] = useState ([])
  const [hits, setHits] = useState('')


   useEffect(() => {
     
   }, []);

  
  return (
    <CardInfoContext.Provider
      value={{
      cards, setCards, InfoHero, setInfohero, hits, setHits
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
}

export default UserProvider;