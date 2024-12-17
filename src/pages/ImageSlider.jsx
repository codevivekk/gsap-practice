import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ImageSlider = () => {

  useGSAP(() => {
    gsap.to(
      ".image",
      {
        x: "200%",
        duration: 4,
        stagger: 1,
        repeat: -1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div>
      <h1>Image Slider</h1>
      <div
        className="img-url-wrapper"
      >
        {[1]?.map((img) => (
          <img
            src="../../public/vite.svg"
            height={500}
            width={500}
            key={img}
            className="image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
