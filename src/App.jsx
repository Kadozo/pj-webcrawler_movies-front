import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { Box, Tabs, Tab, Container } from "@mui/material";

function App() {
  const [value, setValue] = useState("one");

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
        <Tab value={1} label="Item One" />
        <Tab value={2} label="Item Two" />
        <Tab value={3} label="Item Three" />
      </Tabs>
      {value == 1 && (
        <Container maxWidth="lg">
          <Card />
        </Container>
      )}
      {value == 2 && <Container maxWidth="lg">teste1</Container>}
      {value == 3 && <Container maxWidth="lg">teste2</Container>}
    </Box>
  );
}

export default App;
