import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LoaderSpiner = () => {
  useGSAP(() => {
    gsap.to(".spinner", {
      rotation: 360,
      repeat: -1,
      duration: 1,
      ease: "linear",
    });
    gsap.to(".pulse", {
      scale: 1.5,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "linear",
    });
  }, []);
  return (
    <div className="">
      <h1>Loader Spinner</h1>
      <div className="wrappper flex">
        <div className="spinner h-[400px] w-[400px] border-t-4 border-red-400 m-auto mt-10 rounded-full "></div>
        <div className="pulse h-[200px]  w-[200px] border-4 border-red-400 m-auto mt-28 rounded-full "></div>
      </div>
    </div>
  );
};

export default LoaderSpiner;
