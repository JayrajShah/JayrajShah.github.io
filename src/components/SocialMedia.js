import React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Container,
  IconButton,
  ButtonBase,
} from "@material-ui/core";
import {
  Instagram,
  YouTube,
  LinkedIn,
  GitHub,
  Twitter,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Anton",
    letterSpacing: "10px",
    color: "#FBD630",
  },
  mediaLink: {
    padding: theme.spacing(1),
    borderRadius: 5,
  },
  icon: {
    fontSize: 25,
    marginRight: theme.spacing(1),
  },
  titleContainer: {
    flex: 1,
  },
  iconContainer: {
    flex: 1,
  },
}));

const SocialMedia = () => {
  const classes = useStyles();

  const onClickHandlers = (url) => {
    window.open(url, "_blank");
  };

  const LinkItem = ({ title, icon, url }) => (
    <ButtonBase
      className={classes.mediaLink}
      onClick={() => {
        onClickHandlers(url);
      }}
    >
      {icon()}
      <Typography>{title}</Typography>
    </ButtonBase>
  );

  return (
    <Grid
      style={{
        height: "auto",
        backgroundColor: "#242424",
        margin: "1rem",
      }}
    >
      <Container className={classes.root}>
        <Grid className={classes.titleContainer}>
          <Typography variant="h2" className={classes.title}>
            FIND
          </Typography>
          <Typography variant="h2" className={classes.title}>
            ME
          </Typography>
          <Typography variant="h2" className={classes.title}>
            ON
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          className={classes.iconContainer}
        >
          <LinkItem
            title="Instagram"
            url="https://www.instagram.com/jjs_straight_outta_hell/"
            icon={() => (
              <Instagram
                fontSize="inherit"
                color="primary"
                className={classes.icon}
              />
            )}
          />
          <LinkItem
            title="YoTube"
            url="https://www.youtube.com/channel/UCEcqK6Qi_r8Wvg86UaVV3CQ"
            icon={() => (
              <YouTube
                fontSize="inherit"
                color="primary"
                className={classes.icon}
              />
            )}
          />
          <LinkItem
            title="LinkedIn"
            url="https://www.linkedin.com/in/jjs1999/"
            icon={() => (
              <LinkedIn
                fontSize="inherit"
                color="primary"
                className={classes.icon}
              />
            )}
          />
          <LinkItem
            title="GitHub"
            url="https://github.com/JayrajShah"
            icon={() => (
              <GitHub
                fontSize="inherit"
                color="primary"
                className={classes.icon}
              />
            )}
            fontSize="inherit"
            color="primary"
            className={classes.icon}
          />
          <LinkItem
            title="Twitter"
            url="https://twitter.com/JAYRAJC5"
            icon={() => (
              <Twitter
                fontSize="inherit"
                color="primary"
                className={classes.icon}
              />
            )}
            fontSize="inherit"
            color="primary"
            className={classes.icon}
          />
        </Grid>
      </Container>
    </Grid>
  );
};

export default SocialMedia;
