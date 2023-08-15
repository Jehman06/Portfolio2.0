import CanvasComponent from './components/canvas/CanvasComponent';
import { Animator, ScrollContainer, ScrollPage, Sticky, batch, FadeOut, MoveIn, FadeIn, MoveOut, ZoomOut, StickyIn } from 'react-scroll-motion';

import About from './components/about/About';

function App() {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(StickyIn())}>
          <CanvasComponent />
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator>
          <About />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
