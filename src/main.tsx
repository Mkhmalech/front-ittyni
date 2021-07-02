import * as React from "react";
import { Provider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Store } from "redux";
import { IttyniState } from "./store";
import { History } from "history";
//provisoire Login signup page

// import aministration component 

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import {Home} from './website/index'
import Admin from './admin/Layout'


interface MainProps {
    store: Store<IttyniState>;
    history: History
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Route path={'/annuaire/*'} component={Home} />
                            <Route path={'/actes-tarifs/*'} component={Home} />
                            <Route path='/:user/*' component={Home} />
                            <Redirect from='/*' to={'/actes-tarifs/*'} />
                        </Switch>
                    </Router>
                </Provider>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default Main;