import { createContext, useState } from 'react';

export const CompareContext = createContext({
  idsToCompare: [],
  toggleId: () => {
    throw new Error('CompareProvider is missing');
  },
});

export function CompareProvider({ children }) {
  const [idsToCompare, setIdsToCompare] = useState([]);

  if (idsToCompare.length > 2) {
    throw new Error('More than 2 ids to compare');
  }

  const toggleId = (id) => {
    setIdsToCompare((prevIds) => {
      // if (prevIds.includes(id)) {
      //   return prevIds.filter((existingId) => existingId !== id);
      // } else if (prevIds.length < 2) {
      //   return [...prevIds, id];
      // } else {
      //   return prevIds; // Do not add more than 2 ids
      // }
      if (prevIds.includes(id)) {
        return prevIds.filter((existingId) => existingId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  return (
    <CompareContext.Provider value={{ idsToCompare, toggleId }}>
      {children}
    </CompareContext.Provider>
  );
}
