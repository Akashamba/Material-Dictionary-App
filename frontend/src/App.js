import React, {useState} from "react";
import SearchBar from './components/search-bar/search-bar.component';
import Result from './pages/word-data/word-data.component';
import Homepage from "./pages/homepage/homepage.component";
import Navbar from './components/navbar/navbar.component';
import Container from '@material-ui/core/Container';
import { Switch, Route,  } from 'react-router-dom';
import "./styles.css";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {CssBaseline, Hidden} from '@material-ui/core';
import Footer from './components/footer/footer.component';

export default function App() {
  // const x = useMediaQuery('(prefers-color-scheme: dark)'); 
  const [prefersDarkMode, setTheme] = useState(true)
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar prefersDarkMode={prefersDarkMode} setTheme={setTheme} />
      <br />
      <Container>
        <Hidden mdUp>
          <SearchBar />
        </Hidden>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/word/:word' component={Result} />
          <Route component={Homepage} />
        </Switch>
      </Container>  
      <Footer theme={prefersDarkMode} />  
    </ThemeProvider>
  );
}
