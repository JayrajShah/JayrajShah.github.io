// import React from 'react';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// export default function SignUp() {
//   const classes = useStyles();

//   return (

//   );

import React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Link,
  Box,
  Container,
} from "@material-ui/core";

import Title from "./Title";
import SocialMedia from "./SocialMedia";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Anton",
    letterSpacing: "1px",
    color: "#242424",
    width: "20%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  input: {
    color: "#efefef",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid
      style={{
        minHeight: "95vh",
        backgroundColor: "#242424",
      }}
      id="contact"
    >
      <Grid container direction="column">
        <Title sectionTitle="GET IN TOUCH" />
        <Grid>
          <Container component="main">
            <CssBaseline />
            <div className={classes.paper}>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      multiline
                      name="message"
                      label="Message"
                      type="text"
                      id="message"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </form>
            </div>
          </Container>
        </Grid>
        <SocialMedia />
      </Grid>
    </Grid>
  );
};

export default Contact;
