import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Resume from './components/Resume'
import Services from './components/Services';
import Project from './components/Project';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Services />
        <Project />
        <Footer/>
      </div>
    );
  }
}

export default App;
