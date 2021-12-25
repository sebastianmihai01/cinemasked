import Card from "../card/Card";
import ResponsiveAppBar from "../navigation/ResponsiveAppBar";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Share from "../../images/share.png";
import Movie from "../../images/movie.png";
import Chat from "../../images/chat.png";
import CustomRouter from "../navigation/CustomRouter";
import MainCarousel from "../carousel/Carousel";

const Home = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <React.Fragment>
      <ResponsiveAppBar />

      <Grid
        container
        direction="row"
        sx={{
          color: "white",
          marginTop: "150px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          textShadow: "0px 0px 3px black",
        }}
      >
        <Grid item xs={6} sx={{alignItems:'center', paddingLeft:'4em'}}>
          <h1 style={{ textAlign: "center" }}>Make your favourite's movie review heard!</h1>
          <h6 style={{ textAlign: "center", paddingInline:'5em'}}>
            The place for cinemaphiles, where you can share your opinion about
            your favorite film, either publicly or anonimously!
          </h6>
        </Grid>
        <Grid item xs={5} sx={{float:'right'}}>
          <MainCarousel></MainCarousel>
        </Grid>
      </Grid>

      <div
        className="col-span-4"
        style={{
          background: "white",
          opacity: "0.1",
          height: "11em",
          position: "fixed",
          width: "100%",
          bottom: "0em",
          color: "white",
        }}
      />

      <div
        className="col-span-4"
        style={{
          background: "transparent",
          opacity: "0.7",
          height: "10em",
          position: "fixed",
          display: "flex",
          width: "100%",
          bottom: "6em",
          justifyContent: "center",
          color: "white",
          display: "flex",
          fontSize: "10px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>For Developers</h1>
          <h2>
            Share your own view on a specific movie in an interactive way!
            React, comment, share, basically everything you want! Don't forget
            to create some connections in the meantime as well!
          </h2>
          <img src={Share} width="40px" height="40px"></img>
        </div>
        <div
          style={{
            paddingLeft: "10em",
            paddingRight: "15em",
            textAlign: "center",
          }}
        >
          <h1>With Developers</h1>
          <h2>
            Browse throughout all movies available on ImdB! We use the public
            API to provide you the latest information about the films you fancy
            watching or commenting!
          </h2>
          <img src={Movie} width="40px" height="40px"></img>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1>By Developers </h1>
          <h2>
            Save, edit, share and make friends :)! Everyone who has watched a
            movie can and should post a comment/new thread here! Help others
            man!
          </h2>
          <img src={Chat} width="40px" height="40px"></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
