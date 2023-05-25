import { useState } from "react";
import "./App.css";
import { Box, Tabs, Tab, Grid } from "@mui/material";
import { Movies } from "./pages/movies";
import { Series } from "./pages/series";
import { Genres } from "./pages/Genres";

function App() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Grid container justifyContent={"center"}>
        <Grid item>
          <h1 style={{fontFamily: "sans-serif", fontWeight: "bold"}}>Filmes e Séries - Análise</h1>
        </Grid>
      </Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab value={1} label="Filmes" />
        <Tab value={2} label="Series" />
        <Tab value={3} label="Gêneros" />
      </Tabs>
      {value == 1 && (
        <Movies />
      )}
      {value == 2 && <Series />}
      {value == 3 && <Genres />}
    </Box>
  );
}

export default App;
