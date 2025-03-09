import React from "react";
import { Grid, AppBar, Toolbar, Link } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#d27719d9" }}>
      <Toolbar style={{justifyContent: 'space-evenly', alignContent: 'space-around'}}>
       <Grid item xs={3}>
        <Link href="#" underline="none" style={{color: 'inherit'}}>
            Home
        </Link>
       </Grid>
       <Grid item xs={3}>
        <Link href="#combo" underline="none" style={{color: 'inherit'}}>
            Combo
        </Link>
       </Grid>
       <Grid item xs={3}>
        <Link href="#pizza" underline="none" style={{color: 'inherit'}}>
            Pizza
        </Link>
       </Grid>
       <Grid item xs={3}>
        <Link href="#orderDetail" underline="none" style={{color: 'inherit'}}>
            Order Detail
        </Link>
       </Grid>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
