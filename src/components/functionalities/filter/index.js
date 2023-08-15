import React from "react";
import CardFilter from "./CardFilter";
import { PropertyContext } from "../../../App";
import data from "../../../assets/dummyPropertyData.json";

const FilterIndex = () => {
  const { properties, updateProperties } = React.useContext(PropertyContext);

  const applyFilter = (
    locations,
    availabilities,
    minPrice,
    maxPrice,
    propertyTypes
  ) => {
    // copying the dummy (shallow copy)
    let copyProps = [...data];

    // filtering only when atleast one location is specified
    if (locations.length !== 0) {
      copyProps = copyProps.filter((property) => {
        console.log(property.state, locations, property.state in locations);
        return locations.includes(property.state);
      });
      console.log(copyProps);
    }

    if (availabilities.length !== 0)
      copyProps = copyProps.filter((property) =>
        availabilities.includes(property.when)
      );

    copyProps = copyProps.filter(
      (property) => property.price >= minPrice && property.price <= maxPrice
    );

    if (propertyTypes.length !== 0)
      copyProps = copyProps.filter((property) =>
        propertyTypes.includes(property.property_type)
      );

    updateProperties(copyProps); // updating the filtered copied Properties
  };

  const clearFilter = () => {
    updateProperties(data); // updating properties to dummy initial data
  };

  return (
    <>
      <CardFilter applyFilter={applyFilter} clearFilter={clearFilter} />
    </>
  );
};

export default FilterIndex;
