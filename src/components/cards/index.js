import React from "react";
import CardTemplate from "./CardTemplate.card";
// import dummyData from "../../assets/dummyPropertyData.json";
import { Grid } from "@mui/material";
import { PropertyContext } from "../../App";


const CardIndex = () => {
  
  // reading context and using it to render cards/properties
  const {properties} = React.useContext(PropertyContext);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {properties.map((record, pos) => {
          return (
            <Grid
              key={pos}
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              {/* Displaying cards using template */}
              <CardTemplate property={record} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardIndex;
