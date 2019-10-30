import React from 'react';

import './Card.scss';

export interface CardProps {}

const Card: React.FC = () => {
    return (
        <section className="Card">
            <article>
                <img
                    src="https://media.tenor.com/images/f11a168a4635a083bca93806d12867cf/raw"
                    alt="Photo of Jesse Grant"
                />
                <header>
                    <div>
                        <h1>Coach Tom</h1>
                    </div>
                    <div>
                        <h2>$69</h2>
                    </div>
                </header>
                <div>
                    <p>
                        Lorem ipsum dolor amet raw denim semiotics williamsburg
                        bushwick coloring book, slow-carb pinterest blog pickled
                        intelligentsia farm-to-table whatever trust fund
                        stumptown. Knausgaard chia taxidermy four dollar toast
                        vice keytar sriracha. Direct trade letterpress coloring
                        book dreamcatcher.
                    </p>
                </div>
            </article>
        </section>
    );
};

export default Card;
