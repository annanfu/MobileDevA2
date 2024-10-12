import React, { createContext, useState } from "react";

// Create the context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [diet, setDiet] = useState([]);

  // Function to add a new activity
  const addActivity = (newActivity) => {
    setActivities((previousActivities) => [...previousActivities, newActivity]);
  };

  // Function to add a new diet entry
  const addDiet = (newDietEntry) => {
    setDiet((previousDiet) => [...previousDiet, newDietEntry]);
  };

  // Data and functions provided by the context
  const value = {
    activities,
    diet,
    addActivity,
    addDiet,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
