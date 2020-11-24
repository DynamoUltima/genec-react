
import './App.css';
// import {Button,Alert,  }from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Home from './components/dashboard/Home';
import Layout from './components/layout/Layout';


function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Layout>
      </div>
    </BrowserRouter>
    </>

  );
}

export default App;
