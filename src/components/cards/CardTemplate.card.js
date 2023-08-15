import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import { Badge, Grid } from "@mui/material";

const CardTemplate = ({ property }) => {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        {/* image */}
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={property.imageURL}
        />

        <CardContent
          sx={{
            maxWidth: 300,
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
          }}
          >
          {
            property.size>1500 && property.price<1500 &&
          
          (<Badge sx={{
            background:'#de145b',
            color:"white",
            textAlign:'center',
            width:'25%',
            padding:"5px 10px",
            borderRadius:"50px",
            fontWeight:700
          }}>popular</Badge>)
        }
          <span
            style={{
              display: "flex",
              flex: "1 0 auto",
              alignItems: "flex-start",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:800}}>
              ${property.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {property.location}
            </Typography>

          </span>

          {/* Icons with info */}
          <Grid container justifyContent="space-around" spacing={1}
          sx={{
            padding:'0px',
            margin:'0px',
            color:'secondary',
            fontWeight:700,
          }}>
            <Grid item xs={3}>
              <BedroomChildIcon sx={{color:"#de145b"}} /> {property.bedrooms}
            </Grid>
            <Grid item xs={3}>
              <BathtubIcon sx={{color:"#de145b"}} /> {property.bathrooms}
            </Grid>
            <Grid item xs={4}>
              <SettingsEthernetIcon sx={{color:"#de145b"}} /> {property.size}ft<sup>2</sup>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
    </>
  );
};

export default CardTemplate;
