import { useState, useEffect } from "react";

export const useAudio = (url: string) => {
  const [audio] = useState(() =>
    typeof Audio !== "undefined" ? new Audio(url) : undefined
  );
  const [playing, setPlaying] = useState(false);

  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);

  useEffect(() => {
    if (!audio) return;
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    if (!audio) return;
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, play, pause] as [boolean, Function, Function];
};
