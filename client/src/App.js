import React from "react";
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Home} from "@material-ui/icons";
import Signup from "./components/Signup";
import Tabbar from "./components/Tabbar";

const App = () => {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div>

      <Tabbar/>
     <Signup/>
    
    </div>
  );
}

export default App;
