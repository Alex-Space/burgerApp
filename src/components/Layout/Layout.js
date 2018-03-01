import React from 'react';
import Aux from '../../hoc/_Aux';
import classes from './Layout.css';

const lauout = (props) => (
    <Aux>
        <div>Toolbar, SideBar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default lauout;