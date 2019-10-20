import React from "react";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const [url, setUrl] = React.useState("initial url");
  const [counter, setCounter] = React.useState(0);
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
      <Paper className="White-paper" style={{ minWidth: "400px" }}>
        <Typography variant="h5" component="h3">
          Enter a URL
        </Typography>
        <br />
        <TextField
          label="URL:"
          fullWidth
          onChange={event => {
            setUrl(event.target.value);
          }}
        ></TextField>
        <br />
        <Button
          variant="contained"
          onClick={() => {
            console.log(url);
            fetch(url).then(r => {
              console.log(r.status);
            });
          }}
        >
          Execute
        </Button>
      </Paper>
    </div>
  );
}

export default App;
