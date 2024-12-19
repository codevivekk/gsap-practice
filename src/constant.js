import {
  GsapTo,
  GsapFrom,
  GsapFromTo,
  Home,
  GsapTimeline,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  ImageSlider,
  LoaderSpiner,
  ReverseScroll,
  BouncingBall,
} from "./pages";
import TextFadeIn from "./pages/TextFadeIn";
import ThreeJs from "./pages/ThreeJs";


export const paths = [
  {
    title: "Home Page",
    description: "Home Page",
    path: "/",
    // element: <Home />,
  },
  {
    title: "GSAP To",
    description:
      "The to() method is used to animate a single element from a starting state to an ending state.",
    path: "/gsapto",
    // element: <GsapTo />,
  },
  {
    title: "GSAP From",
    description:
      "The from() method is used to animate a single element from an ending state to a starting state.",
    path: "/gsapfrom",
    // element: <GsapFrom />,
  },
  {
    title: "GSAP FromTo",
    description:
      "The fromTo() method is used to animate a single element from a starting state to an ending state and vice versa.",
    path: "/gsapfromto",
    // element: <GsapFromTo />,
  },
  {
    title: "GSAP Timeline",
    description:
      "The timeline() method is used to create a timeline to manage multiple animations.",
    path: "/gsaptimeline",
    // element: <GsapTimeline />,
  },
  {
    title: "GSAP Stagger",
    description:
      "The stagger() method is used to animate multiple elements with a stagger effect.",
    path: "/gsapstagger",
    // element: <GsapStagger />,
  },
  {
    title: "GSAP ScrollTrigger",
    description:
      "The ScrollTrigger plugin is used to trigger animations based on the scroll position.",
    path: "/gsapscrolltrigger",
    // element: <GsapScrollTrigger />,
  },
  {
    title: "GSAP Text",
    description: "Learn how to animate text with GSAP.",
    path: "/gsaptext",
    // element: <GsapText />,
  },
  {
    title: "Text Fade-In Animation",
    description:
      "Animate text to fade in one word or letter at a time on page load.",
    path: "/textfadein",
    // element: <TextFadeIn />,
  },
  {
    title: "Bouncing Ball",
    description:
      "Create a ball that bounces vertically, simulating gravity and easing. ",
    path: "/bouncing-ball",
    // element: <BouncingBall />,
  },
  {
    title: "Simple Image Slider",
    description:
      "Animate images sliding from left to right, with ease effects.",
    path: "/image-slider",
    // element: <ImageSlider />,
  },
  {
    title: "Loading Spinner Animation",
    description:
      "Use GSAP to create a rotating circle for a loading animation.",
    path: "/loader-spinner",
    // element: <LoaderSpiner />,
  },
  {
    title: "Reverse Scroll",
    description: "Reverse scroll",
    path: "/reverse-scroll",
    // element: <ReverseScroll />,
  },
  {
    title: "Three Js",
    description: "Three Js",
    path: "/three-js",
    // element: <ThreeJs />,
  },
];
