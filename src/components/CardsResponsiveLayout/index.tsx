import React, { ReactNode } from 'react';
import './CardsResponsiveLayout.scss';

export interface CardsResponsiveLayoutProps {
    children?: ReactNode;
}

const CardsResponsiveLayout: React.FC = ({
    children
}: CardsResponsiveLayoutProps) => {
    return <section className="CardsResponsiveLayout">{children}</section>;
};

export default CardsResponsiveLayout;
