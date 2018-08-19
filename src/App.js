import React, { Component } from 'react';

import './styles/style.css';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import TheSite from './components/TheSite';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {
  state = {

    sections: [
      {id: 0, name: "about", active: false},
      {id: 1, name: "resume", active: false},
      {id: 2, name: "thesite", active: false},
      {id: 3, name: "projects", active: false}, 
      {id: 4, name: "blog", active: false},
      {id: 5, name: "contact", active: false},
    ] 

  }

  handleActivateSection = section => {
    
    const newSections = this.state.sections.map(s => s === section ? { id: s.id, name: s.name, active: true } : { id: s.id, name: s.name, active: false });

    this.setState({ sections: newSections });

  };


  render() {
    // destructuring to clean up code a little
    const { sections } = this.state;

    return (
      <div className="app">

        <Navigation 
          sections={ sections } 
          onActivateSection={ this.handleActivateSection } 
        />

        <Switch> 
          <Route path="/about" exact render={(props) => <About sections={sections} sectionActive={this.state.sections[0].active} {...props}/>}/>
          <Route path="/resume" render={(props) => <Resume sections={sections} {...props}/>}/>
          <Route path="/thesite" render={(props) => <TheSite sections={sections} sectionActive={this.state.sections[2].active} {...props}/>}/>
          <Route path="/projects" render={(props) => <Projects sections={sections} {...props}/>}/>
          <Route path="/blog" render={(props) => <Blog sections={sections} {...props}/>}/>          
          <Route path="/contact" render={(props) => <Contact sections={sections} {...props}/>}/>
          <Route path="/notfound" component={NotFound}/>
          <Redirect from="/" to="/about"/>
          <Redirect to="/notfound"/>
        </Switch>


        <div className="main-title-wrap"> 
          <h1 className="main-title display-3">Kranti Nebhwani</h1>
          <p className="main-title-desc">Frontend Web Developer / Software Engineer</p>
        </div>

        
      </div>
      
    );
  }
}

export default App;
