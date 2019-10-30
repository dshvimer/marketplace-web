import React, { ReactNode } from 'react';
import './Button.scss';

export interface ButtonProps {
    children?: ReactNode;
}

const Button: React.FC = ({ children }: ButtonProps) => {
    return <div className="Button">{children}</div>;
};

export default Button;
