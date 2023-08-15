import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {

  // state for mobile responsive menu
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navigate = useNavigate();

  return (
    <div>
      <AppBar
        component="nav"
        sx={{ position: "relative", marginBottom: "1%", background: "#de145b" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <img
              src={"/menu.png"}
              alt={"Hamburger Menu"}
              style={{ fontSize: "10px" }}
              width="25"
              height="25"
            />{" "}
            &ensp; Property Rental
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Property Rental
          </Typography>
          {/* Nav Menu list */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              key={"home"}
              sx={{ color: "#fff" }}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile Responsive Menu Drawer */}
      <Box component="nav" sx={{ position: "relative", marginBottom: "" }}>
        <Drawer
          container={
            window !== undefined ? () => window.document.body : undefined
          }
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              background: "#de145b",
              color: "white",
            },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", background: "#de145b" }}    
          >
            <Typography variant="h6" sx={{ my: 2 }}>
              Property Rental
            </Typography>
            <Divider sx={{ color: "white" }} />
            <List>
              <ListItem key={"home"} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={() => navigate("/")}
                >
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
};

export default Menu;
