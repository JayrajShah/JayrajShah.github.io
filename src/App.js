import React, { useEffect } from "react";
import "./App.css";
import pic from "./assets/pic.png";
import Navbar from "./components/navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";
import ScrollReveal from "./components/ScrollReveal";
import { Link } from "react-scroll";

import {
  Typography,
  MuiThemeProvider,
  createMuiTheme,
  Grid,
  makeStyles,
  Button,
} from "@material-ui/core";
import Footer from "./components/Footer";

const themex = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#FBD630",
    },
  },
  typography: {
    fontFamily: [
      "Raleway",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "10%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "8vh",
    },
  },
  name: {
    fontFamily: "Anton",
    color: "#FBD630",
    letterSpacing: "0.1em",
    fontSize: "8vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: `13vw`,
    },
  },
  designation: {
    fontFamily: "Anton",
    color: "#efefef",
    letterSpacing: "0.32em",
    fontSize: "3vw",

    [theme.breakpoints.down("sm")]: {
      fontSize: "4vw",
    },
  },
}));

function App() {
  const classes = useStyles();
  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 1000,
      distance: "10px",
      scale: 1,
      easing: "ease",
    };
    ScrollReveal.reveal(
      `.${classes.name}`,
      Object.assign({ delay: 50 }, config)
    );
    ScrollReveal.reveal(
      `.${classes.designation}`,
      Object.assign({ delay: 250 }, config)
    );
  }, []);

  const handleClick = (event) => {
    let pageHeight;

    pageHeight = window.innerHeight;
    window.scrollTo(0, pageHeight + pageHeight);
  };

  // console.log("Inner Width: ", window.innerWidth);

  return (
    <MuiThemeProvider theme={themex}>
      <Grid style={{ backgroundColor: "#242424", height: "100vh" }}>
        <Navbar />
        <Grid className="landing-container">
          <Grid item className="jay-container">
            <img src={pic} className="jay-pic" alt="logo" />
          </Grid>
          <Grid item className={classes.title}>
            <Typography className={classes.name}>JAYRAJ SHAH</Typography>
            <Typography className={classes.designation}>
              DEVELOPER & DESIGNER
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="center"
          className="scroll-btn"
        >
          <Link to="work" spy={true} smooth={true}>
            <Button
              variant="outlined"
              size="large"
              style={{
                fontFamily: "Anton",
                letterSpacing: "1px",
                color: "#242424",
                borderColor: "#FBD630",
                borderRadius: "50px",
                backgroundColor: "#FBD630",
              }}
            >
              My Work
            </Button>
          </Link>
        </Grid>
      </Grid>
      <About />
      <Work />
      <Contact />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
