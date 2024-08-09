/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";

import { buttonStyle, gray, base } from "./style";

type Props = {
  children: React.ReactNode;
  color?: SerializedStyles;
  size?: SerializedStyles;
  handleClick?: () => void;
};

function Button({
  children,
  color = gray,
  size = base,
  handleClick = () => console.log('click'),
}: Props) {
  return (
    <button css={[buttonStyle, color, size]} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;