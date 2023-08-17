import CanvasComponent from './components/canvas/CanvasComponent';
import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';
import Projects from './components/Projects/Projects';

export default function App() {
  return (
    <div className="app-container">
      <CanvasComponent />
      <div className='content'>
        <Navbar />
        <div className="content-container">
          <About />
          {/* <Projects /> */}
        </div>
      </div>
    </div>
  );
}