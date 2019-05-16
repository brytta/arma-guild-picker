import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout'
import Index from './components/Index'
import GuildPicker from './components/GuildPicker'
import GuildCompare from './components/GuildCompare'
import SkillPicker from './components/SkillPicker'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themeOverrides from './theme.js';
const theme = createMuiTheme(themeOverrides);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Route path="/arma-guild-picker/" exact component={GuildPicker} />
          <Route path="/arma-guild-picker/guild-picker/" component={GuildPicker} />
          <Route path="/arma-guild-picker/guild-compare/" component={GuildCompare} />
          <Route path="/arma-guild-picker/skill-picker/" component={SkillPicker} />
        </Layout>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
