import CardIndex from "./components/cards";
import { useStyles } from "./assets/styles";
import FilterIndex from "./components/functionalities/filter";
import dummyData from "./assets/dummyPropertyData.json";
import { useCallback, useState, createContext, useMemo } from "react";
import Menu from "./components/menu/Menu";

// Context: to store the dummy data
export const PropertyContext = createContext({
  properties: [],
  updateProperties: () => {},
});

function App() {
  const classes = useStyles();
  const [properties, setProperties] = useState(dummyData);

  const updateProperties = useCallback(
    (data) => {
      setProperties(data);
    },
    [dummyData]
  );

  // setting up dummy data into the context.
  const contextValue = useMemo(
    () => ({ properties, updateProperties }),
    [properties, updateProperties]
  );

  return (
    <PropertyContext.Provider value={contextValue}>
      {/* Navigation Menu/Header */}
      <Menu />
      <div className={`App ${classes.cardWrapper}`}>
        {/* Filter */}
        <FilterIndex />
        {/* Cards */}
        <CardIndex />
      </div>
    </PropertyContext.Provider>
  );
}

export default App;
