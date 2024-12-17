import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const TextFadeIn = () => {
  const textRef = useRef();
  useGSAP(() => {
    const texts = gsap.utils.toArray(textRef?.current?.children);
    texts.forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        duration: 5,
      });
    });
  }, []);
  return (
    <div className="text-white">
      <h1>Text Fade-In Animation</h1>
      <div
        className="para px-10 flex flex-col gap-10 text-xl mt-10"
        ref={textRef}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam
          perspiciatis ipsum quia labore, a illum numquam cumque ipsa rem
          debitis distinctio itaque perferendis illo eum corrupti culpa
          excepturi vero dolorem quae at. Obcaecati, tempore! Neque iure impedit
          et assumenda ullam! Sunt, porro. Quibusdam consequuntur omnis,
          recusandae est laborum veniam, eos amet distinctio sed, fugiat aliquid
          voluptates repellat quaerat quae minus saepe praesentium adipisci
          vitae. Quasi perspiciatis beatae alias aperiam minus corporis
          deleniti, eum ipsa labore quibusdam numquam error similique officiis
          maiores quos, ad illo possimus excepturi unde, tempora tempore
          distinctio? Explicabo possimus quam repellat nihil voluptatem est
          atque illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam
          perspiciatis ipsum quia labore, a illum numquam cumque ipsa rem
          debitis distinctio itaque perferendis illo eum corrupti culpa
          excepturi vero dolorem quae at. Obcaecati, tempore! Neque iure impedit
          et assumenda ullam! Sunt, porro. Quibusdam consequuntur omnis,
          recusandae est laborum veniam, eos amet distinctio sed, fugiat aliquid
          voluptates repellat quaerat quae minus saepe praesentium adipisci
          vitae. Quasi perspiciatis beatae alias aperiam minus corporis
          deleniti, eum ipsa labore quibusdam numquam error similique officiis
          maiores quos, ad illo possimus excepturi unde, tempora tempore
          distinctio? Explicabo possimus quam repellat nihil voluptatem est
          atque illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam
          perspiciatis ipsum quia labore, a illum numquam cumque ipsa rem
          debitis distinctio itaque perferendis illo eum corrupti culpa
          excepturi vero dolorem quae at. Obcaecati, tempore! Neque iure impedit
          et assumenda ullam! Sunt, porro. Quibusdam consequuntur omnis,
          recusandae est laborum veniam, eos amet distinctio sed, fugiat aliquid
          voluptates repellat quaerat quae minus saepe praesentium adipisci
          vitae. Quasi perspiciatis beatae alias aperiam minus corporis
          deleniti, eum ipsa labore quibusdam numquam error similique officiis
          maiores quos, ad illo possimus excepturi unde, tempora tempore
          distinctio? Explicabo possimus quam repellat nihil voluptatem est
          atque illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam
          perspiciatis ipsum quia labore, a illum numquam cumque ipsa rem
          debitis distinctio itaque perferendis illo eum corrupti culpa
          excepturi vero dolorem quae at. Obcaecati, tempore! Neque iure impedit
          et assumenda ullam! Sunt, porro. Quibusdam consequuntur omnis,
          recusandae est laborum veniam, eos amet distinctio sed, fugiat aliquid
          voluptates repellat quaerat quae minus saepe praesentium adipisci
          vitae. Quasi perspiciatis beatae alias aperiam minus corporis
          deleniti, eum ipsa labore quibusdam numquam error similique officiis
          maiores quos, ad illo possimus excepturi unde, tempora tempore
          distinctio? Explicabo possimus quam repellat nihil voluptatem est
          atque illo.
        </p>
      </div>
    </div>
  );
};

export default TextFadeIn;
