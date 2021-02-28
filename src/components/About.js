import React from "react";
import { iconList } from "./myIcons";
import {
  Typography,
  Grid,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import "./aboutStyle.css";
import profilePic from "../assets/pro-min.png";

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    // paddingTop: theme.spacing(3),
    // paddingBottom: theme.spacing(3),
    height: "50%",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid style={{ height: "100vh", backgroundColor: "#242424" }}>
      <Grid className={classes.about}>
        <Grid container direction="column">
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
              ABOUT ME
            </Typography>
          </Grid>
          <Grid className="about__aboutMe">
            <Grid>
              <img
                src={profilePic}
                alt="Profile"
                className="about__profilePic"
              />
            </Grid>
            <Grid item>
              <Typography>
                I'm a FullStack developer with vast array of knowledge in
                different FrontEnd and BackEnd technologies. My objective is to
                be the best in what I do and help others in growing and
                expanding their presence on the online platform.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.about}>
        <Grid container direction="column">
          <Grid container justify="center" style={{ width: "100%" }}>
            <Typography
              variant="h4"
              style={{
                fontFamily: "Anton",
                color: "#FBD630",
                letterSpacing: "0.1em",
                marginBottom: "1em",
              }}
            >
              MY SKILLS
            </Typography>
          </Grid>
          <Grid className="about__skillContainer">
            {iconList.map((icon) => (
              <Grid key={icon.name} className="about__iconContainer">
                <Grid item className={classes.iconStyle}>
                  <icon.component />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{
                      color: "#efefef",
                    }}
                  >
                    {icon.name}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
