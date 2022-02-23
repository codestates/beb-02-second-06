import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Home} from "@material-ui/icons";
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';


const Tabbar = () => {
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
              <Tab path="/" label="Home" icon={<Home/>} />
              <Tab label="Community" value="1" />
              <Tab label="Profile" value="2"/>
              <Tab label="Login" value="3"/>
     
              <Tab label="Sign up" >
               <Link to="/Signup"></Link>
             </Tab>
              
            </Tabs>
        </AppBar>
      </>
    );
  };
  
  export default Tabbar;