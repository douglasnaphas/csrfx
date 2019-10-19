import React from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h1">
        CSRFX
      </Typography>
      <Typography variant="h3" component="h3">
        Attempt Cross-Site Request Forgeries to test defenses
      </Typography>
      <br />
      <br />
      <Paper className="White-paper">
        <Typography variant="h5" component="h3">
          Enter a URL
        </Typography>
        <br />
        <TextField label="URL:"></TextField>
      </Paper>
    </div>
  );
}

export default App;
