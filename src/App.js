
import './App.css';
// import {Button,Alert,  }from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Home from './components/dashboard/Home';
// import 'materialize-css/dist/css/materialize.min.css'
import About from './components/dashboard/About';
import Blog from './components/dashboard/Blog';
import Contact from './components/dashboard/Contact';
import Footer from './components/layout/footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
