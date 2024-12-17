import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BouncingBall = () => {
  useGSAP(() => {
    gsap.to('.ball' , {
      y : -250,
      duration : 1,
      repeat : -1,
      yoyo : true,
    })
  } , [])
  return (
    <div>
      <h1>Bouncing Ball</h1>
      <div className="h-[60vh] border-[1px] solid white rounded-lg relative flex justify-center items-center">
        <div className="ball size-20 rounded-full bg-red-500 absolute bottom-0"></div>
      </div>
    </div>
  );
};

export default BouncingBall;
