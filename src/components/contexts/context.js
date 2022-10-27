import { createContext, useEffect, useState } from "react";

export const CardInfoContext= createContext({});

function Provider({ children }) {
  const [cards, setCards] = useState(['A', 'T']);
  const [InfoHero, setInfohero] = useState (['0', 'BB'])
  const [hits, setHits] = useState('')
  
  
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

export default Provider;