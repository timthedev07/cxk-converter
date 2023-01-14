import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useSilent } from "../lib/silentContext";
import { useAudio } from "../lib/useAudio";

interface SilentButtonProps {
  className?: string;
}

export const SilentButton: FC<SilentButtonProps> = ({ className }) => {
  const { silent, setSilent } = useSilent();
  const [, play] = useAudio("/ji.mp3");
  const [gifMode, setGifMode] = useState<"playing" | "idle" | "ending">("idle");

  useEffect(() => {
    if (gifMode === "playing") {
      const t = setTimeout(() => {
        setGifMode("ending");
      }, 600);

      return () => {
        clearTimeout(t);
        setGifMode("ending");
      };
    }
    return () => {};
  }, [gifMode]);

  return (
    <>
      <div
        className={`absolute z-[1000] transition duration-[700ms] ${
          gifMode === "playing"
            ? "animate-fade-in"
            : gifMode === "ending"
            ? "animate-fade-out"
            : "hidden z-[-10]"
        }`}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          loading="lazy"
          className={`rounded-2xl`}
          src="/kun.gif"
          alt="静音"
          width={286}
          height={252}
        />
      </div>
      <div
        className={`absolute block transition duration-[300ms] ${
          gifMode === "playing" ? "opacity-[70] z-[999]" : "opacity-0 z-[-100]"
        } bg-black/60 w-screen h-screen`}
      ></div>
      <div
        className={`${className} w-8 h-8`}
        onClick={() => {
          play();
          setSilent((prev) => !prev);
          setGifMode("playing");
        }}
      >
        <div className="relative w-full h-full cursor-pointer">
          {silent ? (
            <Image
              loading="lazy"
              className={`rounded-full`}
              src="/ikun.png"
              alt="静音"
              fill
            />
          ) : (
            <Image
              loading="lazy"
              className={`rounded-full`}
              src="/ikun-sound.png"
              alt="静音"
              fill
            />
          )}
        </div>
      </div>
    </>
  );
};
