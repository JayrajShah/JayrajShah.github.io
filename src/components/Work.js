import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import WorkCard from "./WorkCard";
import placementPic from "../assets/placement.jpg";
import covidPic from "../assets/covid.jpg";
import whatsappPic from "../assets/whatsapp.jpg";
import alogrithmPic from "../assets/algorithm.jpg";
import Title from "./Title";

// const useStyles = makeStyles((theme) => ({
//   about: {
//     display: "flex",
//     height: "100%",
//   },
// }));

const Work = () => {
  //   const classes = useStyles();
  return (
    <Grid style={{ minHeight: "auto", backgroundColor: "#242424" }} id="work">
      <Grid container direction="column">
        <Title sectionTitle="MY PROJECTS" />
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <WorkCard
            title="Placement ERP"
            isOpen={false}
            projectLink="https://jjs-erp-test.herokuapp.com/"
            description="Enabling Placement Dept. to manage placement drives and students to register drives. Also making students data centralized. MERN Stack"
            image={placementPic}
          />
          <WorkCard
            title="Algorithm Visualizer"
            isOpen={true}
            sourceLink="https://github.com/JayrajShah/Algorithm_Visualizer"
            projectLink="https://al-viz.netlify.app/"
            description="Visualize various sorting Algorithm with variable speeds and user-entered values."
            image={alogrithmPic}
          />
          <WorkCard
            title="Covid19 Tracker - Android App"
            isOpen={true}
            sourceLink="https://github.com/JayrajShah/COVID-19-Tracker"
            projectLink="https://drive.google.com/file/d/1POBA0HwzBWYXeKrocn9222vFSvQ4NHsc/view?usp=sharing"
            description="See world-wide Covid19 Cases. Filter according to Countries. Built with REACT-NATIVE"
            image={covidPic}
          />
          <WorkCard
            title="WhatsApp Clone"
            isOpen={true}
            sourceLink="https://github.com/JayrajShah/whatsapp-clone"
            projectLink="https://whatsapp-clone-63836.web.app/"
            description="A Simple but authentic looking Whatsapp Clone made using ReactJS and material UI for frontend and mongoDB for back-end with Google Firebase Authentication."
            image={whatsappPic}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Work;
