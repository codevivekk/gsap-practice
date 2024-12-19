import { useEffect } from "react";
import ReverseScroll from "./ReverseScroll";
import ScrollBoxInfo from "./ScrollBoxInfo";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <div className="relative">
      <div className="h-[500vh]"></div>
      <ScrollBoxInfo/>
      <ReverseScroll />
      <div className="h-[50px] fixed bottom-0 text-white bg-white w-full z-50">
        Header
      </div>
    </div>
  );
};

export default Portfolio;
