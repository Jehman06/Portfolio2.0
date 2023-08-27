import CanvasComponent from './components/canvas/CanvasComponent';
import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="app-container">
      <CanvasComponent id='home' />
      <div className='content'>
        <Navbar />
        <div className="content-container">
          <About id='about' />
          <Projects id='projects' />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}