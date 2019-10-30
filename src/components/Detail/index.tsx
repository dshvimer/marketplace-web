import React from 'react';

import Button from 'components/Button';

import './Detail.scss';

export interface DetailProps {}

const Detail: React.FC = () => {
    return (
        <section className="Detail">
            <article>
                <img
                    src="https://media.tenor.com/images/f11a168a4635a083bca93806d12867cf/raw"
                    alt="Photo of Jesse Grant"
                />
                <header>
                    <div>
                        <h1>Coach Tom</h1>
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
                <dl>
                    <dt>Favorite Song</dt>
                    <dd>Devil Got My Woman - Skip James</dd>
                    <dt>Favorite Movie</dt>
                    <dd>Primer</dd>
                    <dt>Favorite Artist</dt>
                    <dd>Kanye West</dd>
                    <dt>Favorite Food</dt>
                    <dd>Cheese Pizza</dd>
                    <dt>Least Favorite Flavor</dt>
                    <dd>Cherry</dd>
                    <dt>Favorite Hobby</dt>
                    <dd>Eating Cheese Pizza</dd>
                </dl>
                <h2>$69</h2>
                <Button>Purchase</Button>
            </article>
        </section>
    );
};

export default Detail;
