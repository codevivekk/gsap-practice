// import Image from "next/image";
import {
  moon,
  mountains_behind,
  mountains_front,
} from "../../public/assests/parallex";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ReverseScroll = () => {
  useGSAP(() => {
    gsap.to(".moon", {
      y: -100,
      scrollTrigger: {
        trigger: ".moon",
        scrub: true,
      },
    });

    gsap.to(".mountains_behind", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".mountains_behind",
        scrub: true,
      },
    });

    gsap.to(".mountains_front", {
      scale: 1.2,

      scrollTrigger: {
        trigger: ".mountains_front",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="w-full absolute bottom-0 parallax-wrapper">
    <img src={moon} className="moon absolute" />
    <img
      src={mountains_behind}
      className="mountains_behind absolute w-full"
    />
    <img
      src={mountains_front}
      className="mountains_front absolute w-full"
    />
  </div>
  );
};

export default ReverseScroll;
