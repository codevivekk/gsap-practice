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

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
