import React from "react";
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import SignIn from "./components/Signin";
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
      <SignIn/>    
    </div>
  );
}

export default App;
