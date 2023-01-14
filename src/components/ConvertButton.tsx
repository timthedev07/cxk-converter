import { Button } from "dragontail-experimental";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { useAudio } from "../lib/useAudio";
import { useSilent } from "../lib/silentContext";

export const ConvertButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ onClick, ref, ...props }) => {
  const [, play] = useAudio("/ji.mp3");
  const { silent } = useSilent();

  return (
    <Button
      onClick={(e) => {
        if (!silent) {
          play();
        }
        if (onClick) onClick(e);
      }}
      {...props}
      color="teal"
    >
      Convert
    </Button>
  );
};
