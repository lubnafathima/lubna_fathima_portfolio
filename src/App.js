import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Skill from './component/Skill';
import Project from './component/Project';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <Skill />
      <Project />
      <div className='bottom'>
        <Contact />
        <Navbar />
      </div>
    </div>
  );
}

export default App;