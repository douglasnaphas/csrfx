import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  const [url, setUrl] = React.useState('');
  const [method, setMethod] = React.useState('GET');
  const [postBody, setPostBody] = React.useState('');
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
      <Paper className="White-paper" style={{ minWidth: '400px' }}>
        <div>
          GET{' '}
          <Switch
            checked={method !== 'GET'}
            onChange={event => {
              if (event.target.checked) {
                setMethod('POST');
              } else {
                setMethod('GET');
              }
            }}
          ></Switch>{' '}
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
        {method === 'POST' && (
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
              const init = {
                method,
                credentials: 'include'
                // Content-Type: "application/JSON" triggers a preflight
                // headers: { 'Content-Type': 'application/JSON' }
              };
              if (method === 'POST') {
                init.body = postBody;
              }
              fetch(url, init).then(r => {
                console.log(r.status);
              });
            }}
          >
            Execute
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
