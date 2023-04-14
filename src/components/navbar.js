import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Container,
  ButtonBase,
  Grid,
  IconButton,
  Backdrop,
  Typography,
  Fade,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    color: "#fff",
  },
  navContainerWrapper: {
    height: "8vh",
    position: "fixed",
    width: "100%",
    zIndex: 3,
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: "1em",
    // zIndex: 0,
  },
  navListItem: {
    fontFamily: "Oswald",
    fontSize: "3.5vh",
    cursor: "pointer",
    color: "#efefef",
    "&:hover": {
      color: "#FBD630",
    },
  },
  navListMenuItem: {
    marginTop: "10vh",
    fontFamily: "Oswald",
    fontSize: "2.5vh",
    cursor: "pointer",
    color: "#242424",
    zIndex: 3,
  },
  hamIcon: {
    padding: "0.5rem",
    zIndex: 3,
    top: 0,
    right: 0,
    position: "absolute",
  },
  sideMenu: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "30em",
    height: "100vh",
    backgroundColor: "#FBD630",
    clipPath: "circle(0vw at 100% 0)",
    transition: "all 0.7s ease",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navList = ["about", "contact", "resume"];
  const [pageOffset, setPageOffset] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageOffset(window.pageYOffset);
    });
  }, []);
  //Handlers
  const handleClick = (event, item) => {
    if (item === "resume") {
      window.open("/resume.pdf", "_blank");
    }
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setBackdropOpen(!backdropOpen);
  };

  //Components
  const OpenBackdrop = () => {
    return <Backdrop className={classes.backdrop} open={backdropOpen} />;
  };

  const sideMenu = () => {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={1}
        className={classes.sideMenu}
        style={{ clipPath: `circle(${menuOpen ? "30" : "0"}em at 100% 0)` }}
      >
        {navList.map((item, index) => (
          <Grid item container justify="center" key={item + `${index}`}>
            <Link to={item} spy={true} smooth={true} delay={0} isDynamic={true}>
              <ButtonBase
                centerRipple={false}
                disableRipple={true}
                className={classes.navListMenuItem}
                onClick={(event) => {
                  handleClick(event, item);
                  setMenuOpen(false);
                  setBackdropOpen(false);
                }}
              >
                {item.toUpperCase()}
              </ButtonBase>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div className={classes.navContainerWrapper}>
      <Fade in={window.pageYOffset < 100}>
        <Container
          className={classes.navContainer}
          // style={{
          //   //display: window.pageYOffset < 100 ? "" : "none",
          //   transition: "all 5s ",
          // }}
        >
          {navList.map((item) => (
            <Link to={item} spy={true} smooth={true}>
              <ButtonBase
                key={item}
                centerRipple={false}
                disableRipple={true}
                className={classes.navListItem}
                onClick={(event) => handleClick(event, item)}
              >
                {item.toUpperCase()}
              </ButtonBase>
            </Link>
          ))}
        </Container>
      </Fade>
      <Fade in={window.pageYOffset >= 100}>
        <Grid container justify="flex-end" className={classes.hamIcon}>
          <IconButton
            aria-label="delete"
            className={classes.margin}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <CloseIcon fontSize="large" style={{ color: "#242424" }} />
            ) : (
              <MenuIcon fontSize="large" style={{ color: "#FBD630" }} />
            )}
          </IconButton>
        </Grid>
      </Fade>

      {OpenBackdrop()}
      {sideMenu()}
    </div>
  );
};

export default Navbar;
