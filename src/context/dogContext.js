
import React, { createContext, useState } from "react";

export const DogContext = createContext();
export const DogProvider = ({children}) => {

  const [ dogData, setDogData ] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  return (
    <DogContext.Provider value={{ dogData, setDogData, recentSearches, setRecentSearches }}>
      { children }
    </ DogContext.Provider>
  )
}