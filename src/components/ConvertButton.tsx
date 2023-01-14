import { Button } from "dragontail-experimental";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { useAudio } from "../lib/useAudio";

export const ConvertButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ onClick, ref, ...props }) => {
  const [, play] = useAudio("/ji.mp3");

  return (
    <Button
      onClick={(e) => {
        play();
        if (onClick) onClick(e);
      }}
      {...props}
      color="teal"
    >
      Convert
    </Button>
  );
};
