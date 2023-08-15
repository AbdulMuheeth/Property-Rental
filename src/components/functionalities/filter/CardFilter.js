import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import dummy from "../../../assets/dummyPropertyData.json";
import React from "react";

const CardFilter = ({ applyFilter, clearFilter }) => {
  // initial UI rendering state variables
  const [locations, setLocations] = React.useState([]);
  const [availability, setAvailability] = React.useState([]);
  const [propertyType, setPropertyType] = React.useState([]);
  const [priceFilterType, setPriceFilterType] = React.useState("none");
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(10000);

  // Filtered/User selected values
  const [filteredLocations, setFilteredLocations] = React.useState([]);
  const [filteredAvailability, setFilteredAvailability] = React.useState([]);
  const [filteredMinPrice, setFilteredMinPrice] = React.useState(minPrice);
  const [filteredMaxPrice, setFilteredMaxPrice] = React.useState(maxPrice);
  const [filteredPropertyTypes, setFilteredPropertyTypes] = React.useState([]);

  const handleClearFilter = () => {
    // Clearing in UI
    setFilteredLocations([]);
    setFilteredAvailability([]);
    setFilteredPropertyTypes([]);
    setFilteredMinPrice(minPrice);
    setFilteredMaxPrice(maxPrice);

    //Restoring Dummy Data
    clearFilter();
  };

  // fetching the and updating the (UI) filter Options Data
  React.useEffect(() => {
    // locations
    let tempStatesList = dummy.map((st) => st.state);
    setLocations([...new Set(tempStatesList)]);

    // availability
    let tempAvList = dummy.map((av) => av.when);
    setAvailability([...new Set(tempAvList)]);

    // property type
    let tempPropertyList = dummy.map((propType) => propType.property_type);
    setPropertyType([...new Set(tempPropertyList)]);

    // prices
    let min = 10000,
      max = 0;
    dummy.map((record) => {
      if (record.price < min) min = record.price;
      if (record.price > max) max = record.price;
      return "";
    });
    setMinPrice(min);
    setFilteredMinPrice(min);
    setMaxPrice(max);
    setFilteredMaxPrice(max);
  }, []);

  return (
    <div>
      <Grid container>
        {/* Filter for location */}
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={10}
          sm={6}
          md={3}
        >
          <Autocomplete
            multiple
            id="tags-standard"
            options={locations}
            value={filteredLocations}
            onChange={(e, values) => {
              setFilteredLocations(values);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Location"
                placeholder="Location"
              />
            )}
          />
        </Grid>

        {/* filter for when/availability of property */}
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={10}
          sm={6}
          md={3}
        >
          <Autocomplete
            multiple
            id="tags-standard"
            options={availability}
            value={filteredAvailability}
            onChange={(e, values) => {
              setFilteredAvailability(values);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="When"
                placeholder="When"
              />
            )}
          />
        </Grid>

        {/* Filter for specifying the price range */}
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "20px 10px" }}
        >
          <TextField
            select
            value={priceFilterType}
            onChange={(e) => setPriceFilterType(e.target.value)}
            label="Price"
            variant="outlined"
          >
            <MenuItem value="none">
              ${filteredMinPrice} - ${filteredMaxPrice}
            </MenuItem>
            <MenuItem value="price">Select Range</MenuItem>
            {/* Add more filter options as needed */}
          </TextField>
          {priceFilterType === "price" && (
            <>
              {/* Grid to layout the Price min and max  */}
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ margin: "30px 5px" }}
              >
                <Grid item xs={6}>
                  <TextField
                    label="Min Price"
                    value={filteredMinPrice}
                    onChange={(e) => setFilteredMinPrice(e.target.value)}
                    type="number"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 10000 } }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Max Price"
                    value={filteredMaxPrice}
                    onChange={(e) => setFilteredMaxPrice(e.target.value)}
                    type="number"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 10000 } }}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>

        {/* filter for property Type */}
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          xs={10}
          sm={6}
          md={4}
        >
          <Autocomplete
            multiple
            id="tags-standard"
            options={propertyType}
            value={filteredPropertyTypes}
            onChange={(e, values) => {
              setFilteredPropertyTypes(values);
            }}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Property Type"
                placeholder="Property Type"
              />
            )}
          />
        </Grid>

        {/* Filter Apply and Clear Filter options */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "15px 5px" }}
        >
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            xs={10}
            sm={6}
            md={3}
            sx={{margin:"5px"}}
          >
            <Button
              variant="contained"
              onClick={() =>
                applyFilter(
                  filteredLocations,
                  filteredAvailability,
                  filteredMinPrice,
                  filteredMaxPrice,
                  filteredPropertyTypes
                )
              }
            >
              Apply
            </Button>
          </Grid>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            xs={10}
            sm={6}
            md={3}
            sx={{margin:"5px"}}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => handleClearFilter()}
            >
              Clear Filters
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardFilter;
