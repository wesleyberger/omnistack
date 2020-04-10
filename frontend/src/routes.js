import React from 'react';

/** !Estudar mais sobre */
import { BrowserRouter, Route, Switch} from 'react-router-dom';

/** importando paginas */
import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import NewIncident from './Pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidente/new" component={NewIncident} />


            </Switch>  
        </BrowserRouter>
    );
}