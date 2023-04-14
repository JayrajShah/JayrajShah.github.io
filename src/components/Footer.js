import React from "react";
import { Typography, Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid
      style={{
        minHeight: "5vh",
        backgroundColor: "#242424",
      }}
      container
      justify="center"
    >
      <Typography variant="body1" style={{ color: "#FBD630" }} component="p">
        Jayraj Shah © 2020-Infinity. All Rights Reserved.
      </Typography>
    </Grid>
  );
};

export default Footer;
