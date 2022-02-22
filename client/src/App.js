import React from "react";
import { Link } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Home} from "@material-ui/icons";

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Main Tabs"
          textColor="inherit"
        >
           {/* <Route element={<Tab path="/" label="Home" icon={<Home />} />}/> */}
            <Tab path="/" label="Home" icon={<Home/>} />
            <Tab label="Community" value="1" />
            <Tab label="Profile" value="2"/>
            <Tab label="Login" value="3"/>
   
            <Tab label="Sign up" >
             <Link to="/signUp"></Link>
            </Tab>
            
          </Tabs>
      </AppBar>
    </>
  );
};

export default App;
