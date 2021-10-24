import { Link, useLocation } from 'react-router-dom';

import { cloneElement } from 'react';

export function ActiveLink({ children, activeClassName, ...rest }) {
    const { pathname } = useLocation();

    const className = pathname === rest.to
        ? activeClassName
        : '';
     
    return(
        <Link {...rest}>
            {cloneElement(children, {
                className,
            })}
        </Link>
    );
}