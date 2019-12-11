import React from "react";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import GitHubIcon from "@material-ui/icons/GitHub";
import AppBar from "@material-ui/core/AppBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

function App() {
  const [url, setUrl] = React.useState("");
  const [method, setMethod] = React.useState("GET");
  const [postBody, setPostBody] = React.useState("");
  const [results, setResults] = React.useState([]);
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#2d0202" }
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        {/* <AppBar>
          <GitHubIcon fontSize="large" style={{ padding: "10px" }}>
            <Link href="https://github.com/douglasnaphas/csrfx"></Link>
          </GitHubIcon>
        </AppBar> */}
        <Typography variant="h2" component="h1">
          CSRFX
        </Typography>
        <Typography variant="h3" component="h3" style={{ padding: "8px" }}>
          Attempt Cross-Site Request Forgeries to test defenses
        </Typography>
        <br />
        <br />
        <Paper className="White-paper" style={{ minWidth: "400px" }}>
          <div>
            GET{" "}
            <Switch
              checked={method !== "GET"}
              onChange={event => {
                if (event.target.checked) {
                  setMethod("POST");
                } else {
                  setMethod("GET");
                }
              }}
            ></Switch>{" "}
            POST
          </div>
          <Typography variant="h5" component="h3">
            Enter a URL
          </Typography>
          <div>
            <br />
            <TextField
              label="URL"
              fullWidth
              onChange={event => {
                setUrl(event.target.value);
              }}
            ></TextField>
          </div>
          <br />
          <br />
          {method === "POST" && (
            <div>
              <Typography variant="h5" component="h3">
                Enter a POST body
              </Typography>
              <TextField
                label="POST body"
                multiline
                fullWidth
                value={postBody}
                onChange={event => {
                  setPostBody(event.target.value);
                }}
              ></TextField>
            </div>
          )}
          <br />
          <div>
            <Button
              variant="contained"
              onClick={() => {
                setResults([]);
                [
                  {
                    description: "no-preflight",
                    contentType: "text/plain;charset=UTF-8"
                  },
                  {
                    description: "preflight-app/JSON",
                    contentType: "application/JSON"
                  }
                ].forEach(trial => {
                  const init = {
                    method,
                    credentials: "include",
                    headers: { "Content-Type": trial.contentType }
                  };
                  if (method === "POST") {
                    init.body = postBody;
                  }
                  fetch(url, init)
                    .then(r => {
                      console.log(r.status);
                      setResults(results =>
                        results.concat([
                          {
                            description: trial.description,
                            contentType: trial.contentType,
                            status: r.status
                          }
                        ])
                      );
                    })
                    .catch(e => {
                      setResults(results =>
                        results.concat([
                          {
                            description: trial.description,
                            contentType: trial.contentType,
                            status: "error"
                          }
                        ])
                      );
                    });
                });

                // non-preflighted content type

                // preflighted content type

                //
              }}
            >
              Execute
            </Button>
          </div>
        </Paper>
        {results && Array.isArray(results) && results.length > 0 && (
          <>
            <br />
            <Paper className="White-paper" style={{ minWidth: "400px" }}>
              <Typography variant="h5" component="h3">
                Results
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Content Type</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results.map((result, index) => (
                    <TableRow key={`${index}-${result.description}`}>
                      <TableCell>{result.description}</TableCell>
                      <TableCell>{result.contentType}</TableCell>
                      <TableCell>{result.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </>
        )}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
