import DogImg from "../images/home_dog.jpeg";
import "./home.scss";
import { Typography, Button } from "@mui/material";

export const Home = () => {
  return (
    <div>
      <div className="home-search">
        <img className="home-search-img" src={DogImg} />
        <Typography className="home-search-title" variant="h1">
          Save a life, adopt a best friend
        </Typography>
        <Button
          className="home-search-button"
          color="inherit"
          variant="contained"
        >
          Search
        </Button>
      </div>
      <div>map</div>
      <div>banner</div>
    </div>
  );
};
