import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
