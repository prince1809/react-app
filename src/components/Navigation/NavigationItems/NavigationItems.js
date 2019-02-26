import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        { props.isAuthenticated
            ?  <Aux><NavigationItem link="/orders">Orders</NavigationItem><NavigationItem link="/logout">Logout</NavigationItem></Aux>
            : <NavigationItem link="/auth">Authenticate</NavigationItem>}
    </ul>
);

export default navigationItems;