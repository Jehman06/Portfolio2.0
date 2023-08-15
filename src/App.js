import { Animator, ScrollContainer, ScrollPage, Sticky, batch, FadeOut, MoveIn, FadeIn, MoveOut, ZoomOut, StickyIn } from 'react-scroll-motion';

import CanvasComponent from './components/canvas/CanvasComponent';
import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(StickyIn())}>
          <CanvasComponent />
        </Animator>
      </ScrollPage>

      <Navbar />

      <ScrollPage>
        <Animator>
          <About />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;