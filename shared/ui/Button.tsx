import { FunctionComponent } from 'react';

export type ButtonPropType = {
  onClick?: () => void;
};

const Button: FunctionComponent<ButtonPropType> = props => {
  return (
    <button
      onClick={() => {
        if (typeof props.onClick === 'function') {
          props.onClick();
        }
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
