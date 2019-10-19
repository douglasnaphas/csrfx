import React from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const [url, setUrl] = React.useState(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
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
        <TextField
          label="URL:"
          value={url}
          style={{ width: "auto" }}
        ></TextField>
        <br />
        <Button variant="contained" onClick={() => {}}>
          Execute
        </Button>
      </Paper>
    </div>
  );
}

export default App;
