import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Header from './components/Header';
import LazyLoad from 'react-lazyload';
import Project from './components/Project';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <LazyLoad>
        <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <footer>
      <small>&copy; Copyright 2022, Maurice Yang</small> 
      </footer>
      </LazyLoad>
    </div>
  );
}

export default App;
