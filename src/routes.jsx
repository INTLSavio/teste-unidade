import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { CounterPage } from './pages/CounterPage'

export function Routes() {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CounterPage} path="/counter" />
        </BrowserRouter>
    );
}