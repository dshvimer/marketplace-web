import React from 'react';
import CardsResponsiveLayout from './';
import Card from '../Card';

export default {
    title: 'CardsResponsiveLayout'
};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const main = () => (
    <CardsResponsiveLayout>
        {items.map(() => (
            <Card />
        ))}
    </CardsResponsiveLayout>
);
