import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";

export const Header = () => {
  return (
    <AppBar color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" color="inherit" component="div">
            Furry Friends Finder
          </Typography>
          <Button sx={{ my: 2, display: "block" }} color="inherit">
            Search
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
