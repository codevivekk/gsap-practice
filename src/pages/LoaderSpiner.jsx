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
  }, []);
  return (
    <div className="">
      <h1>Loader Spinner</h1>
      <div className="spinner h-[400px] w-[400px] border-t-4 border-red-400 m-auto mt-10 rounded-full "></div>
    </div>
  );
};

export default LoaderSpiner;
