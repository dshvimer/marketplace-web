import React from 'react';

import Button from 'components/Button';

import './Session.scss';

export interface SessionProps {}

const Session: React.FC = () => {
    return (
        <section className="Session">
            <form>
                <fieldset>
                    <legend>Sign In</legend>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" name="email-address" />
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>
                </fieldset>
            </form>
            <div className="">
                <Button>Sign In</Button>
            </div>
        </section>
    );
};

export default Session;
