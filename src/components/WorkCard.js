import React from "react";

import {
  Typography,
  Grid,
  makeStyles,
  Button,
  Container,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
} from "@material-ui/core";
import { Title } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    backgroundColor: "#242424",
    margin: "1.1rem",
  },
});

const WorkCard = ({
  title,
  description,
  isOpen,
  image,
  sourceLink,
  projectLink,
}) => {
  const classes = useStyles();

  const onClickHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="130"
        alt={title}
        image={image}
        title={title}
      />
      <Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            {title}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "#efefef" }}
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {isOpen && (
            <Button
              size="small"
              color="primary"
              onClick={() => onClickHandler(sourceLink)}
            >
              Source
            </Button>
          )}
          <Button
            size="small"
            color="primary"
            onClick={() => onClickHandler(projectLink)}
          >
            View
          </Button>
        </CardActions>
      </Grid>
    </Card>
  );
};

export default WorkCard;
