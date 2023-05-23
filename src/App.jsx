import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { Box, Tabs, Tab, Container } from "@mui/material";
import { Movies } from "./pages/movies";

function App() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {};

  return (
    <Box>
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
        <Tab value={3} label="Categorias" />
      </Tabs>
      {value == 1 && (
        <Movies />
      )}
      {value == 2 && <Container maxWidth="lg">teste1</Container>}
      {value == 3 && <Container maxWidth="lg">teste2</Container>}
    </Box>
  );
}

export default App;
