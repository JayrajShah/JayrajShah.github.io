import React from "react";
import { Typography, Grid } from "@material-ui/core";

const Title = ({ sectionTitle }) => {
  return (
    <Grid container justify="center" style={{ width: "100%" }}>
      <Typography
        variant="h4"
        style={{
          fontFamily: "Anton",
          color: "#FBD630",
          letterSpacing: "0.1em",
          marginBottom: ".5em",
          marginTop: ".5em",
        }}
      >
        {sectionTitle}
      </Typography>
    </Grid>
  );
};

export default Title;
