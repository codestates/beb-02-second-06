import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";


const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
          <Tab label="Home" />
          <Tab label="Send" />
          <Tab label="Profile" />
          <Tab label="Login" />
          <Tab label="Sign in" />
        </Tabs>
      </AppBar>
    </>
  );
};

export default App;
