import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "./pages";
import TextFadeIn from "./pages/TextFadeIn";
import BouncingBall from "./pages/BouncingBall";
import ImageSlider from "./pages/ImageSlider";
import LoaderSpiner from "./pages/LoaderSpiner";
import ReverseScroll from "./pages/ReverseScroll";
import Portfolio from "./pages/Portfolio";
import ThreeJs from "./pages/ThreeJs";

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/textfadein" element={<TextFadeIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/bouncing-ball" element={<BouncingBall />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/loader-spinner" element={<LoaderSpiner />} />
          <Route path="/reverse-scroll" element={<ReverseScroll />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/three-js" element={<ThreeJs/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
