import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

export const PlayButton: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({}) => {
  return <button>Play</button>;
};
