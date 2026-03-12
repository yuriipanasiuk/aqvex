import sprite from "/images/svg/sprite.svg";
import type { FC } from "react";

interface VectorIconProps {
  id: string;
  width?: string;
  height?: string;
}

const VectorIcon: FC<VectorIconProps> = ({
  id,
  width = "16",
  height = "16",
}) => {
  return (
    <svg width={width} height={height} aria-hidden="true">
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default VectorIcon;
