import React from "react";
import Image from "next/image";

// Componente bem simples que recebe uma imagem
// e se está selecionada ou não (apenas para efeitos visuais)

interface FlagProps
  extends Omit<React.ComponentProps<typeof Image>, "alt" | "src"> {
  image: string;
  isSelected?: boolean;
  alt: string;
}

const Flag = ({ image, isSelected, alt, ...props }: FlagProps) => (
  <Image
    alt={alt}
    src={image}
    width={24}
    height={24}
    className={isSelected ? "flag selected" : "flag"}
    {...props}
  />
);

export default Flag;
