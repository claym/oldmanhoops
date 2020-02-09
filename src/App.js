import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Footer from './components/Footer';
import Event from './components/event/Event';
import logo from './images/omh_text.svg';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="body1" gutterBottom>
          <img src={logo} alt="Old Man Hoops Logo" style={{ border: 1 }} />
        </Typography>
        <Event />

        <Footer />
      </Box>
    </Container>
  );
}
/**
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './Event';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/